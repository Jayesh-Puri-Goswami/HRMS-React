function LeaveAvailable() {
  return (
    <div className="flex flex-col gap-6 py-10">
      {/* Leave Allowance Section */}
      <div>
        <h3 className="font-semibold text-gray-700 dark:text-white mb-2">
          Leave Allowance
        </h3>
        <div className="border-t border-gray-200 dark:border-white/10 py-4 flex flex-wrap justify-evenly gap-4 text-sm text-gray-700 dark:text-gray-300">
          <span>Casual Leave : - 8</span>
          <span>Personal Leave : - 12</span>
          <span>Medical Leave : - 6</span>
          <span>Leave Without Pay : - 0</span>
        </div>
      </div>

      {/* Leave Available Section */}
      <div className="pt-5">
        <h3 className="font-semibold text-gray-700 dark:text-white mb-2">
          Leave Available
        </h3>
        <div className="border-t border-gray-200 dark:border-white/10 py-4 flex flex-wrap items-center gap-4">
          <div className="bg-themeBackgroundColor dark:bg-white/[0.05] px-6 py-3 rounded-xl text-sm text-gray-800 dark:text-white">
            Casual Leave : - 6
          </div>
          <div className="bg-themeBackgroundColor dark:bg-white/[0.05] px-6 py-3 rounded-xl text-sm text-gray-800 dark:text-white">
            Personal Leave : - 12
          </div>
          <div className="bg-themeBackgroundColor dark:bg-white/[0.05] px-6 py-3 rounded-xl text-sm text-gray-800 dark:text-white">
            Medical Leave : - 6
          </div>
        </div>
      </div>

      {/* Request Button */}
      <div className="flex justify-end mt-4">
        <button className="px-6 py-2 rounded-xl bg-gray-700 text-white text-sm hover:bg-gray-600 transition">
          Request For Leave
        </button>
      </div>
    </div>
  );
}

export default LeaveAvailable;
