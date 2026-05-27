import Link from "next/link";
import {
  BarChart3,
  Boxes,
  Brush,
  Image,
  LayoutTemplate,
  Package,
  Settings,
  ShoppingBag,
  Store,
  Users,
} from "lucide-react";

const stats = [
  {
    title: "Produtos cadastrados",
    value: "128",
    icon: Package,
  },
  {
    title: "Pedidos do mês",
    value: "342",
    icon: ShoppingBag,
  },
  {
    title: "Clientes",
    value: "1.284",
    icon: Users,
  },
  {
    title: "Vendas",
    value: "R$ 42.890",
    icon: BarChart3,
  },
];

const quickActions = [
  {
    title: "Editar Aparência",
    description: "Cores, logo, fonte e identidade visual da loja.",
    icon: Brush,
    href: "#",
  },
  {
    title: "Cadastrar Produtos",
    description: "Adicione produtos, preços, estoque e imagens.",
    icon: Boxes,
    href: "#",
  },
  {
    title: "Editar Banners",
    description: "Gerencie banners principais e campanhas promocionais.",
    icon: Image,
    href: "#",
  },
  {
    title: "Escolher Template",
    description: "Selecione o layout ideal para o nicho da loja.",
    icon: LayoutTemplate,
    href: "#",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              Painel do lojista
            </p>

            <h1 className="mt-2 text-3xl font-black">MGD Ecommerce</h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-black"
            >
              Ver site
            </Link>

            <button
              type="button"
              className="rounded-full border border-white/10 bg-white/10 p-3 transition hover:bg-white hover:text-black"
            >
              <Settings size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-[32px] border border-white/10 bg-white/[0.04] p-5">
          <div className="mb-8 rounded-[24px] bg-white p-5 text-black">
            <div className="mb-4 inline-flex rounded-full bg-black p-3 text-white">
              <Store size={22} />
            </div>

            <h2 className="text-xl font-black">Minha Loja</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Template ativo: Fashion Store
            </p>
          </div>

          <nav className="grid gap-2">
            {[
              "Dashboard",
              "Produtos",
              "Pedidos",
              "Clientes",
              "Templates",
              "Banners",
              "Aparência",
              "Configurações",
            ].map((item) => (
              <button
                key={item}
                type="button"
                className="rounded-2xl px-4 py-3 text-left font-semibold text-zinc-400 transition hover:bg-white/10 hover:text-white"
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        <div className="space-y-8">
          <section className="rounded-[36px] border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-8">
            <div className="max-w-3xl">
              <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                Visão geral
              </span>

              <h2 className="mt-4 text-4xl font-black md:text-5xl">
                Controle sua loja, produtos e aparência em um só lugar.
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                Este será o painel onde o lojista editará templates, banners,
                produtos, categorias, cores e informações comerciais da loja.
              </p>
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6"
                >
                  <div className="mb-5 inline-flex rounded-full bg-white p-3 text-black">
                    <Icon size={22} />
                  </div>

                  <p className="text-sm text-zinc-500">{stat.title}</p>
                  <strong className="mt-2 block text-3xl font-black">
                    {stat.value}
                  </strong>
                </div>
              );
            })}
          </section>

          <section>
            <div className="mb-6 flex items-end justify-between">
              <div>
                <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
                  Ações rápidas
                </span>

                <h2 className="mt-2 text-3xl font-black">
                  Comece editando sua loja
                </h2>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {quickActions.map((action) => {
                const Icon = action.icon;

                return (
                  <Link
                    key={action.title}
                    href={action.href}
                    className="group rounded-[30px] border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:bg-white/10"
                  >
                    <div className="mb-5 inline-flex rounded-full bg-white p-4 text-black">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-2xl font-black">{action.title}</h3>

                    <p className="mt-3 text-zinc-400">
                      {action.description}
                    </p>

                    <span className="mt-5 inline-block font-bold text-white transition group-hover:translate-x-1">
                      Acessar →
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}