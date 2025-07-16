import { NavItem } from '../types/Sidebar';
import { User, CalendarSync, TreePalm, Calendar, FileText } from 'lucide-react';
import { CalenderIcon, ListIcon } from '../icons';

// Role-based sidebar nav items
export const SIDEBAR_NAV_ITEMS: Record<string, NavItem[]> = {
  
    Admin: [
    {
      icon: <User />,
      name: 'Admin Dashboard',
      path: '/admin-dashboard',
    },
    // Add more admin-specific items here
  ],
  HR: [
    {
      icon: <User />,
      name: 'HR Dashboard',
      path: '/hr-dashboard',
    },
    // Add more HR-specific items here
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
      icon: <Calendar/>,
      path: '/employee-calendar'
    },
    {
      name: 'Policies',
      icon:<FileText/>,
      path: '/employee-policies'
    }
  ],
};
