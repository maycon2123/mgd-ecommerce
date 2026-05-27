export function FooterSection() {
  return (
    <footer className="bg-black px-10 py-20 text-white">
      <div className="grid gap-12 lg:grid-cols-4">
        <div>
          <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            Fashion Store
          </span>

          <h2 className="mt-5 text-4xl font-black">
            MGD Fashion
          </h2>

          <p className="mt-5 leading-relaxed text-zinc-400">
            Plataforma visual moderna para ecommerce profissional.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-black">
            Navegação
          </h3>

          <ul className="mt-5 space-y-3 text-zinc-400">
            <li>Home</li>
            <li>Produtos</li>
            <li>Coleções</li>
            <li>Contato</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-black">
            Categorias
          </h3>

          <ul className="mt-5 space-y-3 text-zinc-400">
            <li>Feminino</li>
            <li>Masculino</li>
            <li>Acessórios</li>
            <li>Promoções</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-black">
            Redes sociais
          </h3>

          <ul className="mt-5 space-y-3 text-zinc-400">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>TikTok</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 pt-8 text-sm text-zinc-500">
        © 2026 MGD Ecommerce — Todos os direitos reservados.
      </div>
    </footer>
  );
}