'use client';

import { useEffect, useRef } from 'react';
import throttle from 'lodash/throttle';

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

    throttledHandlerRef.current = throttle(handleDocumentScroll, 250);
    window.addEventListener('scroll', throttledHandlerRef.current);

    return () => {
      if (throttledHandlerRef.current) {
        window.removeEventListener('scroll', throttledHandlerRef.current);
        throttledHandlerRef.current.cancel();
      }
    };
  }, [callback]);
};
