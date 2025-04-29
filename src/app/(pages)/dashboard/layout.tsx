import Image from 'next/image';
import Link from 'next/link';

export default function LayoutDashboard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="flex">
        <section className="w-53 border-1 border-black h-screen p-4">
          <Image
            className="mb-5"
            src={'/logojunta01.png'}
            alt="logo"
            width={80}
            height={60}
          />

          <nav className="flex flex-col gap-5">
            <Link href={'/dashboard'}>Visão geral</Link>

            <ul>
              <p>Gasto pessoal</p>
              <li>
                <Link href={'/dashboard/ganhos'}>Ganhos</Link>
              </li>
              <li>
                <Link href={'/dashboard/despesas'}>Despesas</Link>
              </li>
            </ul>

            <ul>
              <p>Dívida interpessoal</p>
              <li>
                <Link href={'/dashboard/medevendo'}>Estão me devendo...</Link>
              </li>
              <li>
                <Link href={'/dashboard/devendopara'}>
                  Estou devendo para...
                </Link>
              </li>
            </ul>

            <ul>
              <p>Cotação de Moedas</p>
              <li>
                <Link href={'/dashboard/moedas'}>Moedas</Link>
              </li>
            </ul>
          </nav>
        </section>

        <section className="w-full">
          <div className="h-17 border-1 border-black">
            <h1>barra do topo</h1>
          </div>
          <div className="border-1 border-amber-400 flex items-center justify-center h-[calc(100%-68px)]">
            {children}
          </div>
        </section>
      </div>
    </div>
  );
}
