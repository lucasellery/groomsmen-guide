import { useEffect, useState } from "react";

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  const updateIsMobile = () => setIsMobile(window.innerWidth < 768);

  useEffect(() => {
    window.addEventListener('resize', updateIsMobile);

    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return isMobile;
}