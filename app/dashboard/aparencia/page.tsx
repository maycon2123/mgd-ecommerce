"use client";

import {
  Palette,
  ImageIcon,
  Type,
  Save,
  Upload,
} from "lucide-react";

export default function AparenciaPage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white">
      <section className="border-b border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              Dashboard
            </p>

            <h1 className="mt-2 text-3xl font-black">
              Aparência da Loja
            </h1>
          </div>

          <button className="flex items-center gap-3 rounded-full bg-white px-6 py-4 font-bold text-black transition hover:scale-[1.02]">
            <Save size={20} />
            Salvar alterações
          </button>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-[420px_1fr]">
        <aside className="space-y-8">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-full bg-white p-4 text-black">
                <Type size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  Identidade
                </h2>

                <p className="text-zinc-500">
                  Nome e slogan da loja.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <label>
                <span className="mb-2 block font-semibold text-zinc-300">
                  Nome da loja
                </span>

                <input
                  type="text"
                  defaultValue="MGD Fashion"
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-white/40"
                />
              </label>

              <label>
                <span className="mb-2 block font-semibold text-zinc-300">
                  Slogan
                </span>

                <input
                  type="text"
                  defaultValue="Moda premium para marcas modernas"
                  className="w-full rounded-2xl border border-white/10 bg-black px-5 py-4 outline-none focus:border-white/40"
                />
              </label>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-full bg-white p-4 text-black">
                <Palette size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  Cores da loja
                </h2>

                <p className="text-zinc-500">
                  Personalização visual.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <label className="block">
                <span className="mb-3 block font-semibold text-zinc-300">
                  Cor principal
                </span>

                <input
                  type="color"
                  defaultValue="#000000"
                  className="h-16 w-full rounded-2xl border border-white/10 bg-black"
                />
              </label>

              <label className="block">
                <span className="mb-3 block font-semibold text-zinc-300">
                  Cor secundária
                </span>

                <input
                  type="color"
                  defaultValue="#e7e3dc"
                  className="h-16 w-full rounded-2xl border border-white/10 bg-black"
                />
              </label>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-full bg-white p-4 text-black">
                <ImageIcon size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  Logo e banner
                </h2>

                <p className="text-zinc-500">
                  Imagens principais da loja.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-dashed border-white/20 bg-black px-5 py-8 transition hover:border-white/40">
                <Upload size={22} />

                Upload da logo
              </button>

              <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-dashed border-white/20 bg-black px-5 py-8 transition hover:border-white/40">
                <Upload size={22} />

                Upload do banner
              </button>
            </div>
          </div>
        </aside>

        <section className="rounded-[40px] border border-white/10 bg-[#e7e3dc] p-10 text-black">
          <div className="rounded-[36px] bg-black p-10 text-white">
            <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
              Preview da loja
            </span>

            <h2 className="mt-6 text-6xl font-black leading-[1]">
              MGD Fashion
            </h2>

            <p className="mt-6 max-w-2xl text-xl text-zinc-400">
              Moda premium para marcas modernas.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-full bg-white px-8 py-4 font-bold text-black">
                Comprar agora
              </button>

              <button className="rounded-full border border-white/10 px-8 py-4 font-bold">
                Nova coleção
              </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-5">
              <div className="rounded-[28px] bg-white/5 p-6">
                <div className="h-40 rounded-[24px] bg-white/10" />

                <h3 className="mt-5 text-2xl font-bold">
                  Produto premium
                </h3>

                <p className="mt-2 text-zinc-400">
                  Área visual para preview.
                </p>
              </div>

              <div className="rounded-[28px] bg-white/5 p-6">
                <div className="h-40 rounded-[24px] bg-white/10" />

                <h3 className="mt-5 text-2xl font-bold">
                  Produto premium
                </h3>

                <p className="mt-2 text-zinc-400">
                  Área visual para preview.
                </p>
              </div>

              <div className="rounded-[28px] bg-white/5 p-6">
                <div className="h-40 rounded-[24px] bg-white/10" />

                <h3 className="mt-5 text-2xl font-bold">
                  Produto premium
                </h3>

                <p className="mt-2 text-zinc-400">
                  Área visual para preview.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}