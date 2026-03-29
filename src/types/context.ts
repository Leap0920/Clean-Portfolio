// Context type definitions for state management

import { NavigationSection, SectionContent, ProjectData, AchievementData, ResumeData } from './index';

export interface NavigationContextType {
  currentSection: NavigationSection;
  setCurrentSection: (section: NavigationSection) => void;
  isResumeOpen: boolean;
  openResume: () => void;
  closeResume: () => void;
}

export interface ContentContextType {
  getContent: (section: NavigationSection) => SectionContent;
  getProjects: () => ProjectData[];
  getAchievements: () => AchievementData[];
  getResume: () => ResumeData;
}

export interface AppState {
  navigation: {
    currentSection: NavigationSection;
    isResumeOpen: boolean;
  };
  ui: {
    isMobileMenuOpen: boolean;
    isLoading: boolean;
    theme: 'light'; // Fixed to light theme as per requirements
  };
  content: {
    sections: Record<NavigationSection, SectionContent>;
    projects: ProjectData[];
    achievements: AchievementData[];
    resume: ResumeData;
  };
}