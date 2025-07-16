export const employeeProfileCardData = {
  id: 1,
  name: "John Doe",
  phone: "+91 99999 99999",
  email: "john.doe@company.com",
  department: "Game Development",
  designation: "Senior Developer",
  workShift: "Regular",
  joiningDate: "1-Sep-2021",
  location: "New York",
  avatar:
    "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1752646369~exp=1752649969~hmac=034bebf2600dea47c637b9639587befb873fa3864e1af8c46cf0d2657b7ce43b&w=1380",
};
import { EmployeeProfileData, RatingItem } from "../types/EmployeeProfile";

export const defaultTotalRating = 85;

export const defaultRatingItems: RatingItem[] = [
  { label: "Design", value: 30, color: "#212121" },
  { label: "Development", value: 40, color: "#a0a0a0" },
  { label: "QA", value: 20, color: "#f1f1f1" },
  { label: "Management", value: 10, color: "#c9ddef" },
];
export const ProfileTabButton = [
  { label: "Address", id: "1", onClick: () => {} },
  { label: "Documents", id: "1", onClick: () => {} },
  { label: "Bank Details", id: "1", onClick: () => {} },
  { label: "Salary Overrivew", id: "1", onClick: () => {} },
  { label: "Payslip", id: "1", onClick: () => {} },
  { label: "Graduation Details", id: "1", onClick: () => {} },
];

// New Line added

export const DEFAULT_TABS = [
  { id: "address", label: "Address" },
  { id: "documents", label: "Documents" },
  { id: "bank-detail", label: "Bank Detail" },
  { id: "salary-overview", label: "Salary Overview" },
  { id: "payslip", label: "Payslip" },
  { id: "graduation-details", label: "Graduation Details" },
]



export const EMPLOYEE_PROFILE_DATA: EmployeeProfileData = {
  addresses: [
    {
      id: "1",
      type: "permanent",
      label: "Permanent Address",
      street: "124/5, Singapore Township",
      city: "Talawali Chanda",
      state: "Madhya Pradesh",
      country: "India",
      pincode: "482001",
      fullAddress: "124/5, Singapore Township, Talawali Chanda Indore (Madhya Pradesh)",
    },
    {
      id: "2",
      type: "current",
      label: "Current Address",
      street: "124/5, Singapore Township",
      city: "Talawali Chanda",
      state: "Madhya Pradesh",
      country: "India",
      pincode: "482001",
      fullAddress: "124/5, Singapore Township, Talawali Chanda Indore (Madhya Pradesh)",
    },
  ],
  documents: [
    {
      id: "1",
      name: "Aadhaar Card",
      type: "Identity Proof",
      uploadDate: "2024-01-15",
      size: "2.5 MB",
      addedBy: "John Doe",
      action: () => {},
    },
    {
      id: "2",
      name: "PAN Card",
      type: "Tax Document",
      uploadDate: "2024-01-16",
      size: "1.8 MB",
      addedBy: "John Doe",
      action: () => {},
    },
    {
      id: "3",
      name: "Passport",
      type: "Identity Proof",
      uploadDate: "2024-01-17",
      size: "3.2 MB",
      addedBy: "John Doe",
      action: () => {},
    },
  ],
  bankDetails: [
    {
      id: "1",
      bankName: "State Bank of India",
      accountNumber: "1234567890123456",
      ifscCode: "SBIN0001234",
      accountType: "Savings",
      branchName: "Indore Main Branch",
    },
  ],
  salaryOverview: [
   
    
      { id: "1", month: "January",  salary: 50000, bonus: 10000, deductions: 10000, grossSalary: 60000,  },
      { id: "2", month: "February", salary: 50000, bonus: 10000, deductions: 10000, grossSalary: 60000, },
      { id: "3", month: "March",  salary: 50000, bonus: 10000, deductions: 10000, grossSalary: 60000 },
      { id: "4", month: "April",salary: 50000, bonus: 10000, deductions: 10000, grossSalary: 60000 },
      { id: "5", month: "May",  salary: 50000, bonus: 10000, deductions: 10000, grossSalary: 60000},
      { id: "6", month: "June", salary: 50000, bonus: 10000, deductions: 10000, grossSalary: 60000 },
    
  ],
  payslips: [
    {
      id: "1",
      month: "December",
      status: "paid",
      salary: 65000,
      viewDetails: () => {},
      action: () => {},
    },
    {
      id: "2",
      month: "November",
      status: "paid",
      salary: 35000,
      viewDetails: () => {},
      action: () => {},
    },
    {
      id: "3",
      month: "October",
      status: "paid",
      salary: 6000,
      viewDetails: () => {},
      action: () => {},
    },
  ],
  graduationDetails: [
    {
      id: "1",
      education: "Higher Secondary",
      institute: "St. John's School",
      phone: "+91 99999 99999",
      email: "john.doe@company.com",
      address: "124/5, Singapore Township, Talawali Chanda Indore (Madhya Pradesh)",
     
    },
    {
      id: "2",
      education: "Bachelor of Technology",
      institute: "IIT Madras",
      phone: "+91 99999 99999",
      email: "john.doe@company.com",
      address: "124/5, Singapore Township, Talawali Chanda Indore (Madhya Pradesh)",
     
    },
    {
      id: "2",
      education: "Post Graduation",
      institute: "IIT Bombay",
      phone: "+91 99999 99999",
      email: "harry.doe@company.com",
      address: "124/5, Singapore Township, Talawali Chanda Indore (Madhya Pradesh)",
     
    },
  ],
}


