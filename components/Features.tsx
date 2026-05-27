export function Features() {
  const items = [
    {
      title: "Sistema de Ecommerce",
      description:
        "Crie lojas online completas, com vitrine, produtos, carrinho e estrutura preparada para vendas.",
    },
    {
      title: "Templates Profissionais",
      description:
        "Layouts modernos e responsivos para diferentes segmentos: moda, infantil, autopeças, eletrônicos e mais.",
    },
    {
      title: "Dropshipping",
      description:
        "Cadastre fornecedores, publique produtos e venda sem precisar manter estoque próprio inicialmente.",
    },
    {
      title: "Gestão de Produtos",
      description:
        "Controle produtos, categorias, preços, imagens, estoque e variações de forma simples e organizada.",
    },
    {
      title: "Checkout Moderno",
      description:
        "Experiência de compra rápida, clara e profissional, preparada para integração com Pix e cartão.",
    },
    {
      title: "Painel Administrativo",
      description:
        "Acompanhe pedidos, clientes, produtos e desempenho da loja em um painel intuitivo e elegante.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <div className="max-w-3xl mb-16">
        <span className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Plataforma completa
        </span>

        <h3 className="text-4xl md:text-5xl font-bold mt-4">
          Recursos criados para vender mais
        </h3>

        <p className="text-zinc-400 text-lg mt-5">
          O MGD Ecommerce une criação de loja, gestão comercial e tecnologia
          SaaS para transformar negócios em operações digitais profissionais.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={item.title}
            className="group border border-zinc-800 rounded-3xl p-8 bg-zinc-950/70 hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center font-bold mb-8">
              {index + 1}
            </div>

            <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>

            <p className="text-zinc-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}