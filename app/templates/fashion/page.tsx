import Link from "next/link";
import {
  ArrowLeft,
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
    name: "Blazer Alfaiataria Premium",
    category: "Coleção Executiva",
    price: "R$ 189,90",
    oldPrice: "R$ 249,90",
  },
  {
    name: "Vestido Urban Chic",
    category: "Nova Coleção",
    price: "R$ 159,90",
    oldPrice: "R$ 219,90",
  },
  {
    name: "Bolsa Minimal Lux",
    category: "Acessórios",
    price: "R$ 129,90",
    oldPrice: "R$ 179,90",
  },
  {
    name: "Tênis Street Comfort",
    category: "Calçados",
    price: "R$ 199,90",
    oldPrice: "R$ 259,90",
  },
];

const categories = ["Feminino", "Masculino", "Acessórios", "Calçados"];

const benefits = [
  {
    icon: Truck,
    title: "Frete grátis",
    description: "Compras acima de R$199",
  },
  {
    icon: ShieldCheck,
    title: "Compra segura",
    description: "Ambiente protegido",
  },
  {
    icon: RotateCcw,
    title: "Troca facilitada",
    description: "Até 7 dias úteis",
  },
];

const faq = [
  "Como funciona o prazo de entrega?",
  "Posso trocar ou devolver uma peça?",
  "A loja aceita Pix e cartão?",
  "Os produtos podem ser editados pelo lojista?",
];

