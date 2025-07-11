/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FolderPen } from "lucide-react";
// import Button from "../ui/button/Button";
import SearchBar from "../searchbar/SearchBar";
import StatusBadge from "../badge/StatusBadge";
import Button from "../button/Button";
import { ReactElement, ReactNode } from "react";

type TableColumn<T> = {
  key: keyof T;
  header: string;
  render?: (row: T) => React.ReactNode;
};

type DataTableProps<T> = {
  data: T[];
  columns: TableColumn<T>[];
  title?: string;
  showSearch?: boolean;
  showActionButton?: boolean;
  showFilter?: boolean;
  filter?: any;
};

export default function DataTable<T extends { [key: string]: any }>({
  data,
  columns,
  title,
  showSearch = true,
  showActionButton = true,
  showFilter,
  filter,
}: DataTableProps<T>) {
  return (
    <div className="space-y-2">
      {(showSearch || showActionButton) && (
        <div className="flex items-center justify-between">
          {showSearch && <SearchBar />}
          {showActionButton && (
            <Button variant="outline" size="sm" className="ml-4 bg-transparent">
              <FolderPen className="h-4 w-4 dark:text-white" />
            </Button>
          )}
          {showFilter && (
            <div className="flex items-center justify-between">{filter}</div>
          )}
        </div>
      )}

      <div className="overflow-x-auto py-4">
        {title && (
          <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
            {title}
          </h2>
        )}

        <div className="overflow-hidden rounded-t-2xl border border-gray-200 dark:border-white/10">
          <table className="w-full">
            <thead>
              <tr className="bg-themeBackgroundColor dark:bg-white/[0.2]">
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    className="text-center py-3 px-4 font-medium text-gray-600 dark:text-gray-300"
                  >
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-white/[0.05]">
              {data.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-white/[0.03] transition"
                >
                  {columns.map((col, j) => (
                    <td
                      key={j}
                      className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300 odd:bg-gray-100 even:bg-gray-50 dark:odd:bg-white/[0.02] dark:even:bg-white/[0.04] "
                    >
                      {col.render ? col.render(row) : (row[col.key] as any)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
