import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash in the URL, don't scroll to top (let hash scrolling handle it)
    if (!hash) {
      // Scroll to top immediately
      window.scrollTo(0, 0);
      
      // Also ensure document.documentElement scrolls to top
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
