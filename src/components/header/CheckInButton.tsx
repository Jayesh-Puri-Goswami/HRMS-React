import type React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, LogOut, Fingerprint } from "lucide-react";
import { Modal } from "../ui/modal";

import ToggleButton from "../ui/button/ToggleButton";
import { useSelector } from "react-redux";
import axios from "axios";

interface CheckInData {
  startTime: Date;
  totalTime: number;
  isActive: boolean;
  isPaused: boolean;
}

const CheckInButton: React.FC = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [showCheckOutModal, setShowCheckOutModal] = useState(false);
  const [checkInData, setCheckInData] = useState<CheckInData>({
    startTime: new Date(),
    totalTime: 0,
    isActive: false,
    isPaused: false,
  });
  const [notes, setNotes] = useState("");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const currentUser = useSelector((state: any) => state.auth.user);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  // Format time helper
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Start timer
  const startTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCheckInData((prev) => ({
        ...prev,
        totalTime: prev.totalTime + 1,
      }));
    }, 1000);
  };

  // Stop timer
  const stopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Handle check in
  const handleCheckInButton = () => {
    const now = new Date();
    setCheckInData({
      startTime: now,
      totalTime: 0,
      isActive: true,
      isPaused: false,
    });
    setIsCheckedIn(true);
    setShowCheckInModal(false);
    startTimer();
    handleCheckIn()
  };

  // Handle toggle pause/resume
  const handleToggleTimer = () => {
    if (checkInData.isPaused) {
      setCheckInData((prev) => ({ ...prev, isPaused: false }));
      startTimer();
    } else {
      setCheckInData((prev) => ({ ...prev, isPaused: true }));
      stopTimer();
    }
  };

  // Handle check out
  const handleCheckOut = () => {
    stopTimer();
    setCheckInData((prev) => ({ ...prev, isActive: false }));
    setShowCheckOutModal(true);
  };

  // Handle save check out
  const handleSaveCheckOut = () => {
    // Here you would typically save the data to your backend
    console.log("Check out data:", {
      startTime: checkInData.startTime,
      totalTime: checkInData.totalTime,
      notes: notes,
    });

    // Reset state
    setIsCheckedIn(false);
    setCheckInData({
      startTime: new Date(),
      totalTime: 0,
      isActive: false,
      isPaused: false,
    });
    setNotes("");
    setShowCheckOutModal(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleCheckIn = async () => {
    try {
      setIsLoading(true);

      const baseURL = import.meta.env.VITE_API_URL

      const response = await axios.get(`${baseURL}/employee/check-in`, {
        headers: {
          Authorization: `Bearer ${currentUser.token}`
        }
      })

      console.log(response);
    } catch (error : any ) {
      setError(error.response.data.message || "Error checking in"  );
    }
  }


  return (
    <>
      {/* Check In Button (Fingerprint) */}
      {!isCheckedIn ? (
        <button
          onClick={() => setShowCheckInModal(true)}
          className="relative flex flex-col items-center justify-center group focus:outline-none"
        >
          <span className="relative flex items-center justify-center w-8 h-8 lg:w-[2.7rem] lg:h-[2.7rem] rounded-full bg-gradient-to-br from-indigo-500 to-indigo-900 shadow-lg dark:from-indigo-500 dark:to-indigo-900 border-2 border-white dark:border-gray-900 transition-all group-hover:scale-100 group-active:scale-95">
            <Fingerprint
              size={16}
              className="text-white dark:text-white drop-shadow-sm animate-fingerprint-scan"
            />
            {/* Scan animation overlay */}
            <span className="absolute inset-0 pointer-events-none animate-fingerprint-glow rounded-full" />
          </span>
        </button>
      ) : (
        // Timer Display and Controls
        <div className="flex items-center gap-2">
          {/* Timer Display */}
          <div className="w-[120px] flex mt-1 justify-between items-center gap-2 px-3 py-2 bg-themeBlueLight dark:bg-white/[0.3] rounded-lg">
            <Clock size={16} className="text-themeBlue dark:text-white" />
            <span className="font-mono text-sm text-themeBlue dark:text-white">
              {formatTime(checkInData.totalTime)}
            </span>
          </div>

          {/* Play/Pause Button */}
          <ToggleButton
            checked={checkInData.isPaused}
            onChange={handleToggleTimer}
          />

          {/* Check Out Button */}
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCheckOut}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <LogOut size={16} />
          </motion.button> */}
          <button
            onClick={handleCheckOut}
            className="relative flex flex-col items-center justify-center group focus:outline-none"
          >
            <span className="relative flex items-center justify-center w-8 h-8 lg:w-[2.7rem] lg:h-[2.7rem] rounded-full bg-gradient-to-br from-red-500 to-pink-500 shadow-lg dark:from-red-600 dark:to-pink-700 border-2 border-white dark:border-none transition-all group-hover:scale-100 group-active:scale-95">
              <Fingerprint
                size={20}
                className="text-white dark:text-white drop-shadow-sm"
              />
              {/* Scan animation overlay */}
              {/* <span className="absolute inset-0 pointer-events-none animate-fingerprint-glow rounded-full" /> */}
            </span>
          </button>
        </div>
      )}

      {/* Check In Modal */}
      <Modal
        isOpen={showCheckInModal}
        onClose={() => setShowCheckInModal(false)}
        className="max-w-md w-full p-0 mx-5 md:mx-0"
      >
        <div className="flex flex-col items-center p-8">
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-brand-500 to-blue-500 shadow-lg dark:from-brand-500 dark:to-blue-900 mb-4">
            <Fingerprint
              size={30}
              className="text-white dark:text-white animate-fingerprint-scan"
            />
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Ready to Check In?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
            Start your work session by checking in. Your time will be tracked
            until you check out.
          </p>
          <div className="flex gap-3 w-full justify-center text-sm md:text-base">
            <motion.button
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCheckInButton}
              className="flex-1 px-2 py-1 md:px-6 md:py-2 bg-brand-500 hover:bg-brand-600 text-white rounded-lg font-semibold transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-brand-400"
            >
              Yes, Check In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCheckInModal(false)}
              className="flex-1 px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition-colors shadow-md dark:bg-themeBackgroundColorDark/20 dark:text-white dark:hover:bg-themeBackgroundColorDark/50"
            >
              Cancel
            </motion.button>
          </div>
        </div>
      </Modal>

      {/* Check Out Modal */}
      <Modal
        isOpen={showCheckOutModal}
        onClose={() => setShowCheckOutModal(false)}
        className="max-w-2xl w-full p-0"
      >
        <div className="flex flex-col items-center p-8">
          <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-500 shadow-lg dark:from-red-600 dark:to-pink-700 mb-4">
            <LogOut size={30} className="text-white dark:text-white" />
          </span>
          <h2 className="text-2xl font-bold text-gray-700 dark:text-white mb-2">
            Check Out Summary
          </h2>
          <div className="bg-transparent dark:bg-transparent rounded-lg p-3 mb-4 w-full text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Total Time Worked
            </p>
            <p className="text-2xl font-mono font-bold text-gray-700 dark:text-white">
              {formatTime(checkInData.totalTime)}
            </p>
          </div>
          <div className="mb-4 w-full">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Daily Summary
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any notes about your work session..."
              className="w-full p-3 focus:ring-transparent focus:outline-none rounded-lg resize-y bg-gradient-to-b from-white/50 to-black/10 dark:bg-gradient-to-b dark:from-white/[0.10] dark:to-black/[0.10] dark:text-white custom-scrollbar"
              rows={10}
            />
          </div>
          <div className="flex gap-3 w-full justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCheckOutModal(false)}
              className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition-colors shadow-md dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Cancel
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSaveCheckOut}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Save & Check Out
            </motion.button>
          </div>
        </div>
      </Modal>

      {/* Fingerprint scan animation styles */}
      <style>{`
        @keyframes fingerprint-scan {
          0%, 100% { filter: drop-shadow(0 0 0 #fff); opacity: 1; }
          50% { filter: drop-shadow(0 0 16px #fff); opacity: 0.85; }
        }
        .animate-fingerprint-scan {
          animation: fingerprint-scan 1.5s infinite;
        }
        @keyframes fingerprint-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59,130,246,0.3); }
          50% { box-shadow: 0 0 20px 2px rgba(59,130,246,0.5); }
        }
        .animate-fingerprint-glow {
          animation: fingerprint-glow 1.5s infinite;
        }
      `}</style>
    </>
  );
};

export default CheckInButton;
