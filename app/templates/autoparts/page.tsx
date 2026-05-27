import Link from "next/link";
import {
  ArrowLeft,
  Car,
  Gauge,
  Heart,
  Mail,
  RotateCcw,
  Search,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Truck,
  Wrench,
} from "lucide-react";

const products = [
  {
    name: "Kit Pastilha de Freio",
    category: "Freios",
    price: "R$ 129,90",
    oldPrice: "R$ 169,90",
  },
  {
    name: "Farol LED Premium",
    category: "Iluminação",
    price: "R$ 249,90",
    oldPrice: "R$ 319,90",
  },
  {
    name: "Filtro de Óleo Motor",
    category: "Motor",
    price: "R$ 39,90",
    oldPrice: "R$ 59,90",
  },
  {
    name: "Amortecedor Dianteiro",
    category: "Suspensão",
    price: "R$ 299,90",
    oldPrice: "R$ 379,90",
  },
];

const categories = ["Motor", "Freios", "Suspensão", "Iluminação"];

const benefits = [
  {
    icon: Truck,
    title: "Entrega rápida",
    description: "Envio para todo o Brasil",
  },
  {
    icon: ShieldCheck,
    title: "Peças garantidas",
    description: "Compra segura e protegida",
  },
  {
    icon: RotateCcw,
    title: "Troca facilitada",
    description: "Conferência por aplicação",
  },
];

const faq = [
  "Como confirmar se a peça serve no meu veículo?",
  "A loja trabalha com peças originais e paralelas?",
  "Posso trocar uma peça comprada errada?",
  "O lojista poderá editar produtos, marcas e banners?",
];

