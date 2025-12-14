import { useEffect, useRef, useState } from "react";

export function useIntersectionObserver() {
  // Use HTMLElement for better type safety and initialize with null
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting)
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}