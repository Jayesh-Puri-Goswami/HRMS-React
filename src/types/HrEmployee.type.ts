//   HR_LEAVE_TABS

export interface HR_EMPLOYEE_CARDS_TYPE {
  id: string;
  name: string;
  phone: string;
  email: string;
  joiningDate: string;
  dateofLastIncrement: string;
  designation: string;
  image: string;
  department: string;
  currentSalary: number;
  onClick?: () => void;
}
