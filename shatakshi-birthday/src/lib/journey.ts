'use client';

import { useState, useEffect, useCallback } from 'react';

const SECTIONS = [
  'timeline',
  'videos',
  'scrapbook',
  'wishes',
  'confessions',
  'gallery',
  'letter',
] as const;

type SectionId = typeof SECTIONS[number];

const STORAGE_KEY = 'shatakshi-journey';

function getInitialVisited(): SectionId[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem('shatakshi-journey');
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed.visitedSections || [];
    }
  } catch {}
  return [];
}

export function useJourney() {
  const [visitedSections, setVisitedSections] = useState<SectionId[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    try {
      const stored = localStorage.getItem('shatakshi-journey');
      if (stored) {
        const parsed = JSON.parse(stored);
        setVisitedSections(parsed.visitedSections || []);
      }
    } catch {}
  }, []);

  const saveState = useCallback((sections: SectionId[]) => {
    localStorage.setItem('shatakshi-journey', JSON.stringify({ visitedSections: sections }));
  }, []);

  const visitSection = useCallback((section: SectionId) => {
    setVisitedSections(prev => {
      if (prev.includes(section)) return prev;
      const next = [...prev, section];
      localStorage.setItem('shatakshi-journey', JSON.stringify({ visitedSections: next }));
      return next;
    });
  }, []);

  const resetJourney = useCallback(() => {
    setVisitedSections([]);
    localStorage.removeItem('shatakshi-journey');
  }, []);

  const isComplete = useCallback(() => visitedSections.length >= 7, [visitedSections]);

  const getProgress = useCallback(() => ({
    current: visitedSections.length,
    total: 7,
    percentage: Math.round((visitedSections.length / 7) * 100),
  }), [visitedSections]);

  return {
    visitedSections: isMounted ? visitedSections : [],
    visitSection,
    resetJourney,
    isComplete,
    getProgress,
  };
}

export { SECTIONS };
export type { SectionId };