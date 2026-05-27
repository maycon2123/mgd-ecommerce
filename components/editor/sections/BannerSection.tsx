"use client";

import { EditableText } from "@/components/editor/EditableText";
import { useEditor } from "@/hooks/useEditor";

export function BannerSection() {
  const { sections } = useEditor();

  const section = sections.find((item) => item.type === "banner");

  const sectionId = section?.id || "banner-section";

  const title = section?.content?.title || "Fashion Weekend";

  const subtitle =
    section?.content?.subtitle ||
    "Crie banners promocionais modernos para campanhas sazonais, descontos e lançamentos da loja.";

  const buttonText =
    section?.content?.buttonText || "Explorar campanha";

  const backgroundColor =
    section?.styles?.backgroundColor || "#020617";

  return (
    <section
      className="rounded-[42px] px-16 py-20 text-white"
      style={{ backgroundColor }}
    >
      <div className="max-w-4xl">
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-zinc-400">
          Campanha especial
        </p>

        <EditableText
          sectionId={sectionId}
          field="title"
          initialValue={title}
          className="text-7xl font-black leading-tight text-white"
        />

        <EditableText
          sectionId={sectionId}
          field="subtitle"
          initialValue={subtitle}
          multiline
          className="mt-8 max-w-3xl text-2xl leading-[1.7] text-zinc-300"
        />

        <div className="mt-10">
          <EditableText
            sectionId={sectionId}
            field="buttonText"
            initialValue={buttonText}
            className="inline-flex rounded-full bg-white px-10 py-5 text-lg font-bold text-black"
          />
        </div>
      </div>
    </section>
  );
}