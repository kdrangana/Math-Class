import { NavigationLink } from './types';
import { GraduationCap, BookOpen, Phone } from 'lucide-react';

// The WhatsApp link provided in the prompt
const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/KvlHvnpnYckBIAadkVN6w0";

export const NAVIGATION_LINKS: NavigationLink[] = [
  {
    id: 'grade-6',
    label: 'Grade 6',
    url: WHATSAPP_GROUP_LINK,
    icon: GraduationCap,
    isExternal: true,
  },
  {
    id: 'grade-7',
    label: 'Grade 7',
    url: WHATSAPP_GROUP_LINK,
    icon: GraduationCap,
    isExternal: true,
  },
  {
    id: 'resources',
    label: 'Resources & Tutes',
    url: '#resources',
    icon: BookOpen,
    isExternal: false,
  },
  {
    id: 'contact',
    label: 'Contact Teacher',
    url: '#contact',
    icon: Phone,
    isExternal: false,
  },
];