'use client';

import { useSearchParams } from 'next/navigation';

function QueryParam() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  if (!code) return null;
  return <p>code: {code}</p>;
}

export default QueryParam;
