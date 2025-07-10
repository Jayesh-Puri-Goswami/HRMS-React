import { ReactElement, ReactNode } from "react";
// import { Link } from "react-router";

interface BreadcrumbProps {
  pageTitle: string;
  endSection?: string | ReactElement | ReactNode;
}

const PageBreadcrumb: React.FC<BreadcrumbProps> = ({
  pageTitle,
  endSection,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
      <h2
        className="text-xl font-semibold text-gray-800 dark:text-white/90 capitalize"
        x-text="pageName"
      >
        {pageTitle}
      </h2>
      <nav>
        <ol className="flex items-center gap-1.5">{endSection}</ol>
      </nav>
    </div>
  );
};

export default PageBreadcrumb;
