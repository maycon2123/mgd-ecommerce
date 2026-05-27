import Link from "next/link";
import {
  Plus,
  Search,
  SlidersHorizontal,
  Package,
  Pencil,
  Trash2,
  Eye,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "Jaqueta Premium",
    category: "Moda",
    price: "R$ 289,90",
    stock: 12,
    status: "Ativo",
  },
  {
    id: 2,
    name: "Tênis Urban",
    category: "Calçados",
    price: "R$ 399,90",
    stock: 8,
    status: "Ativo",
  },
  {
    id: 3,
    name: "Bolsa Feminina",
    category: "Acessórios",
    price: "R$ 159,90",
    stock: 20,
    status: "Destaque",
  },
];

export default function ProdutosPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              Dashboard
            </p>

            <h1 className="mt-2 text-3xl font-black">Gerenciar Produtos</h1>
          </div>

          <Link
            href="/dashboard/produtos/novo"
            className="flex items-center gap-3 rounded-full bg-white px-6 py-4 font-bold text-black transition hover:scale-[1.02]"
          >
            <Plus size={20} />
            Novo produto
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-1 items-center gap-3 rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4">
            <Search size={20} className="text-zinc-500" />

            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full bg-transparent outline-none placeholder:text-zinc-500"
            />
          </div>

          <button
            type="button"
            className="flex items-center gap-3 rounded-[24px] border border-white/10 bg-white/[0.04] px-5 py-4 font-semibold transition hover:bg-white/10"
          >
            <SlidersHorizontal size={20} />
            Filtros
          </button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:bg-white/[0.07]"
            >
              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-zinc-900 to-black">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-black">
                  <Package size={34} />
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-zinc-500">ID #{product.id}</p>

                    <h2 className="mt-1 text-2xl font-black">
                      {product.name}
                    </h2>
                  </div>

                  <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-bold text-green-400">
                    {product.status}
                  </span>
                </div>

                <div className="grid gap-3 text-sm">
                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-zinc-500">Categoria</span>
                    <strong>{product.category}</strong>
                  </div>

                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-zinc-500">Preço</span>
                    <strong>{product.price}</strong>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-zinc-500">Estoque</span>
                    <strong
                      className={
                        product.stock <= 5 ? "text-red-400" : "text-green-400"
                      }
                    >
                      {product.stock} un
                    </strong>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 transition hover:bg-white hover:text-black"
                  >
                    <Eye className="mx-auto" size={18} />
                  </button>

                  <button
                    type="button"
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 transition hover:bg-white hover:text-black"
                  >
                    <Pencil className="mx-auto" size={18} />
                  </button>

                  <button
                    type="button"
                    className="rounded-2xl border border-red-500/20 bg-red-500/10 p-3 text-red-400 transition hover:bg-red-500 hover:text-white"
                  >
                    <Trash2 className="mx-auto" size={18} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}