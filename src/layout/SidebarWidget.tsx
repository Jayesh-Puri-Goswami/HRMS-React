export default function SidebarWidget() {
  return (
    <div
      className={`
    mx-auto my-10 mb-20 border-t border-gray-300 pt-10 w-full max-w-60 text-center 
    dark:border-white/10 dark:bg-transparent
  `}
    >
      <div
        className="
      bg-[#6c3ecd] text-white px-4 py-2 rounded-t-xl 
      dark:bg-gradient-to-r dark:bg-indigo-700
    "
      >
        <span className="text-sm font-semibold tracking-wide">
          Upcoming Events
        </span>
      </div>

      <div
        className="
      min-h-56 px-4 py-4 rounded-b-xl bg-[#e6eaec] 
      dark:bg-gray-dark dark:backdrop-blur-md dark:ring-1 dark:ring-white/10
      dark:text-white
    "
      >
      </div>
    </div>
  );
}
