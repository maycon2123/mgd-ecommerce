"use client";

import { EditableText } from "../EditableText";
import { useEditor } from "@/hooks/useEditor";

export function HeroSection() {
  const { selectedSection, setSelectedSection } = useEditor();

  const active = selectedSection === "hero";

  return (
    <section
      onClick={() => setSelectedSection("hero")}
      className={`
        relative grid min-h-screen grid-cols-2 gap-20 overflow-hidden rounded-[40px]
        border transition-all duration-300

        ${
          active
            ? "border-blue-500 shadow-[0_0_0_4px_rgba(59,130,246,0.15)]"
            : "border-transparent"
        }

        bg-[#ebe7e1] px-20 py-20
      `}
    >
      <div className="flex flex-col justify-center">
        <div className="mb-6 inline-flex w-fit rounded-full bg-black px-6 py-3 text-sm font-bold uppercase tracking-[0.3em] text-white">
          Nova coleção
        </div>

        <EditableText
          initialValue="Moda moderna e premium."
          className="max-w-[700px] text-7xl font-black leading-[0.95] tracking-[-0.05em] text-black"
        />

        <EditableText
          multiline
          initialValue="Estrutura visual profissional para marcas de moda, coleções, campanhas e ecommerce premium."
          className="mt-8 max-w-[600px] text-2xl leading-relaxed text-zinc-600"
        />

        <div className="mt-10 flex items-center gap-5">
          <button className="rounded-full bg-black px-10 py-5 text-lg font-bold text-white transition hover:scale-[1.03]">
            Comprar agora
          </button>

          <button className="rounded-full bg-white px-10 py-5 text-lg font-bold text-black transition hover:scale-[1.03]">
            Ver coleção
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex h-[700px] w-[520px] items-center justify-center rounded-[40px] border border-white/10 bg-gradient-to-br from-[#151515] to-[#2c2c38]">
          <EditableText
            multiline
            initialValue="Fashion Campaign"
            className="text-center text-7xl font-black leading-[0.9] text-white"
          />
        </div>
      </div>

      {active && (
        <div className="absolute right-6 top-6 rounded-full bg-blue-500 px-5 py-2 text-sm font-bold text-white shadow-2xl">
          Hero selecionado
        </div>
      )}
    </section>
  );
}