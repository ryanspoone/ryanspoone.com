import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';
import includes from 'lodash/includes';
import startCase from 'lodash/startCase';

const prettifyTitle = title => {
    if (includes(title, '-')) {
        return startCase(title);
    }
    return title;
};

const useDocumentScrollThrottled = callback => {
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

export { prettifyTitle, useDocumentScrollThrottled };
