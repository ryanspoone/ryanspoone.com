import { useEffect, useState } from 'react';
import _ from 'lodash';

const prettifyTitle = title => {
    if (_.includes(title, '-')) {
        return _.startCase(title);
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

    const handleDocumentScrollThrottled = _.throttle(handleDocumentScroll, 250);

    useEffect(() => {
        window.addEventListener('scroll', handleDocumentScrollThrottled);

        return () => window.removeEventListener('scroll', handleDocumentScrollThrottled);
    }, [handleDocumentScrollThrottled]);
};

export { prettifyTitle, useDocumentScrollThrottled };
