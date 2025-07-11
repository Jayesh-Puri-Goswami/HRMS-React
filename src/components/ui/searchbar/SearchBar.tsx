import { Search } from "lucide-react";
 
const SearchBar = () => {
  return (
    <div className="bg-themeBackgroundColor dark:bg-white/[0.2] w-[310px] h-[51px] rounded-[31px] flex items-center">
      <Search className="ml-3 text-[#5A5A5A] dark:text-white/50" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent border-none outline-none flex-1 px-2 text-[#adadad] dark:text-white"
      />
    </div>
  );
};
 
export default SearchBar;