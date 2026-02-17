import { LucideIcon } from 'lucide-react';

export interface NavigationLink {
  id: string;
  label: string;
  url: string;
  icon?: LucideIcon;
  isExternal: boolean;
}