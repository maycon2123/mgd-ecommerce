export function CategoriesSection() {
  return (
    <section className="px-10 py-20">
      <div className="text-center">
        <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
          Categorias
        </span>

        <h2 className="mt-4 text-5xl font-black text-black">
          Explore por estilo
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-zinc-600">
          Estrutura modular para categorias principais da loja virtual.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-4">
        {[
          "Feminino",
          "Masculino",
          "Acessórios",
          "Coleções",
        ].map((category) => (
          <article
            key={category}
            className="overflow-hidden rounded-[32px] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1"
          >
            <div className="h-[260px] bg-gradient-to-br from-zinc-200 to-zinc-100" />

            <div className="p-8">
              <h3 className="text-3xl font-black text-black">
                {category}
              </h3>

              <p className="mt-4 text-zinc-600">
                Categoria visual para navegação do ecommerce.
              </p>

              <button className="mt-8 rounded-full bg-black px-6 py-3 font-bold text-white">
                Explorar
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}