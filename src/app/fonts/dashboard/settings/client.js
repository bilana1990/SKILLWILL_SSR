'use client';

import { useRouter } from 'next/router';

export default function ClientComponent() {
  const router = useRouter();
  const { id } = router.query; // Retrieve query parameter
  
  return <div>Setting ID: {id}</div>;
}