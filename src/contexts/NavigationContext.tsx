'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { NavigationSection, NavigationContextType } from '@/types';

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = useState<NavigationSection>('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleSectionChange = useCallback((section: NavigationSection) => {
    setCurrentSection(section);
  }, []);

  const openResume = useCallback(() => {
    setIsResumeOpen(true);
  }, []);

  const closeResume = useCallback(() => {
    setIsResumeOpen(false);
  }, []);

  const value: NavigationContextType = {
    currentSection,
    setCurrentSection: handleSectionChange,
    isResumeOpen,
    openResume,
    closeResume,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation(): NavigationContextType {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}