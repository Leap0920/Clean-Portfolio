'use client';

import { NavigationMenuProps } from '@/types/components';
import { NavigationSection } from '@/types';

const navigationItems: { section: NavigationSection; label: string; icon: JSX.Element }[] = [
  { 
    section: 'home', 
    label: 'Home', 
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>
  },
  { 
    section: 'about', 
    label: 'About', 
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  },
  { 
    section: 'achievements', 
    label: 'Achievements', 
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
  },
  { 
    section: 'projects', 
    label: 'Projects', 
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
  },
  { 
    section: 'blogs', 
    label: 'Blogs', 
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10,9 9,9 8,9"/></svg>
  },
];

export function NavigationMenu({ currentSection, onSectionChange }: NavigationMenuProps) {
  return (
    <nav className="px-4 py-2" role="navigation" aria-label="Main navigation">
      <ul className="space-y-1">
        {navigationItems.map(({ section, label, icon }) => {
          const isActive = currentSection === section;
          
          return (
            <li key={section}>
              <button
                onClick={() => onSectionChange(section)}
                className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                  isActive
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="mr-3 flex-shrink-0" role="img" aria-hidden="true">
                  {icon}
                </span>
                <span className="font-medium">{label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}