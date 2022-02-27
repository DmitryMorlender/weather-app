import React from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useOutsideAlerter(ref: React.RefObject<HTMLDivElement>, handler?: () => void) {
  React.useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler && handler();
      }
    }

    if (handler) {
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
    }

    if (handler) {
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [ref, handler]);
}
