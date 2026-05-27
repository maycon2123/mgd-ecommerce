"use client";

import { Package } from "lucide-react";
import { EditableText } from "../EditableText";
import { useEditor } from "@/hooks/useEditor";

export function ProductsSection() {
  const { selectedSection, setSelectedSection } = useEditor();

  const active = selectedSection === "products";

  return (
    <section
      onClick={() => setSelectedSection("products")}
      className={`relative rounded-[40px] border bg-[#f7f7f7] px-10 py-14 transition-all duration-300 ${
        active
          ? "border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,0.25)]"
          : "border-transparent"
      }`}
    >
      <div className="mb-10 flex items-start justify-between">
        <div>
          <EditableText
            initialValue="PRODUTOS"
            className="text-sm uppercase tracking-[0.5em] text-zinc-500"
          />

          <EditableText
            initialValue="Produtos em destaque"
            className="mt-5 text-6xl font-black text-black"
          />
        </div>

        <div className="flex flex-col items-end gap-4">
          {active && (
            <div className="rounded-full bg-blue-500 px-5 py-2 text-sm font-bold text-white">
              Produtos selecionado
            </div>
          )}

          <button className="rounded-full bg-black px-8 py-4 font-bold text-white">
            Ver todos
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="group overflow-hidden rounded-[36px] border border-black/5 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)]"
          >
            <div className="relative flex h-[340px] items-center justify-center overflow-hidden bg-[#ececec]">
              <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-black text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Package size={34} />
              </div>
            </div>

            <div className="space-y-5 p-8">
              <EditableText
                initialValue="FASHION"
                className="text-sm uppercase tracking-[0.5em] text-zinc-500"
              />

              <EditableText
                initialValue="Produto Premium"
                className="text-3xl font-black text-black"
              />

              <EditableText
                multiline
                initialValue="Área visual para preview dos produtos da loja."
                className="text-lg leading-relaxed text-zinc-600"
              />

              <div className="flex items-center justify-between gap-4 pt-2">
                <EditableText
                  initialValue="R$ 289,90"
                  className="text-5xl font-black text-black"
                />

                <button className="rounded-full bg-black px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-800">
                  Comprar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}