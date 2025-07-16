// C:\sreerag\16-07 HRMS\src\types\EmployeeProfile.ts

export interface EmployeeData {
  id?: string | number;
  name: string;
  phone?: string;
  email?: string;
  department?: string;
  designation?: string;
  workShift?: string;
  joiningDate?: string;
  avatar?: string;
  location?: string;
}

export interface EmployeeProfileCardProps {
  employee?: EmployeeData;
  isLoading?: boolean;
  className?: string;
  variant?: "default" | "compact" | "detailed";
  showAvatar?: boolean;
  showContactInfo?: boolean;
  showDepartmentInfo?: boolean;
  showWorkInfo?: boolean;
  onCardClick?: (employee: EmployeeData) => void;
  animationDelay?: number;
  skeletonCount?: number;
}

export interface RatingItem {
  label: string
  value: number
  color: string
}

export interface ProfileProgressProps {
  totalRating?: number
  items?: RatingItem[]
  className?: string
}
 export interface ProfileTabButton {
  label: string;
  id?: string;
  onClick?: () => void;
}

export interface ProfileTabProps {
  actionButtons: ProfileTabButton[];
  currentTab: string;
}

//  new 
export interface Address {
  id: string
  type: "permanent" | "current"
  label: string
  street: string
  city: string
  state: string
  country: string
  pincode: string
  fullAddress: string
}

export interface Document {
  id: string
  name: string
  type: string
  uploadDate: string
  size: string
  addedBy: string
  action: () => void
}

export interface BankDetail {
  id: string
  bankName: string
  accountNumber: string
  ifscCode: string
  accountType: string
  branchName: string
}

export interface SalaryComponent {
  id: string
  component: string
  amount: number
  type: "earning" | "deduction"
}

export interface SalaryOverview {
  id: string
  month: string
  salary: number
  bonus: number
  deductions: number
  grossSalary: number
}

export interface PayslipEntry {
  id: string
  month: string
  status: "paid" | "pending" | "processing"
  salary: number
  viewDetails: () => void
  action: () => void
}

export interface graduationDetails {
  id: string
  education: string
  institute: string
  phone: string
  email: string
  address: string
}

export interface EmployeeProfileData {
  addresses: Address[]
  documents: Document[]
  bankDetails: BankDetail[]
  salaryOverview: SalaryOverview[]
  payslips: PayslipEntry[]
  graduationDetails: graduationDetails[]
}

export interface TabConfig {
  id: string
  label: string
  icon?: React.ComponentType<{ className?: string }>
}

export interface EmployeeProfileTabsProps {
  data?: EmployeeProfileData
  loading?: boolean
  className?: string
  onTabChange?: (tabId: string) => void
  customTabs?: TabConfig[]
  renderCustomContent?: (tabId: string, data: EmployeeProfileData) => React.ReactNode
}