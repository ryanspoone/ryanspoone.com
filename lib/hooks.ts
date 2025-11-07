'use client';

import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

interface ScrollCallbackData {
  previousScrollTop: number;
  currentScrollTop: number;
}

export const useDocumentScrollThrottled = (callback: (data: ScrollCallbackData) => void) => {
  const [, setScrollPosition] = useState(0);
  let previousScrollTop = 0;

  function handleDocumentScroll() {
    const { scrollTop: currentScrollTop } = document.documentElement || document.body;

    setScrollPosition(previousPosition => {
      previousScrollTop = previousPosition;
      return currentScrollTop;
    });

    callback({ previousScrollTop, currentScrollTop });
  }

  const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 250);

  useEffect(() => {
    window.addEventListener('scroll', handleDocumentScrollThrottled);

    return () => window.removeEventListener('scroll', handleDocumentScrollThrottled);
  }, [handleDocumentScrollThrottled]);
};
