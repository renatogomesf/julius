export default function Header() {
  return (
    <section className="max-w-[1440px] m-auto">
      <div className="flex justify-between pt-5 pl-14 pr-14 text-primary">
        <div className="">Logo</div>

        <nav>
          <ul className="flex justify-between gap-5">
            <li>Produto</li>
            <li>Preço</li>
            <li>Sobre</li>
            <li>Dúvidas</li>
          </ul>
        </nav>

        <div className="flex gap-5">
          <button>Cadastrar</button>
          <button>Logar</button>
        </div>
      </div>
    </section>
  );
}
