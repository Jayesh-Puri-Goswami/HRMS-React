import React from "react";
import PageBreadcrumb from "../common/PageBreadCrumb";
import { motion } from "motion/react";
import { EMPLOYEE_PROFILE_DATA } from "../../constant/EmployeeProfile";
import { Edit, FileInput, GraduationCap, Mail, MapPin, Phone } from "lucide-react";

const ProfileGraduation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
     <div className=" border-b dark:border-white/[0.09]">
        <PageBreadcrumb
          pageTitle="Graduation Details"
          endSection={<EndSectionButton />}
        />
      </div>

      {EMPLOYEE_PROFILE_DATA.graduationDetails.map((graduation) => (
        <motion.div
          key={graduation.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row md:items-start justify-start space-y-4 md:space-y-0 md:space-x-4 p-4 bg-gray-50 dark:bg-white/[0.09] rounded-lg hover:bg-gray-100 dark:hover:bg-white/[0.15] transition-colors duration-200"
        >
          <div className="flex items-center  gap-4 flex-1">
            <div className="w-10 h-10 bg-blue-100 dark:bg-white/[0.09] rounded-md flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-blue-600 dark:text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800 mb-1 dark:text-white">
                {graduation.education}
              </h3>
              <p className="text-sm text-gray-600 dark:text-white">
                {graduation.institute}
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> {graduation.phone}
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> {graduation.email}
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {graduation.address}
              </li>
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

const EndSectionButton = () => {
  return (
    <button className="text-themeBlue font-medium px-4 py-1 flex items-center justify-center text-sm bg-themeBlueLight rounded-lg">
      Add new
    </button>
  );
};

export default ProfileGraduation;
