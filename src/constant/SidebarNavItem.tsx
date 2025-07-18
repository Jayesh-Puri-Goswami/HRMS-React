import { NavItem } from '../types/Sidebar';
import { User, CalendarSync, TreePalm, Calendar, FileText, Users, Plane, Wallet, CalendarX, Megaphone, CalendarDays, CalendarCheck } from 'lucide-react';
import { CalenderIcon, ListIcon } from '../icons';

// Role-based sidebar nav items
export const SIDEBAR_NAV_ITEMS: Record<string, NavItem[]> = {

  Admin: [
    {
      icon: <User />,
      name: 'Admin Dashboard',
      path: '/admin-dashboard',
    },
  ],
  HR: [
    {
      icon: <User />,
      name: 'HR Profile',
      path: '/hr-profile',
    },
    {
      icon: <CalendarCheck />,
      name: 'Attendance',
      path: '/hr-attendance',
    },
    {
      icon: <Users />,
      name: 'Employee',
      path: '/hr-employee',
    },
    {
      icon: <Plane />,
      name: 'Leaves',
      path: '/hr-leaves',
    },
    {
      icon: <Wallet />,
      name: 'Salary',
      path: '/hr-salary',
    },
    {
      icon: <FileText />,
      name: 'Payslips',
      path: '/hr-payslips',
    },
    {
      icon: <CalendarDays />,
      name: 'Events',
      path: '/hr-events',
    },
    {
      icon: <CalendarX />,
      name: 'Holiday',
      path: '/hr-holiday',
    },
    {
      icon: <Megaphone />,
      name: 'Announcements',
      path: '/hr-announcements',
    }
  ],
  Employee: [
    {
      icon: <User />,
      name: 'Profile',
      path: '/employee-profile',
    },
    {
      icon: <CalenderIcon />,
      name: 'Attendance',
      path: '/employee-attendance',
    },
    {
      icon: <CalendarSync />,
      name: 'Events',
      path: '/employee-events',
    },
    {
      name: 'Leaves',
      icon: <ListIcon />,
      path: '/employee-leaves',
    },
    {
      name: 'Holiday',
      icon: <TreePalm />,
      path: '/employee-holiday',
    },
    {
      name: 'Calendar',
      icon: <Calendar />,
      path: '/employee-calendar'
    },
    {
      name: 'Policies',
      icon: <FileText />,
      path: '/employee-policies'
    }
  ],
};
