<?php

declare(strict_types=1);

namespace OCA\Memories\Db;

trait TimelineQueryCTE
{
    /**
     * CTE to get all files recursively in the given top folders
     * :topFolderIds - The top folders to get files from.
     *
     * @param bool $hidden Whether to include files in hidden folders
     *                     If the top folder is hidden, the files in it will still be returned
     *                     Hidden files are marked as such in the "hidden" field
     */
    protected static function CTE_FOLDERS_ALL(bool $hidden): string
    {
        // Filter out folder MIME types
        $FOLDER_MIME_QUERY = "SELECT MAX(id) FROM *PREFIX*mimetypes WHERE mimetype = 'httpd/unix-directory'";

        // Select 1 if there is a .nomedia file in the folder
        $SEL_NOMEDIA = "SELECT 1 FROM *PREFIX*filecache f2
            WHERE (f2.parent = f.fileid)
            AND (f2.name = '.nomedia' OR f2.name = '.nomemories')";

        // Check no nomedia file exists in the folder
        $CLS_NOMEDIA = "NOT EXISTS ({$SEL_NOMEDIA})";

        // Whether to filter out hidden folders
        $CLS_HIDDEN_JOIN = $hidden ? '1 = 1' : "f.name NOT LIKE '.%'";

        return
        "*PREFIX*cte_folders_all(fileid, name, hidden) AS (
            SELECT f.fileid, f.name,
                (0) AS hidden
            FROM *PREFIX*filecache f
            WHERE (
                f.fileid IN (:topFolderIds) AND
                {$CLS_NOMEDIA}
            )

            UNION ALL

            SELECT f.fileid, f.name,
                (CASE WHEN c.hidden = 1 OR f.name LIKE '.%' THEN 1 ELSE 0 END) AS hidden
            FROM *PREFIX*filecache f
            INNER JOIN *PREFIX*cte_folders_all c
                ON (
                    f.parent = c.fileid AND
                    f.mimetype = ({$FOLDER_MIME_QUERY}) AND
                    ({$CLS_HIDDEN_JOIN})
                )
            WHERE (
                {$CLS_NOMEDIA}
            )
        )";
    }

    /**
     * CTE to get all folders recursively in the given top folders.
     *
     * @param bool $hidden Whether to include files in hidden folders
     */
    protected static function CTE_FOLDERS(bool $hidden): string
    {
        $CLS_HIDDEN = $hidden ? 'MIN(hidden)' : '0';

        $cte = "*PREFIX*cte_folders AS (
            SELECT
                fileid, ({$CLS_HIDDEN}) AS hidden
            FROM
                *PREFIX*cte_folders_all
            GROUP BY
                fileid
        )";

        return self::bundleCTEs([self::CTE_FOLDERS_ALL($hidden), $cte]);
    }

    /**
     * CTE to get all archive folders recursively in the given top folders.
     */
    protected static function CTE_FOLDERS_ARCHIVE(): string
    {
        $cte = "*PREFIX*cte_folders(fileid) AS (
            SELECT
                cfa.fileid
            FROM
                *PREFIX*cte_folders_all cfa
            WHERE
                cfa.name = '.archive'
            GROUP BY
                cfa.fileid
            UNION ALL
            SELECT
                f.fileid
            FROM
                *PREFIX*filecache f
            INNER JOIN *PREFIX*cte_folders c
                ON (f.parent = c.fileid)
        )";

        return self::bundleCTEs([self::CTE_FOLDERS_ALL(true), $cte]);
    }

    /**
     * @param string[] $ctes The CTEs to bundle
     */
    protected static function bundleCTEs(array $ctes): string
    {
        return 'WITH RECURSIVE '.implode(',', $ctes);
    }
}