export default function AutoPartsTemplatePage() {
  return (
    <main className="min-h-screen bg-[#0b0f14] text-white">
      <header className="sticky top-0 z-50">
        <div className="bg-[#ffb000] py-3 text-center text-sm font-black text-black">
          PEÇAS, ACESSÓRIOS E OFERTAS AUTOMOTIVAS
        </div>

        <div className="border-b border-white/10 bg-[#0b0f14]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-semibold text-zinc-400 transition hover:text-white"
              >
                <ArrowLeft size={18} />
                Voltar
              </Link>

              <nav className="hidden items-center gap-6 lg:flex">
                {["Motor", "Freios", "Suspensão", "Elétrica"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    className="font-medium text-zinc-400 transition hover:text-white"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </div>

            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.45em] text-[#ffb000]">
                Autopeças
              </p>

              <h1 className="text-2xl font-black tracking-tight">
                MGD Auto Parts
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="rounded-full border border-white/10 bg-white/10 p-3 transition hover:bg-[#ffb000] hover:text-black"
              >
                <Search size={18} />
              </button>

              <button
                type="button"
                className="relative rounded-full border border-white/10 bg-white/10 p-3 transition hover:bg-[#ffb000] hover:text-black"
              >
                <ShoppingCart size={18} />

                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#ffb000] text-[10px] font-black text-black">
                  4
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-zinc-200 shadow-sm">
            <Sparkles size={17} className="text-[#ffb000]" />
            Catálogo automotivo pronto para vender
          </div>

          <h2 className="max-w-3xl text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            Autopeças com busca rápida e visual profissional.
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-400">
            Template profissional para lojas de autopeças, acessórios,
            manutenção automotiva, catálogo por categoria e vendas online.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-full bg-[#ffb000] px-8 py-4 text-lg font-black text-black transition hover:scale-105"
            >
              Buscar peça
            </button>

            <button
              type="button"
              className="rounded-full border border-white/10 bg-white/10 px-8 py-4 text-lg font-bold transition hover:bg-white hover:text-black"
            >
              Ver ofertas
            </button>
          </div>

          <div className="mt-8 grid max-w-2xl gap-3 rounded-[28px] border border-white/10 bg-white/10 p-4 md:grid-cols-[1fr_auto]">
            <input
              type="text"
              placeholder="Digite peça, código, veículo ou marca"
              className="rounded-full border border-white/10 bg-black/30 px-6 py-4 text-white outline-none placeholder:text-zinc-500 focus:border-[#ffb000]"
            />

            <button
              type="button"
              className="rounded-full bg-[#ffb000] px-7 py-4 font-black text-black"
            >
              Pesquisar
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 z-10 rounded-3xl bg-[#ffb000] px-6 py-5 text-black shadow-2xl">
            <p className="text-sm font-bold text-black/70">Oferta oficina</p>
            <strong className="text-3xl">-25%</strong>
          </div>

          <div className="rounded-[44px] bg-gradient-to-br from-zinc-900 to-black p-8 shadow-2xl">
            <div className="flex h-[560px] items-center justify-center rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top,#ffb00044,transparent_35%),linear-gradient(145deg,#111827,#030712)] p-8 text-center">
              <div>
                <p className="text-sm uppercase tracking-[0.5em] text-[#ffb000]">
                  Performance
                </p>

                <h3 className="mt-8 text-6xl font-black leading-none">
                  Parts
                  <br />
                  Garage
                </h3>

                <p className="mt-6 text-zinc-400">
                  Visual forte para banners, ofertas e vitrines automotivas.
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
              className="flex items-center gap-4 rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-sm"
            >
              <div className="rounded-full bg-[#ffb000] p-4 text-black">
                <Icon size={22} />
              </div>

              <div>
                <h3 className="text-lg font-black">{benefit.title}</h3>
                <p className="text-zinc-400">{benefit.description}</p>
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
              className="rounded-full border border-white/10 bg-white/10 px-6 py-3 font-semibold text-zinc-300 transition hover:bg-[#ffb000] hover:text-black"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="text-sm uppercase tracking-[0.35em] text-[#ffb000]">
              Vitrine
            </span>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Peças em destaque
            </h2>
          </div>

          <p className="hidden max-w-md text-right text-zinc-400 md:block">
            Estrutura pronta para conectar produtos reais cadastrados no painel
            do cliente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white text-black shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative flex h-72 items-center justify-center bg-gradient-to-br from-zinc-200 to-zinc-100">
                <button
                  type="button"
                  className="absolute right-5 top-5 rounded-full bg-white p-3 shadow"
                >
                  <Heart size={18} />
                </button>

                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.5em] text-zinc-500">
                    Produto
                  </p>

                  <h3 className="mt-4 px-8 text-3xl font-black leading-tight">
                    {product.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  {product.category}
                </p>

                <div className="mt-4 flex items-center gap-1 text-[#ffb000]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>

                <div className="mt-5 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm text-zinc-400 line-through">
                      {product.oldPrice}
                    </p>

                    <strong className="text-2xl">{product.price}</strong>
                  </div>

                  <button
                    type="button"
                    className="rounded-full bg-black px-5 py-3 text-sm font-bold text-white transition group-hover:scale-105"
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
        <div className="grid overflow-hidden rounded-[40px] bg-[#ffb000] text-black lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-10 md:p-14">
            <span className="text-sm uppercase tracking-[0.35em] text-black/60">
              Campanha
            </span>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              Ofertas para manutenção, revisão e performance.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-black/70">
              Área ideal para banners promocionais, campanhas de revisão,
              combos de peças e descontos por categoria.
            </p>

            <button
              type="button"
              className="mt-8 rounded-full bg-black px-8 py-4 text-lg font-black text-white transition hover:scale-105"
            >
              Criar campanha
            </button>
          </div>

          <div className="flex min-h-[420px] items-center justify-center bg-gradient-to-br from-black to-zinc-900 p-10 text-center text-white">
            <div>
              <p className="text-sm uppercase tracking-[0.5em] text-[#ffb000]">
                Banner
              </p>

              <h3 className="mt-6 text-6xl font-black leading-none">
                Garage
                <br />
                Sale
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 rounded-[40px] border border-white/10 bg-white/10 p-8 shadow-sm md:grid-cols-[1fr_0.8fr] md:p-12">
          <div>
            <div className="mb-6 inline-flex rounded-full bg-[#ffb000] p-4 text-black">
              <Mail size={24} />
            </div>

            <h2 className="max-w-2xl text-4xl font-black md:text-5xl">
              Receba ofertas, novidades e peças para o seu veículo.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-400">
              Espaço ideal para captação de leads, campanhas de email marketing
              e relacionamento com clientes da loja.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <input
              type="email"
              placeholder="Digite seu melhor e-mail"
              className="rounded-full border border-white/10 bg-black/30 px-6 py-5 text-lg text-white outline-none transition placeholder:text-zinc-500 focus:border-[#ffb000]"
            />

            <button
              type="button"
              className="rounded-full bg-[#ffb000] px-8 py-5 text-lg font-black text-black transition hover:scale-[1.02]"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.35em] text-[#ffb000]">
              Best Sellers
            </span>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Mais procurados da semana
            </h2>
          </div>

          <button
            type="button"
            className="hidden rounded-full border border-white/10 bg-white/10 px-6 py-3 font-semibold transition hover:bg-[#ffb000] hover:text-black md:block"
          >
            Ver todos
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="group overflow-hidden rounded-[40px] bg-white text-black">
            <div className="relative flex h-[520px] items-center justify-center overflow-hidden bg-zinc-200">
              <span className="absolute left-6 top-6 rounded-full bg-[#ffb000] px-5 py-2 text-sm font-black text-black">
                TOP
              </span>

              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.45em] text-zinc-500">
                  Linha Premium
                </p>

                <h3 className="mt-6 text-5xl font-black leading-none">
                  Brake
                  <br />
                  Kit
                </h3>
              </div>
            </div>

            <div className="bg-white p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-zinc-400 line-through">R$ 499,90</p>
                  <strong className="text-3xl">R$ 389,90</strong>
                </div>

                <button
                  type="button"
                  className="rounded-full bg-black px-6 py-3 font-bold text-white transition group-hover:scale-105"
                >
                  Comprar
                </button>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-[40px] bg-[#ffb000] text-black">
            <div className="flex h-full min-h-[520px] flex-col justify-between p-10">
              <div>
                <span className="text-sm uppercase tracking-[0.45em] text-black/60">
                  Campanha Oficina
                </span>

                <h3 className="mt-6 text-5xl font-black leading-none">
                  Revisão
                  <br />
                  Completa
                </h3>
              </div>

              <div>
                <p className="max-w-sm text-black/70">
                  Monte campanhas para revisão preventiva, freios, óleo,
                  suspensão e iluminação.
                </p>

                <button
                  type="button"
                  className="mt-8 rounded-full bg-black px-6 py-3 font-black text-white transition hover:scale-105"
                >
                  Explorar
                </button>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            <article className="rounded-[34px] bg-white/10 p-8 shadow-sm">
              <span className="text-sm uppercase tracking-[0.35em] text-[#ffb000]">
                Motor
              </span>

              <h3 className="mt-4 text-3xl font-black">
                Óleos, filtros e sensores
              </h3>

              <p className="mt-4 text-zinc-400">
                Organize produtos por aplicação, código e categoria.
              </p>

              <button
                type="button"
                className="mt-6 rounded-full bg-[#ffb000] px-6 py-3 font-black text-black"
              >
                Ver linha
              </button>
            </article>

            <article className="rounded-[34px] border border-white/10 bg-black p-8">
              <span className="text-sm uppercase tracking-[0.35em] text-[#ffb000]">
                Tendência
              </span>

              <h3 className="mt-4 text-3xl font-black">LED & Performance</h3>

              <p className="mt-4 text-zinc-400">
                Destaque acessórios, faróis, lâmpadas e produtos premium.
              </p>

              <button
                type="button"
                className="mt-6 rounded-full border border-white/10 bg-white px-6 py-3 font-bold text-black"
              >
                Descobrir
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-[#ffb000]">
            Marcas
          </span>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Compatível com várias linhas automotivas
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
            Área ideal para exibir marcas, montadoras, fabricantes e linhas de
            produtos atendidas pela loja.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {["Motor", "Freios", "Suspensão", "Elétrica"].map((item) => (
            <article
              key={item}
              className="group relative flex h-64 items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-white/10"
            >
              <div className="absolute inset-0 bg-[#ffb000]/0 transition group-hover:bg-[#ffb000]" />

              <div className="relative z-10 text-center group-hover:text-black">
                <p className="text-sm uppercase tracking-[0.4em] text-[#ffb000] group-hover:text-black/60">
                  Linha
                </p>

                <h3 className="mt-4 text-3xl font-black">{item}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-sm uppercase tracking-[0.35em] text-[#ffb000]">
              Dúvidas frequentes
            </span>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Compra técnica, segura e eficiente.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              Seção ideal para reduzir dúvidas sobre aplicação da peça,
              compatibilidade e garantia.
            </p>
          </div>

          <div className="grid gap-4">
            {faq.map((question) => (
              <div
                key={question}
                className="rounded-[28px] border border-white/10 bg-white/10 p-6 shadow-sm"
              >
                <h3 className="text-xl font-black">{question}</h3>

                <p className="mt-3 text-zinc-400">
                  Resposta editável no painel da loja, permitindo personalização
                  conforme a política comercial do cliente.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-[#ffb000]">
              Autopeças
            </p>

            <h2 className="mt-3 text-3xl font-black">MGD Auto Parts</h2>

            <p className="mt-4 text-zinc-400">
              Template profissional para lojas automotivas no ecossistema MGD
              Ecommerce.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Categorias</h3>
            <ul className="space-y-3 text-zinc-400">
              <li>Motor</li>
              <li>Freios</li>
              <li>Suspensão</li>
              <li>Iluminação</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Atendimento</h3>
            <ul className="space-y-3 text-zinc-400">
              <li>Minha conta</li>
              <li>Meus pedidos</li>
              <li>Trocas e devoluções</li>
              <li>Garantia da peça</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Loja</h3>
            <ul className="space-y-3 text-zinc-400">
              <li>Sobre a marca</li>
              <li>Catálogo</li>
              <li>Ofertas</li>
              <li>Contato técnico</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-zinc-500">
          © 2026 MGD Ecommerce — Template Auto Parts Store.
        </div>
      </footer>
    </main>
  );
}