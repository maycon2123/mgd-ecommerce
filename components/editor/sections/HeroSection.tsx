"use client";

import { useEditor } from "@/hooks/useEditor";

export function HeroSection() {
  const { sections } = useEditor();

  const heroSection = sections.find(
    (section) => section.type === "hero"
  );

  const title =
    heroSection?.content?.title ||
    "Moda moderna";

  const subtitle =
    heroSection?.content?.subtitle ||
    "Estrutura visual profissional para marcas de moda.";

  const buttonText =
    heroSection?.content?.buttonText ||
    "Comprar agora";

  const backgroundColor =
    heroSection?.styles?.backgroundColor ||
    "#e7e1db";

  return (
    <section
      className="rounded-[40px] px-16 py-20"
      style={{
        backgroundColor,
      }}
    >
      <div className="grid grid-cols-2 items-center gap-16">
        <div>
          <div className="mb-8 inline-flex rounded-full bg-black px-6 py-3 text-xs font-black uppercase tracking-[0.4em] text-white">
            Nova coleção
          </div>

          <h1 className="max-w-[700px] text-7xl font-black leading-[0.95] text-black">
            {title}
          </h1>

          <p className="mt-8 max-w-[620px] text-2xl leading-[1.7] text-zinc-600">
            {subtitle}
          </p>

          <div className="mt-12 flex gap-5">
            <button className="rounded-full bg-black px-10 py-5 text-lg font-bold text-white transition hover:scale-[1.03]">
              {buttonText}
            </button>

            <button className="rounded-full bg-white px-10 py-5 text-lg font-bold text-black transition hover:scale-[1.03]">
              Ver coleção
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="flex h-[700px] w-[500px] items-center justify-center rounded-[50px] bg-gradient-to-br from-black via-zinc-900 to-zinc-800 text-center text-7xl font-black text-white shadow-2xl">
            Fashion Campaign
          </div>
        </div>
      </div>
    </section>
  );
}