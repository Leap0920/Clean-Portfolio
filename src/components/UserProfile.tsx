'use client';

import Image from 'next/image';
import { UserProfileProps } from '@/types/components';

export function UserProfile({ name, title, photoUrl, onResumeClick }: UserProfileProps) {
  return (
    <div className="flex flex-col items-center px-6 pt-8 pb-6">
      {/* Profile Image */}
      <div className="relative w-20 h-20 mb-4">
        <Image
          src={photoUrl}
          alt={`${name} profile photo`}
          fill
          sizes="80px"
          className="rounded-full object-cover"
          priority
        />
      </div>

      {/* Name and Title */}
      <div className="text-center mb-6">
        <h1 className="text-lg font-semibold text-gray-900 mb-1">
          {name}
        </h1>
        <p className="text-sm text-gray-500">
          {title}
        </p>
      </div>

      {/* Resume Button */}
      <button
        onClick={onResumeClick}
        className="w-full px-4 py-3 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex items-center justify-center gap-2"
        aria-label="View resume"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="7,10 12,15 17,10"/>
          <line x1="12" y1="15" x2="12" y2="3"/>
        </svg>
        Resume
      </button>
    </div>
  );
}