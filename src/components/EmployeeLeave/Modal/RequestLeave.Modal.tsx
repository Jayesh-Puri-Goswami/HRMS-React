import React, { useState } from 'react'
import { Modal } from '../../ui/modal'
import { Calendar, ChevronDown, X, FileText, Clock, User, AlertCircle } from 'lucide-react';
import CustomDropdown from '../../ui/dropdown/CustomDropdown';
import ImageUploader from '../../form/input/ImageUploader';
import { AnimatePresence } from 'framer-motion';
import Card from '../../ui/card/Card';

interface RequestLeaveModalProps {
    isOpen: boolean;
    onClose: (isOpen: boolean) => void;
}

function RequestLeaveModal({ isOpen, onClose }: RequestLeaveModalProps) {
    const [formData, setFormData] = useState({
        leaveType: "",
        duration: "Single Day",
        reportingAuthority: "",
        startDate: "",
        endDate: "",
        reasonNote: "",
        attachments: null as File | null,
    })
    const [errors, setErrors] = useState<Record<string, string>>({})

    const leaveTypes = [
        "Casual Leave",
        "Personal Leave",
        "Medical Leave",
        "Emergency Leave",
        "Work From Home",
        "Maternity Leave",
        "Paternity Leave",
        "Sick Leave"
    ]

    const leaveTypeOptions = leaveTypes.map((type) => ({
        value: type.toLowerCase().trim().replace(/\s+/g, '-'),
        label: type
    }))

    const reportingAuthorities = [
        "John Smith - Manager",
        "Sarah Johnson - Team Lead",
        "Mike Davis - HR Manager",
        "Lisa Brown - Director",
        "Alex Wilson - Senior Manager"
    ]

    const reportingAuthorityOptions = reportingAuthorities.map((authority) => ({
        value: authority.toLowerCase().trim().replace(/\s+/g, '-'),
        label: authority
    }))

    const handleDurationChange = (duration: string) => {
        setFormData((prev) => ({ ...prev, duration }))
        // Clear end date if single day is selected
        if (duration === "Single Day") {
            setFormData((prev) => ({ ...prev, endDate: "" }))
        }
    }

    const validateForm = () => {
        const newErrors: Record<string, string> = {}

        if (!formData.leaveType) newErrors.leaveType = "Please select a leave type"
        if (!formData.reportingAuthority) newErrors.reportingAuthority = "Please select your reporting authority"
        if (!formData.startDate) newErrors.startDate = "Please select start date"
        if ((formData.duration === "Multi Day" || formData.duration === "Date Range") && !formData.endDate) {
            newErrors.endDate = "Please select end date"
        }
        if (!formData.reasonNote.trim()) newErrors.reasonNote = "Please provide a reason for your leave"

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = () => {
        if (validateForm()) {
            console.log("Form submitted:", formData)
            // Handle form submission
            onClose(false)
        }
    }

    // if (!isOpen) return null

    return (
        <AnimatePresence>
            <div className=''>
                <Modal isOpen={isOpen} onClose={() => onClose(false)} className=''>
                    {/* Enhanced Header */}
                    <div className="rounded-t-3xl flex items-center justify-between p-6 border-b border-gray-200/20 dark:border-white/10 bg-gradient-to-r from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/20 dark:to-purple-900/20 backdrop-blur-sm">
                        <div className="flex items-center space-x-3">
                            <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
                                <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Request Leave</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Submit your leave application</p>
                            </div>
                        </div>

                    </div>

                    {/* Enhanced Content */}
                    <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                        {/* Leave Balance Card */}
                        <div className="bg-gradient-to-r from-indigo-50/80 to-blue-50/80 dark:from-indigo-900/20 dark:to-blue-900/20 backdrop-blur-sm border border-indigo-200/30 dark:border-indigo-700/30 rounded-xl p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg">
                                        <Clock className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Available Leave Balance</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Check your remaining leave days</p>
                                    </div>
                                </div>
                                <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm font-medium px-3 py-1 bg-white/50 dark:bg-white/10 rounded-lg hover:bg-white/70 dark:hover:bg-white/20 transition-colors">
                                    View Balance
                                </button>
                            </div>
                        </div>

                        {/* Leave Type Selection */}
                        <div className="space-y-2">
                            <CustomDropdown
                                label="Leave Type"
                                options={leaveTypeOptions}
                                value={formData.leaveType}
                                onChange={(value) => setFormData((prev) => ({ ...prev, leaveType: value as string }))}
                                placeholder="Select your leave type"
                                isSearchable={true}
                                className="mb-2"
                                maxHeight="600px"
                                isMulti={false}
                                error={errors.leaveType}
                            />
                            {formData.leaveType && (
                                <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50/50 dark:bg-gray-800/50 rounded-lg p-3">
                                    💡 <strong>Tip:</strong> {formData.leaveType.includes('medical') || formData.leaveType.includes('sick')
                                        ? 'Medical certificates may be required for medical leaves.'
                                        : 'Please ensure you have enough leave balance before applying.'}
                                </div>
                            )}
                        </div>

                        {/* Leave Duration */}
                        <div className="space-y-3">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-3">
                                Leave Duration
                            </label>
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { value: "Single Day", icon: "📅", desc: "One day leave" },
                                    { value: "Multi Day", icon: "📆", desc: "Multiple days" },
                                    { value: "Half Day", icon: "🕐", desc: "Half day leave" },
                                    { value: "Hours", icon: "⏰", desc: "Hourly leave" }
                                ].map((duration) => (
                                    <label
                                        key={duration.value}
                                        className={`flex items-center space-x-3 p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 ${formData.duration === duration.value
                                                ? 'border-indigo-500 bg-indigo-50/80 dark:bg-indigo-900/30'
                                                : 'border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-300 dark:hover:border-indigo-600 hover:bg-indigo-25/50 dark:hover:bg-indigo-900/10'
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name="duration"
                                            value={duration.value}
                                            checked={formData.duration === duration.value}
                                            onChange={() => handleDurationChange(duration.value)}
                                            className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                        />
                                        <div className="flex-1">
                                            <div className="flex items-center space-x-2">
                                                <span className="text-lg">{duration.icon}</span>
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{duration.value}</span>
                                            </div>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{duration.desc}</p>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Reporting Authority */}
                        <div className="space-y-2">
                            <CustomDropdown
                                label="Reporting Authority"
                                options={reportingAuthorityOptions}
                                value={formData.reportingAuthority}
                                onChange={(value) => setFormData((prev) => ({ ...prev, reportingAuthority: value as string }))}
                                placeholder="Select your reporting manager"
                                isSearchable={true}
                                className="mb-2"
                                isMulti={false}
                                maxHeight='600px'
                                error={errors.reportingAuthority}
                            />
                        </div>

                        {/* Date Selection */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                    Start Date
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        value={formData.startDate}
                                        onChange={(e) => setFormData((prev) => ({ ...prev, startDate: e.target.value }))}
                                        className={`w-full px-4 py-3 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md border border-gray-200/20 dark:border-white/10 rounded-xl text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-200 ${errors.startDate ? 'ring-2 ring-red-500/50 border-red-500/50' : ''
                                            }`}
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                    <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                </div>
                                {errors.startDate && <p className="mt-1 text-sm text-red-500">{errors.startDate}</p>}
                            </div>

                            {(formData.duration === "Multi Day" || formData.duration === "Date Range") && (
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                                        End Date
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="date"
                                            value={formData.endDate}
                                            onChange={(e) => setFormData((prev) => ({ ...prev, endDate: e.target.value }))}
                                            className={`w-full px-4 py-3 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md border border-gray-200/20 dark:border-white/10 rounded-xl text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-200 ${errors.endDate ? 'ring-2 ring-red-500/50 border-red-500/50' : ''
                                                }`}
                                            min={formData.startDate || new Date().toISOString().split('T')[0]}
                                        />
                                        <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                                    </div>
                                    {errors.endDate && <p className="mt-1 text-sm text-red-500">{errors.endDate}</p>}
                                </div>
                            )}
                        </div>

                        {/* Reason for Leave */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                                    Reason for Leave
                                </label>
                                <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 text-sm font-medium px-3 py-1 bg-white/50 dark:bg-white/10 rounded-lg hover:bg-white/70 dark:hover:bg-white/20 transition-colors">
                                    <FileText className="w-3 h-3 inline mr-1" />
                                    Templates
                                </button>
                            </div>
                            <textarea
                                value={formData.reasonNote}
                                onChange={(e) => setFormData((prev) => ({ ...prev, reasonNote: e.target.value }))}
                                rows={4}
                                className={`w-full px-4 py-3 bg-white/[0.03] dark:bg-white/[0.03] backdrop-blur-md border border-indigo-500/50 dark:border-white/10 rounded-xl text-gray-700 dark:text-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all duration-200 ${errors.reasonNote ? 'ring-2 ring-red-500/50 border-red-500/50' : ''
                                    }`}
                                placeholder="Please provide a detailed reason for your leave request..."
                            />
                            {errors.reasonNote && <p className="mt-1 text-sm text-red-500">{errors.reasonNote}</p>}
                            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                                <span>Be specific about your reason</span>
                                <span>{formData.reasonNote.length}/500</span>
                            </div>
                        </div>

                        {/* Supporting Documents */}
                        <div className="space-y-3">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                                Supporting Documents
                            </label>
                            <div className="bg-gray-50/50 dark:bg-white/[0.03] backdrop-blur-sm border border-gray-200/30 dark:border-gray-700/30 rounded-xl p-4">
                                <ImageUploader
                                    onImageChange={(file: File | null) => setFormData((prev) => ({ ...prev, attachments: file }))}
                                    selectedImage={formData.attachments}
                                />
                                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                                    <div className="flex items-center space-x-1 mb-1">
                                        <AlertCircle className="w-3 h-3" />
                                        <span>Accepted formats: PNG, JPG, JPEG, PDF (max 15MB)</span>
                                    </div>
                                    <p>Upload medical certificates, travel documents, or other supporting files</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Footer */}
                    <div className="rounded-b-3xl flex space-x-3 p-6 border-t border-gray-200/20 dark:border-white/10 bg-gray-50/30 dark:bg-gray-800/30 backdrop-blur-sm">
                        <button
                            onClick={() => onClose(false)}
                            className="flex-1 px-6 py-3 border border-gray-300/50 dark:border-gray-600/50 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-all duration-200 font-medium"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSubmit}
                            className="flex-1 px-6 py-3 bg-gradient-to-r from-themeGradientColorFrom to-themeGradientColorTo text-white rounded-xl hover:from-themeGradientColorFrom hover:to-themeGradientColorTo transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform "
                        >
                            Submit Request
                        </button>
                    </div>
                </Modal>
            </div>
        </AnimatePresence>
    )
}

export default RequestLeaveModal
