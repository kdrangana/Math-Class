import React from 'react';
import { NavigationLink } from '../types';
import { ChevronRight } from 'lucide-react';

interface LinkButtonProps {
  link: NavigationLink;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ link }) => {
  const Icon = link.icon;

  return (
    <a
      href={link.url}
      target={link.isExternal ? "_blank" : "_self"}
      rel={link.isExternal ? "noopener noreferrer" : undefined}
      className={`
        group relative w-full max-w-md bg-white text-[#3b82f6] 
        border-2 border-[#3b82f6] rounded-full py-4 px-8 
        flex items-center justify-between
        transition-all duration-300 ease-in-out
        hover:bg-[#3b82f6] hover:text-white hover:shadow-lg hover:scale-105 active:scale-95
        cursor-pointer no-underline
      `}
    >
      <div className="flex items-center gap-4">
        {Icon && (
          <Icon 
            size={20} 
            className="transition-colors group-hover:text-white text-[#3b82f6]" 
          />
        )}
        <span className="font-medium text-lg tracking-wide">{link.label}</span>
      </div>
      
      <ChevronRight 
        size={20} 
        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
      />
    </a>
  );
};