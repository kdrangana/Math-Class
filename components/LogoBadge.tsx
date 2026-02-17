import React from 'react';

export const LogoBadge: React.FC = () => {
  return (
    <div className="bg-[#3b82f6] p-6 w-40 h-40 flex flex-col justify-end text-white shadow-lg rounded-sm relative overflow-hidden">
      {/* Decorative Smile Curve - kept as a design element */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-24 border-b-8 border-[#fa8072] rounded-full"></div>
      
      {/* Decorative Dot */}
      <div className="absolute top-10 right-8 w-3 h-3 bg-[#fa8072] rounded-full"></div>

      <div className="relative z-10 font-bold leading-tight">
        <span className="block text-xl">Student</span>
        <span className="block text-xl">Portal</span>
        <span className="block text-xs font-light opacity-90 mt-1">Education Center</span>
      </div>
    </div>
  );
};