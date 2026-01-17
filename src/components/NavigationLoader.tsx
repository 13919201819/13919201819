// 'use client';

// import { useEffect, useState } from 'react';
// import { usePathname, useSearchParams } from 'next/navigation';
// import Loader from '@/components/ui/Loader';

// export default function NavigationLoader() {
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(false);
//   }, [pathname, searchParams]);

//   return loading ? <Loader /> : null;
// }


'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Loader from '@/components/ui/Loader';

export default function NavigationLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams.toString()]);

  return loading ? <Loader /> : null;
}