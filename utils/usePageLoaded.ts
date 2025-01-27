import { useEffect } from 'react';
import log from './log-browser';

function usePageLoaded(page: string) {
  useEffect(() => {
    log.track(page);
  }, []);
}

export default usePageLoaded;