export default function FashionTemplatePage() {
  return (
    <main className="min-h-screen bg-[#f3efe8] text-[#111111]">
      <header className="sticky top-0 z-50">
        <div className="bg-black py-3 text-center text-sm font-semibold text-white">
          FRETE GRÁTIS NAS COMPRAS ACIMA DE R$199
        </div>

        <div className="border-b border-black/10 bg-[#f3efe8]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className="flex items-center gap-2 text-sm font-semibold text-zinc-600 transition hover:text-black"
              >
                <ArrowLeft size={18} />
                Voltar
              </Link>

              <nav className="hidden items-center gap-6 lg:flex">
                {["Feminino", "Masculino", "Coleções", "Acessórios"].map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      className="font-medium text-zinc-700 transition hover:text-black"
                    >
                      {item}
                    </button>
                  ),
                )}
              </nav>
            </div>

            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.45em] text-zinc-500">
                Fashion
              </p>

              <h1 className="text-2xl font-black tracking-tight">
                MGD Fashion
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                className="rounded-full border border-black/10 bg-white p-3 transition hover:bg-black hover:text-white"
              >
                <Search size={18} />
              </button>

              <button
                type="button"
                className="relative rounded-full border border-black/10 bg-white p-3 transition hover:bg-black hover:text-white"
              >
                <ShoppingBag size={18} />

                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                  2
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 shadow-sm">
            <Sparkles size={17} />
            Coleção premium pronta para vender
          </div>

          <h2 className="max-w-3xl text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            Moda com presença digital elegante.
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-600">
            Template profissional para lojas de roupas, acessórios e coleções
            sazonais, com vitrine moderna, destaque para ofertas e experiência
            visual de alto padrão.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              className="rounded-full bg-black px-8 py-4 text-lg font-bold text-white transition hover:scale-105"
            >
              Comprar coleção
            </button>

            <button
              type="button"
              className="rounded-full border border-black/15 bg-white px-8 py-4 text-lg font-bold transition hover:bg-black hover:text-white"
            >
              Ver lançamentos
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 z-10 rounded-3xl bg-black px-6 py-5 text-white shadow-2xl">
            <p className="text-sm text-zinc-400">Oferta especial</p>
            <strong className="text-3xl">-35%</strong>
          </div>

          <div className="rounded-[44px] bg-gradient-to-br from-zinc-950 to-zinc-700 p-8 shadow-2xl">
            <div className="flex h-[560px] items-center justify-center rounded-[34px] border border-white/10 bg-[radial-gradient(circle_at_top,#ffffff33,transparent_35%),linear-gradient(145deg,#18181b,#3f3f46)] p-8 text-center text-white">
              <div>
                <p className="text-sm uppercase tracking-[0.5em] text-zinc-400">
                  Editorial
                </p>

                <h3 className="mt-8 text-6xl font-black leading-none">
                  Urban
                  <br />
                  Collection
                </h3>

                <p className="mt-6 text-zinc-300">
                  Visual premium para banners, campanhas e vitrines.
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
              className="flex items-center gap-4 rounded-[28px] border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="rounded-full bg-black p-4 text-white">
                <Icon size={22} />
              </div>

              <div>
                <h3 className="text-lg font-black">{benefit.title}</h3>
                <p className="text-zinc-500">{benefit.description}</p>
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
              className="rounded-full border border-black/10 bg-white px-6 py-3 font-semibold text-zinc-700 transition hover:bg-black hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              Vitrine
            </span>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Produtos em destaque
            </h2>
          </div>

          <p className="hidden max-w-md text-right text-zinc-600 md:block">
            Estrutura pronta para conectar produtos reais cadastrados no painel
            do cliente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[32px] border border-black/10 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative flex h-72 items-center justify-center bg-gradient-to-br from-zinc-200 to-zinc-100">
                <button
                  type="button"
                  className="absolute right-5 top-5 rounded-full bg-white p-3 shadow"
                >
                  <Heart size={18} />
                </button>

                <div className="text-center">
                  <p className="text-xs uppercase tracking-[0.5em] text-zinc-400">
                    Produto
                  </p>

                  <h3 className="mt-4 px-8 text-3xl font-black leading-tight">
                    {product.name}
                  </h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  {product.category}
                </p>

                <div className="mt-4 flex items-center gap-1 text-yellow-500">
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
        <div className="grid overflow-hidden rounded-[40px] bg-black text-white lg:grid-cols-[0.9fr_1.1fr]">
          <div className="p-10 md:p-14">
            <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              Campanha
            </span>

            <h2 className="mt-5 text-4xl font-black md:text-6xl">
              Nova coleção com identidade visual premium.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              Área ideal para banners promocionais, campanhas de lançamento,
              cupom de desconto e ações sazonais.
            </p>

            <button
              type="button"
              className="mt-8 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition hover:scale-105"
            >
              Criar campanha
            </button>
          </div>

          <div className="flex min-h-[420px] items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950 p-10 text-center">
            <div>
              <p className="text-sm uppercase tracking-[0.5em] text-zinc-500">
                Banner
              </p>

              <h3 className="mt-6 text-6xl font-black leading-none">
                Fashion
                <br />
                Week
              </h3>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 rounded-[40px] border border-black/10 bg-white p-8 shadow-sm md:grid-cols-[1fr_0.8fr] md:p-12">
          <div>
            <div className="mb-6 inline-flex rounded-full bg-black p-4 text-white">
              <Mail size={24} />
            </div>

            <h2 className="max-w-2xl text-4xl font-black md:text-5xl">
              Receba novidades, ofertas e lançamentos exclusivos.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600">
              Espaço ideal para captação de leads, campanhas de email marketing
              e relacionamento com clientes da loja.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4">
            <input
              type="email"
              placeholder="Digite seu melhor e-mail"
              className="rounded-full border border-black/10 bg-[#f3efe8] px-6 py-5 text-lg outline-none transition focus:border-black"
            />

            <button
              type="button"
              className="rounded-full bg-black px-8 py-5 text-lg font-bold text-white transition hover:scale-[1.02]"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              Best Sellers
            </span>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Mais vendidos da semana
            </h2>
          </div>

          <button
            type="button"
            className="hidden rounded-full border border-black/10 bg-white px-6 py-3 font-semibold transition hover:bg-black hover:text-white md:block"
          >
            Ver todos
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <article className="group overflow-hidden rounded-[40px] bg-[#d9d1c7]">
            <div className="relative flex h-[520px] items-center justify-center overflow-hidden">
              <span className="absolute left-6 top-6 rounded-full bg-black px-5 py-2 text-sm font-bold text-white">
                HOT
              </span>

              <div className="text-center">
                <p className="text-sm uppercase tracking-[0.45em] text-zinc-500">
                  Fashion Premium
                </p>

                <h3 className="mt-6 text-5xl font-black leading-none">
                  Winter
                  <br />
                  Drop
                </h3>
              </div>
            </div>

            <div className="bg-white p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-zinc-400 line-through">R$ 399,90</p>
                  <strong className="text-3xl">R$ 289,90</strong>
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

          <article className="overflow-hidden rounded-[40px] bg-black text-white">
            <div className="flex h-full min-h-[520px] flex-col justify-between p-10">
              <div>
                <span className="text-sm uppercase tracking-[0.45em] text-zinc-500">
                  Campanha Exclusiva
                </span>

                <h3 className="mt-6 text-5xl font-black leading-none">
                  Fashion
                  <br />
                  Weekend
                </h3>
              </div>

              <div>
                <p className="max-w-sm text-zinc-400">
                  Crie banners promocionais modernos para campanhas sazonais da
                  loja.
                </p>

                <button
                  type="button"
                  className="mt-8 rounded-full bg-white px-6 py-3 font-bold text-black transition hover:scale-105"
                >
                  Explorar
                </button>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            <article className="rounded-[34px] bg-white p-8 shadow-sm">
              <span className="text-sm uppercase tracking-[0.35em] text-zinc-400">
                Streetwear
              </span>

              <h3 className="mt-4 text-3xl font-black">
                Nova coleção urbana
              </h3>

              <p className="mt-4 text-zinc-600">
                Estilo minimalista premium para marcas modernas.
              </p>

              <button
                type="button"
                className="mt-6 rounded-full bg-black px-6 py-3 font-bold text-white"
              >
                Ver coleção
              </button>
            </article>

            <article className="rounded-[34px] border border-black/10 bg-[#ece6dd] p-8">
              <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                Tendência
              </span>

              <h3 className="mt-4 text-3xl font-black">Essentials 2026</h3>

              <p className="mt-4 text-zinc-600">
                Peças essenciais para vitrines fashion premium.
              </p>

              <button
                type="button"
                className="mt-6 rounded-full border border-black/10 bg-white px-6 py-3 font-bold"
              >
                Descobrir
              </button>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-10 text-center">
          <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            Instagram
          </span>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Inspirações da comunidade
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
            Área ideal para exibir looks, prova social, campanhas de
            influenciadores e conteúdos gerados pelos clientes.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {["Look 01", "Look 02", "Look 03", "Look 04"].map((item) => (
            <article
              key={item}
              className="group relative flex h-80 items-center justify-center overflow-hidden rounded-[32px] bg-gradient-to-br from-zinc-300 to-zinc-100"
            >
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/40" />

              <div className="relative z-10 text-center">
                <p className="text-sm uppercase tracking-[0.4em] text-zinc-500 group-hover:text-white">
                  MGD Fashion
                </p>

                <h3 className="mt-4 text-3xl font-black group-hover:text-white">
                  {item}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              Dúvidas frequentes
            </span>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Compra simples, segura e moderna.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-zinc-600">
              Seção ideal para reduzir dúvidas dos clientes e aumentar a
              conversão da loja.
            </p>
          </div>

          <div className="grid gap-4">
            {faq.map((question) => (
              <div
                key={question}
                className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm"
              >
                <h3 className="text-xl font-black">{question}</h3>

                <p className="mt-3 text-zinc-600">
                  Resposta editável no painel da loja, permitindo personalização
                  conforme a política comercial do cliente.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-[#111111] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-zinc-500">
              Fashion
            </p>

            <h2 className="mt-3 text-3xl font-black">MGD Fashion</h2>

            <p className="mt-4 text-zinc-400">
              Template profissional para lojas de moda no ecossistema MGD
              Ecommerce.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Categorias</h3>
            <ul className="space-y-3 text-zinc-400">
              <li>Feminino</li>
              <li>Masculino</li>
              <li>Acessórios</li>
              <li>Calçados</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Atendimento</h3>
            <ul className="space-y-3 text-zinc-400">
              <li>Minha conta</li>
              <li>Meus pedidos</li>
              <li>Trocas e devoluções</li>
              <li>Política de entrega</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Loja</h3>
            <ul className="space-y-3 text-zinc-400">
              <li>Sobre a marca</li>
              <li>Novidades</li>
              <li>Campanhas</li>
              <li>Contato</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 px-6 py-6 text-center text-sm text-zinc-500">
          © 2026 MGD Ecommerce — Template Fashion Store.
        </div>
      </footer>
    </main>
  );
}