// Component prop type definitions

import { NavigationSection, ResumeData, SectionContent } from './index';

export interface SidebarProps {
  currentSection: NavigationSection;
  onSectionChange: (section: NavigationSection) => void;
  onResumeOpen: () => void;
}

export interface UserProfileProps {
  name: string;
  title: string;
  photoUrl: string;
  onResumeClick: () => void;
}

export interface NavigationMenuProps {
  currentSection: NavigationSection;
  onSectionChange: (section: NavigationSection) => void;
}

export interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeContent: ResumeData;
}

export interface ContentAreaProps {
  section: NavigationSection;
  content: SectionContent;
}

export interface LayoutProps {
  children: React.ReactNode;
}