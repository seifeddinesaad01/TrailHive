import { useState, useEffect } from 'react';

interface WindowSize {
  width: number | null;
  height: number  | null;
}

const useWindow = (): any => {
  const [windowSize, setWindowSize] = useState<any>({
    width: '',
    height: '',
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth.toString,
        height: window.innerHeight.toString,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export default useWindow;
