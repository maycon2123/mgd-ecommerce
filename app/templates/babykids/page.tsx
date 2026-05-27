import Link from "next/link";
import {
  ArrowLeft,
  Baby,
  Gift,
  Heart,
  Mail,
  RotateCcw,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

const products = [
  {
    name: "Kit Enxoval Soninho",
    category: "Enxoval",
    price: "R$ 149,90",
    oldPrice: "R$ 199,90",
  },
  {
    name: "Macacão Algodão Doce",
    category: "Roupinhas",
    price: "R$ 79,90",
    oldPrice: "R$ 119,90",
  },
  {
    name: "Mochila Baby Ursinho",
    category: "Acessórios",
    price: "R$ 89,90",
    oldPrice: "R$ 129,90",
  },
  {
    name: "Brinquedo Sensorial",
    category: "Brinquedos",
    price: "R$ 59,90",
    oldPrice: "R$ 89,90",
  },
];

const categories = ["Enxoval", "Roupinhas", "Brinquedos", "Higiene"];

const benefits = [
  {
    icon: Truck,
    title: "Entrega rápida",
    description: "Envio seguro para sua casa",
  },
  {
    icon: ShieldCheck,
    title: "Compra protegida",
    description: "Ambiente seguro para famílias",
  },
  {
    icon: RotateCcw,
    title: "Troca facilitada",
    description: "Atendimento humanizado",
  },
];

const faq = [
  "Os produtos são indicados para recém-nascidos?",
  "A loja vende enxoval completo?",
  "Posso trocar o tamanho das roupinhas?",
  "O lojista poderá editar produtos e banners?",
];

export default function BabyKidsTemplatePage() {
  return (
    <main className="min-h-screen bg-[#fff7ec] text-[#2b2118]">
      <header className="sticky top-0 z-50">
        <div className="bg-[#f4a7b9] py-3 text-center text-sm font-bold text-white">
          OFERTAS ESPECIAIS PARA BEBÊS E CRIANÇAS
        </div>

        <div className="border-b border-[#2b2118]/10 bg-[#fff7ec]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-semibold text-[#6f5b4b] transition hover:text-[#2b2118]"
              >
                <ArrowLeft size={18} />
                Voltar
              </Link>

              <nav className="hidden items-center gap-6 lg:flex">
                {["Enxoval", "Roupinhas", "Brinquedos", "Higiene"].map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      className="font-medium text-[#6f5b4b] transition hover:text-[#2b2118]"
                    >
                      {item}
                    </button>
                  ),
                )}
              </nav>
            </div>

            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.45em] text-[#b58973]">
                Baby Kids
              </p>

              <h1 className="text-2xl font-black tracking-tight">
                MGD Baby
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="rounded-full border border-[#2b2118]/10 bg-white p-3 transition hover:bg-[#2b2118] hover:text-white"
              >
                <Search size={18} />
              </button>

              <button
                type="button"
                className="relative rounded-full border border-[#2b2118]/10 bg-white p-3 transition hover:bg-[#2b2118] hover:text-white"
              >
                <ShoppingBag size={18} />

                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#f4a7b9] text-[10px] font-bold text-white">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#2b2118]/10 bg-white px-5 py-3 text-sm font-bold text-[#6f5b4b] shadow-sm">
            <Sparkles size={17} />
            Amor em cada detalhe
          </div>

          <h2 className="max-w-3xl text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            Tudo para cuidar do seu bebê com carinho.
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-[#6f5b4b]">
            Template profissional para lojas infantis, enxoval, roupinhas,
            brinquedos, higiene e produtos essenciais para bebês e crianças.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-full bg-[#2b2118] px-8 py-4 text-lg font-bold text-white transition hover:scale-105"
            >
              Ver enxoval
            </button>

            <button
              type="button"
              className="rounded-full border border-[#2b2118]/10 bg-white px-8 py-4 text-lg font-bold transition hover:bg-[#2b2118] hover:text-white"
            >
              Comprar agora
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 z-10 rounded-3xl bg-[#f4a7b9] px-6 py-5 text-white shadow-2xl">
            <p className="text-sm text-white/80">Oferta fofura</p>
            <strong className="text-3xl">-30%</strong>
          </div>

          <div className="rounded-[44px] bg-gradient-to-br from-[#f4a7b9] to-[#a7d8ff] p-8 shadow-2xl">
            <div className="flex h-[560px] items-center justify-center rounded-[34px] border border-white/40 bg-[radial-gradient(circle_at_top,#ffffffaa,transparent_35%),linear-gradient(145deg,#fff7ec,#fce1e8)] p-8 text-center">
              <div>
                <p className="text-sm uppercase tracking-[0.5em] text-[#b58973]">
                  Coleção
                </p>

                <h3 className="mt-8 text-6xl font-black leading-none">
                  Baby
                  <br />
                  Dream
                </h3>

                <p className="mt-6 text-[#6f5b4b]">
                  Visual delicado para banners, campanhas e vitrines infantis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-6 pb-12 md:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <div
              key={benefit.title}
              className="flex items-center gap-4 rounded-[28px] border border-[#2b2118]/10 bg-white p-6 shadow-sm"
            >
              <div className="rounded-full bg-[#f4a7b9] p-4 text-white">
                <Icon size={22} />
              </div>

              <div>
                <h3 className="text-lg font-black">{benefit.title}</h3>
                <p className="text-[#6f5b4b]">{benefit.description}</p>
              </div>
            </div>
          );
        })}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-10">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className="rounded-full border border-[#2b2118]/10 bg-white px-6 py-3 font-semibold text-[#6f5b4b] transition hover:bg-[#2b2118] hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="text-sm uppercase tracking-[0.35em] text-[#b58973]">
              Vitrine
            </span>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Produtos fofinhos em destaque
            </h2>
          </div>

          <p className="hidden max-w-md text-right text-[#6f5b4b] md:block">
            Estrutura pronta para conectar produtos reais cadastrados no painel
            do cliente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[32px] border border-[#2b2118]/10 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative flex h-72 items-center justify-center bg-gradient-to-br from-[#fce1e8] to-[#e5f5ff]">
                <button
                  type="button"
                  className="absolute right-5 top-5 rounded-full bg-white p-3 shadow"
                >
                  <Heart size={18} />
                </button>

                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.5em] text-[#b58973]">
                    Produto
                  </p>

                  <h3 className="mt-4 px-8 text-3xl font-black leading-tight">
                    {product.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b58973]">
                  {product.category}
                </p>

                <div className="mt-4 flex items-center gap-1 text-[#f4a7b9]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>

                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm text-[#b58973] line-through">
                      {product.oldPrice}
                    </p>

                    <strong className="text-2xl">{product.price}</strong>
                  </div>

                  <button
                    type="button"
                    className="rounded-full bg-[#2b2118] px-5 py-3 text-sm font-bold text-white transition group-hover:scale-105"
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid overflow-hidden rounded-[40px] bg-[#2b2118] text-white lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-10 md:p-14">
            <span className="text-sm uppercase tracking-[0.35em] text-[#f4a7b9]">
              Campanha
            </span>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              Monte o enxoval com carinho e praticidade.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Área ideal para banners promocionais, campanhas de nascimento,
              combos de enxoval e kits infantis.
            </p>

            <button
              type="button"
              className="mt-8 rounded-full bg-white px-8 py-4 text-lg font-bold text-[#2b2118] transition hover:scale-105"
            >
              Criar campanha
            </button>
          </div>

          <div className="flex min-h-[420px] items-center justify-center bg-gradient-to-br from-[#f4a7b9] to-[#a7d8ff] p-10 text-center text-[#2b2118]">
            <div>
              <p className="text-sm uppercase tracking-[0.5em] text-white">
                Banner
              </p>

              <h3 className="mt-6 text-6xl font-black leading-none">
                Baby
                <br />
                Week
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 rounded-[40px] border border-[#2b2118]/10 bg-white p-8 shadow-sm md:grid-cols-[1fr_0.8fr] md:p-12">
          <div>
            <div className="mb-6 inline-flex rounded-full bg-[#f4a7b9] p-4 text-white">
              <Mail size={24} />
            </div>

            <h2 className="max-w-2xl text-4xl font-black md:text-5xl">
              Receba novidades, ofertas e dicas para cuidar do seu bebê.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#6f5b4b]">
              Espaço ideal para captação de leads, campanhas de email marketing
              e relacionamento com famílias.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <input
              type="email"
              placeholder="Digite seu melhor e-mail"
              className="rounded-full border border-[#2b2118]/10 bg-[#fff7ec] px-6 py-5 text-lg outline-none transition focus:border-[#f4a7b9]"
            />

            <button
              type="button"
              className="rounded-full bg-[#2b2118] px-8 py-5 text-lg font-bold text-white transition hover:scale-[1.02]"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.35em] text-[#b58973]">
              Best Sellers
            </span>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Mais amados pelas famílias
            </h2>
          </div>

          <button
            type="button"
            className="hidden rounded-full border border-[#2b2118]/10 bg-white px-6 py-3 font-semibold transition hover:bg-[#2b2118] hover:text-white md:block"
          >
            Ver todos
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="group overflow-hidden rounded-[40px] bg-[#fce1e8]">
            <div className="relative flex h-[520px] items-center justify-center overflow-hidden">
              <span className="absolute left-6 top-6 rounded-full bg-[#f4a7b9] px-5 py-2 text-sm font-bold text-white">
                FOFO
              </span>

              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.45em] text-[#b58973]">
                  Kit Premium
                </p>

                <h3 className="mt-6 text-5xl font-black leading-none">
                  Baby
                  <br />
                  Care
                </h3>
              </div>
            </div>

            <div className="bg-white p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#b58973] line-through">R$ 299,90</p>
                  <strong className="text-3xl">R$ 219,90</strong>
                </div>

                <button
                  type="button"
                  className="rounded-full bg-[#2b2118] px-6 py-3 font-bold text-white transition group-hover:scale-105"
                >
                  Comprar
                </button>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-[40px] bg-[#2b2118] text-white">
            <div className="flex h-full min-h-[520px] flex-col justify-between p-10">
              <div>
                <span className="text-sm uppercase tracking-[0.45em] text-[#f4a7b9]">
                  Campanha Especial
                </span>

                <h3 className="mt-6 text-5xl font-black leading-none">
                  Baby
                  <br />
                  Month
                </h3>
              </div>

              <div>
                <p className="max-w-sm text-white/70">
                  Crie banners promocionais modernos para datas especiais e
                  campanhas infantis.
                </p>

                <button
                  type="button"
                  className="mt-8 rounded-full bg-white px-6 py-3 font-bold text-[#2b2118] transition hover:scale-105"
                >
                  Explorar
                </button>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            <article className="rounded-[34px] bg-white p-8 shadow-sm">
              <span className="text-sm uppercase tracking-[0.35em] text-[#b58973]">
                Enxoval
              </span>

              <h3 className="mt-4 text-3xl font-black">
                Kits para recém-nascidos
              </h3>

              <p className="mt-4 text-[#6f5b4b]">
                Combos prontos para facilitar a rotina das famílias.
              </p>

              <button
                type="button"
                className="mt-6 rounded-full bg-[#2b2118] px-6 py-3 font-bold text-white"
              >
                Ver kits
              </button>
            </article>

            <article className="rounded-[34px] border border-[#2b2118]/10 bg-[#e5f5ff] p-8">
              <span className="text-sm uppercase tracking-[0.35em] text-[#b58973]">
                Tendência
              </span>

              <h3 className="mt-4 text-3xl font-black">Mini Essentials</h3>

              <p className="mt-4 text-[#6f5b4b]">
                Produtos essenciais para bebês e crianças.
              </p>

              <button
                type="button"
                className="mt-6 rounded-full border border-[#2b2118]/10 bg-white px-6 py-3 font-bold"
              >
                Descobrir
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-[#b58973]">
            Momentos
          </span>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Inspirações para famílias
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#6f5b4b]">
            Área ideal para exibir fotos de clientes, campanhas fofas,
            influenciadores maternos e conteúdos da marca.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {["Momento 01", "Momento 02", "Momento 03", "Momento 04"].map(
            (item) => (
              <article
                key={item}
                className="group relative flex h-80 items-center justify-center overflow-hidden rounded-[32px] bg-gradient-to-br from-[#fce1e8] to-[#e5f5ff]"
              >
                <div className="absolute inset-0 bg-[#2b2118]/0 transition group-hover:bg-[#2b2118]/35" />

                <div className="relative z-10 text-center">
                  <p className="text-sm uppercase tracking-[0.4em] text-[#b58973] group-hover:text-white">
                    MGD Baby
                  </p>

                  <h3 className="mt-4 text-3xl font-black group-hover:text-white">
                    {item}
                  </h3>
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-sm uppercase tracking-[0.35em] text-[#b58973]">
              Dúvidas frequentes
            </span>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Compra tranquila para toda família.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-[#6f5b4b]">
              Seção ideal para reduzir dúvidas dos clientes e aumentar a
              confiança na loja.
            </p>
          </div>

          <div className="grid gap-4">
            {faq.map((question) => (
              <div
                key={question}
                className="rounded-[28px] border border-[#2b2118]/10 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black">{question}</h3>

                <p className="mt-3 text-[#6f5b4b]">
                  Resposta editável no painel da loja, permitindo personalização
                  conforme a política comercial do cliente.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#2b2118]/10 bg-[#2b2118] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-[#f4a7b9]">
              Baby Kids
            </p>

            <h2 className="mt-3 text-3xl font-black">MGD Baby</h2>

            <p className="mt-4 text-white/70">
              Template profissional para lojas infantis no ecossistema MGD
              Ecommerce.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Categorias</h3>
            <ul className="space-y-3 text-white/70">
              <li>Enxoval</li>
              <li>Roupinhas</li>
              <li>Brinquedos</li>
              <li>Higiene</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Atendimento</h3>
            <ul className="space-y-3 text-white/70">
              <li>Minha conta</li>
              <li>Meus pedidos</li>
              <li>Trocas e devoluções</li>
              <li>Política de entrega</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Loja</h3>
            <ul className="space-y-3 text-white/70">
              <li>Sobre a marca</li>
              <li>Novidades</li>
              <li>Campanhas</li>
              <li>Contato</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-white/50">
          © 2026 MGD Ecommerce — Template Baby Kids Store.
        </div>
      </footer>
    </main>
  );
}