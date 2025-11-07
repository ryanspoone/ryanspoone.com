'use client';

import { useEffect, useRef, useState } from 'react';
import { throttle } from './utils';
import { SCROLL } from './constants';

interface ScrollCallbackData {
  previousScrollTop: number;
  currentScrollTop: number;
}

export const useDocumentScrollThrottled = (callback: (data: ScrollCallbackData) => void) => {
  const previousScrollTopRef = useRef(0);
  const throttledHandlerRef = useRef<ReturnType<typeof throttle> | null>(null);

  useEffect(() => {
    const handleDocumentScroll = () => {
      const { scrollTop: currentScrollTop } = document.documentElement || document.body;
      const previousScrollTop = previousScrollTopRef.current;

      previousScrollTopRef.current = currentScrollTop;
      callback({ previousScrollTop, currentScrollTop });
    };

    throttledHandlerRef.current = throttle(handleDocumentScroll, SCROLL.THROTTLE_DELAY);
    window.addEventListener('scroll', throttledHandlerRef.current);

    return () => {
      if (throttledHandlerRef.current) {
        window.removeEventListener('scroll', throttledHandlerRef.current);
        throttledHandlerRef.current.cancel();
      }
    };
  }, [callback]);
};

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
};

export const useTabbedContent = (initialIndex = 0) => {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);

  return {
    selectedIndex,
    selectIndex: setSelectedIndex,
    isSelected: (index: number) => selectedIndex === index,
  };
};
