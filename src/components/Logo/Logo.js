import React from 'react';
import { FiScissors } from 'react-icons/fi';

export default function Logo({ size = 'md' }) {
  const sizes = { sm: 'w-7 h-7 text-sm', md: 'w-9 h-9 text-lg', lg: 'w-12 h-12 text-2xl' };
  return (
    <div className={`${sizes[size]} rounded-lg bg-secondary bg-opacity-20 border border-secondary border-opacity-30 flex items-center justify-center`}>
      <FiScissors className={`text-secondary`} />
    </div>
  );
}
