'use client';

import { useState } from 'react';

export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    // Note: Dark mode functionality can be implemented later
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200">
      <div className="flex items-center">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
        <span className="font-medium">Dark Mode</span>
      </div>
      <button
        onClick={toggleDarkMode}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isDark ? 'bg-blue-500' : 'bg-gray-300'
        }`}
        role="switch"
        aria-checked={isDark}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isDark ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}