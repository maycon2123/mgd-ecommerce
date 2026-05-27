import Link from "next/link";
import {
  ArrowLeft,
  Package,
  Save,
  Tag,
  Boxes,
  DollarSign,
} from "lucide-react";

import { ProductImageUpload } from "@/components/ProductImageUpload";

export default function NovoProdutoPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div>
            <Link
              href="/dashboard/produtos"
              className="mb-3 flex items-center gap-2 text-sm font-semibold text-zinc-400 transition hover:text-white"
            >
              <ArrowLeft size={18} />
              Voltar para produtos
            </Link>

            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              Produtos
            </p>

            <h1 className="mt-2 text-3xl font-black">Novo Produto</h1>
          </div>

          <button
            type="button"
            className="flex items-center gap-3 rounded-full bg-white px-6 py-4 font-bold text-black transition hover:scale-[1.02]"
          >
            <Save size={20} />
            Salvar produto
          </button>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[1fr_380px]">
        <form className="space-y-8">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-full bg-white p-4 text-black">
                <Package size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  Informações principais
                </h2>

                <p className="text-zinc-500">
                  Cadastre os dados básicos do produto.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="md:col-span-2">
                <span className="mb-2 block font-semibold text-zinc-300">
                  Nome do produto
                </span>

                <input
                  type="text"
                  placeholder="Ex: Camiseta Premium"
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition placeholder:text-zinc-600 focus:border-white/40"
                />
              </label>

              <label>
                <span className="mb-2 block font-semibold text-zinc-300">
                  Categoria
                </span>

                <input
                  type="text"
                  placeholder="Ex: Moda"
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition placeholder:text-zinc-600 focus:border-white/40"
                />
              </label>

              <label>
                <span className="mb-2 block font-semibold text-zinc-300">
                  SKU / Código
                </span>

                <input
                  type="text"
                  placeholder="Ex: MGD-001"
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition placeholder:text-zinc-600 focus:border-white/40"
                />
              </label>

              <label className="md:col-span-2">
                <span className="mb-2 block font-semibold text-zinc-300">
                  Descrição
                </span>

                <textarea
                  rows={5}
                  placeholder="Descreva o produto, benefícios, composição e detalhes importantes..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition placeholder:text-zinc-600 focus:border-white/40"
                />
              </label>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-full bg-white p-4 text-black">
                <DollarSign size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  Preço e estoque
                </h2>

                <p className="text-zinc-500">
                  Defina preço, desconto e quantidade disponível.
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              <label>
                <span className="mb-2 block font-semibold text-zinc-300">
                  Preço de venda
                </span>

                <input
                  type="text"
                  placeholder="R$ 0,00"
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition placeholder:text-zinc-600 focus:border-white/40"
                />
              </label>

              <label>
                <span className="mb-2 block font-semibold text-zinc-300">
                  Preço promocional
                </span>

                <input
                  type="text"
                  placeholder="R$ 0,00"
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition placeholder:text-zinc-600 focus:border-white/40"
                />
              </label>

              <label>
                <span className="mb-2 block font-semibold text-zinc-300">
                  Estoque
                </span>

                <input
                  type="number"
                  placeholder="0"
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none transition placeholder:text-zinc-600 focus:border-white/40"
                />
              </label>
            </div>
          </div>
        </form>

        <aside className="space-y-8">
          <ProductImageUpload />

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-full bg-white p-4 text-black">
                <Tag size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-black">Publicação</h2>

                <p className="text-zinc-500">
                  Status do produto.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-black px-5 py-4">
                <span className="font-semibold">Produto ativo</span>

                <input type="checkbox" defaultChecked />
              </label>

              <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-black px-5 py-4">
                <span className="font-semibold">
                  Produto em destaque
                </span>

                <input type="checkbox" />
              </label>

              <label className="flex items-center justify-between rounded-2xl border border-white/10 bg-black px-5 py-4">
                <span className="font-semibold">
                  Mostrar promoção
                </span>

                <input type="checkbox" />
              </label>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <div className="mb-4 inline-flex rounded-full bg-white p-4 text-black">
              <Boxes size={24} />
            </div>

            <h2 className="text-2xl font-black">Resumo</h2>

            <p className="mt-3 text-zinc-500">
              Depois vamos conectar esse cadastro ao Supabase para salvar
              produtos reais por loja.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}