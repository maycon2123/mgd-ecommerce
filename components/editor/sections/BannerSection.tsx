"use client";

import { EditableText } from "@/components/editor/EditableText";
import { useEditor } from "@/hooks/useEditor";

export function BannerSection() {
  const { sections, previewDevice } = useEditor();

  const section = sections.find((item) => item.type === "banner");
  const sectionId = section?.id || "banner-section";

  const isMobile = previewDevice === "mobile";
  const isTablet = previewDevice === "tablet";

  const title = section?.content?.title || "Fashion Weekend";
  const subtitle =
    section?.content?.subtitle ||
    "Crie banners promocionais modernos para campanhas sazonais, descontos e lançamentos da loja.";
  const buttonText = section?.content?.buttonText || "Explorar campanha";
  const backgroundColor = section?.styles?.backgroundColor || "#020617";

  return (
    <section
      className={`rounded-[40px] text-white ${
        isMobile ? "px-5 py-10" : isTablet ? "px-8 py-14" : "px-16 py-20"
      }`}
      style={{ backgroundColor }}
    >
      <div className="mx-auto max-w-4xl">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-zinc-400">
          Campanha especial
        </p>

        <EditableText
          sectionId={sectionId}
          field="title"
          initialValue={title}
          className={`max-w-full break-words font-black leading-tight text-white ${
            isMobile ? "text-4xl" : isTablet ? "text-5xl" : "text-7xl"
          }`}
        />

        <EditableText
          sectionId={sectionId}
          field="subtitle"
          initialValue={subtitle}
          multiline
          className={`mt-6 max-w-full leading-relaxed text-zinc-300 ${
            isMobile ? "text-base" : isTablet ? "text-xl" : "text-2xl"
          }`}
        />

        <div className="mt-8">
          <div className="rounded-full bg-white px-5 py-4 text-center font-bold text-black">
            <EditableText
              sectionId={sectionId}
              field="buttonText"
              initialValue={buttonText}
              className="w-full bg-transparent text-center text-xs font-bold text-black outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}