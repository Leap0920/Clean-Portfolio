'use client';

import { NavigationProvider, useNavigation } from '@/contexts';
import { Sidebar, ContentArea, ResumeModal } from '@/components';
import { sectionContent } from '@/data/content';
import { resumeData } from '@/data/resume';

function PortfolioContent() {
  const { currentSection, setCurrentSection, isResumeOpen, openResume, closeResume } = useNavigation();

  return (
    <>
      {/* Sidebar */}
      <Sidebar
        currentSection={currentSection}
        onSectionChange={setCurrentSection}
        onResumeOpen={openResume}
      />

      {/* Main Content Area */}
      <ContentArea
        section={currentSection}
        content={sectionContent[currentSection]}
      />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={closeResume}
        resumeContent={resumeData}
      />
    </>
  );
}

export default function Home() {
  return (
    <NavigationProvider>
      <PortfolioContent />
    </NavigationProvider>
  );
}
