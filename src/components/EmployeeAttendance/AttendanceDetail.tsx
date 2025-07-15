import Calendar from "../ui/calender/Calender";
 
function AttendanceDetail() {
  const stats = [
    { label: "Work", value: "120:30 hr" },
    { label: "Break", value: "30:12 hr" },
    { label: "Paid Leave", value: "1 day" },
    { label: "Half Day", value: "1 day" },
    { label: "Over Time", value: "02:00 hr" },
  ];
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-6 w-full">
        {/* Calendar Section */}
        <div className="w-full lg:w-1/2">
          <Calendar />
        </div>
 
        {/* Stats Card */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="bg-white dark:bg-white/[0.03] rounded-2xl shadow-sm border border-gray-200 dark:border-white/10 p-6 w-full max-w-md">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Total
            </h2>
 
            <div className="space-y-4">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-2 items-center text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  <span>{item.label}</span>
                  <span className="text-right">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
 
export default AttendanceDetail;