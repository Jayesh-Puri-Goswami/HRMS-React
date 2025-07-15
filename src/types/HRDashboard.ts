export interface LeaveData {
    totalEmoloyee: number;
    attendance : number;
    absent : number;
    leave : number;
    halfDay : number;
  }


  export interface ProfileCardProps {
    name: string
    shiftTime: string
    profileImage?: string
    punchInTime: string
    punchOutTime: string
    breakTime: string
  }