"use client";

import { EditableText } from "@/components/editor/EditableText";
import { useEditor } from "@/hooks/useEditor";

const defaultHeroImage =
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop";

export function HeroSection() {
  const { sections } = useEditor();

  const heroSection = sections.find((section) => section.type === "hero");

  const sectionId = heroSection?.id || "hero-section";

  const title = heroSection?.content?.title || "Moda moderna";

  const subtitle =
    heroSection?.content?.subtitle ||
    "Estrutura visual profissional para marcas de moda.";

  const buttonText = heroSection?.content?.buttonText || "Comprar agora";

  const image = heroSection?.content?.image || defaultHeroImage;

  const backgroundColor =
    heroSection?.styles?.backgroundColor || "#e7e1db";

  return (
    <section
      className="rounded-[40px] px-16 py-20"
      style={{ backgroundColor }}
    >
      <div className="grid grid-cols-2 items-center gap-16">
        <div>
          <div className="mb-8 inline-flex rounded-full bg-black px-6 py-3 text-xs font-black uppercase tracking-[0.4em] text-white">
            Nova coleção
          </div>

          <EditableText
            sectionId={sectionId}
            field="title"
            initialValue={title}
            className="max-w-[700px] text-7xl font-black leading-[0.95] text-black"
          />

          <EditableText
            sectionId={sectionId}
            field="subtitle"
            initialValue={subtitle}
            multiline
            className="mt-8 max-w-[620px] text-2xl leading-[1.7] text-zinc-600"
          />

          <div className="mt-12 flex gap-5">
            <EditableText
              sectionId={sectionId}
              field="buttonText"
              initialValue={buttonText}
              className="rounded-full bg-black px-10 py-5 text-center text-lg font-bold text-white transition hover:scale-[1.03]"
            />

            <button className="rounded-full bg-white px-10 py-5 text-lg font-bold text-black transition hover:scale-[1.03]">
              Ver coleção
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <div className="h-[700px] w-[500px] overflow-hidden rounded-[50px] shadow-2xl">
            <img
              src={image}
              alt="Imagem principal da seção Hero"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}