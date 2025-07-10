import React, { useState } from 'react'
import Tab from '../../components/ui/tabs/Tab'

function EmployeeAttendance() {

    const [isActive,setIsActive] = useState('DailyLog')

  return (
    <div>
        <div className="max-w-full p-6">
            <Tab title='Daily Log' setIsActive={()=> setIsActive('DailyLog')} isActive={isActive} className=''/>
            <Tab title='Attendance' setIsActive={()=> setIsActive('AttendanceLog')} isActive={isActive} className=''/>
        </div>
    </div>
  )
}

export default EmployeeAttendance