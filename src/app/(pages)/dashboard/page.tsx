import Link from 'next/link';

export default function Overview() {
  return (
    <div>
      <Link href={'/login'}>VOLTAR</Link>
      <h1>overview</h1>
    </div>
  );
}
