import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuWeb() {
  const pathName = usePathname();

  const isActive = pathName.startsWith('/login');

  return (
    <div>
      <div className="z-9">
        <div className="flex items-center justify-between gap-10">
          <nav className="">
            <ul className="flex justify-between gap-5">
              <li>Produto</li>
              <li>Preço</li>
              <li>Sobre</li>
              <li>Dúvidas</li>
            </ul>
          </nav>

          <div className="flex justify-between">
            <div className="buttons flex gap-4">
              <button className=" w-28 h-9 m-auto bg-[#2B59FF] text-primary rounded-[4.25px]">
                Cadastrar
              </button>

              <Link
                href={'/login'}
                className={`flex items-center justify-center w-28 h-9 m-auto text-primary rounded-[4.25px] ${
                  isActive ? 'bg-[#18308a]' : 'bg-[#2B59FF]'
                }`}
              >
                Logar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
