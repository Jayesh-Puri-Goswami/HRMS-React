function LeaveAvailable() {
  return (
    <div className="flex flex-col gap-6 py-10  px-4 sm:px-6">
    {/* Leave Allowance Section */}
    <div>
      <h3 className="font-semibold text-gray-700 dark:text-white mb-2 text-base sm:text-lg">
        Leave Allowance
      </h3>
      <div className="border-t border-gray-200 dark:border-white/10 py-4 flex flex-wrap justify-between gap-2 sm:gap-4 text-sm text-gray-700 dark:text-gray-300">
        <span className="w-full sm:w-auto">Casual Leave : - 8</span>
        <span className="w-full sm:w-auto">Personal Leave : - 12</span>
        <span className="w-full sm:w-auto">Medical Leave : - 6</span>
        <span className="w-full sm:w-auto">Leave Without Pay : - 0</span>
      </div>
    </div>

    {/* Leave Available Section */}
    <div className="pt-5">
      <h3 className="font-semibold text-gray-700 dark:text-white mb-2 text-base sm:text-lg">
        Leave Available
      </h3>
      <div className="border-t border-gray-200 dark:border-white/10 py-4 flex flex-wrap gap-3 sm:gap-4">
        <div className="bg-themeBackgroundColor dark:bg-white/[0.05] px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm text-gray-800 dark:text-white w-full sm:w-auto">
          Casual Leave : - 6
        </div>
        <div className="bg-themeBackgroundColor dark:bg-white/[0.05] px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm text-gray-800 dark:text-white w-full sm:w-auto">
          Personal Leave : - 12
        </div>
        <div className="bg-themeBackgroundColor dark:bg-white/[0.05] px-4 py-2 sm:px-6 sm:py-3 rounded-xl text-sm text-gray-800 dark:text-white w-full sm:w-auto">
          Medical Leave : - 6
        </div>
      </div>
    </div>

    {/* Request Button */}
    <div className="flex justify-center sm:justify-end mt-4">
      <button className="w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-2 rounded-xl bg-gray-700 text-white text-sm hover:bg-gray-600 transition">
        Request For Leave
      </button>
    </div>
  </div>
  );
}

export default LeaveAvailable;
