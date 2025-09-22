import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const useSectionObserver = (sectionId: string, threshold = 0.2) => {
  const { ref, inView } = useInView({
    threshold,
    rootMargin: '-80px 0px 0px 0px', // Adjust for header height
  });

  useEffect(() => {
    if (inView) {
      // Update URL hash without scrolling
      history.replaceState(null, '', `#${sectionId}`);
      
      // Dispatch a custom event that can be listened to elsewhere
      window.dispatchEvent(
        new CustomEvent('sectionInView', { detail: { id: sectionId } })
      );
    }
  }, [inView, sectionId]);

  return { ref, inView };
};

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleSectionInView = (e: Event) => {
      const { id } = (e as CustomEvent).detail;
      setActiveSection(id);
    };

    window.addEventListener('sectionInView', handleSectionInView);
    
    return () => {
      window.removeEventListener('sectionInView', handleSectionInView);
    };
  }, []);

  return activeSection;
};