import clsx from "clsx";
import { Search } from "lucide-react";
import React from "react";

interface SearchBarProps {
  placeHolder ?: string;
  className ?: string;
  direction ?: 'right' | 'left'
}

const SearchBar : React.FC<SearchBarProps> = ({className,direction,placeHolder}) => {
  return (
    <div className= {clsx("bg-themeBackgroundColor dark:bg-white/[0.2] w-[310px] h-[51px] rounded-[31px] flex items-center",className)}>
      <Search className="ml-3 text-[#5A5A5A] dark:text-white/50" />
      <input
        type="text"
        placeholder= {placeHolder || "Search..."}
        className="bg-transparent border-none outline-none flex-1 px-2 text-[#adadad] dark:text-white"
      />
    </div>
  );
};
 
export default SearchBar;