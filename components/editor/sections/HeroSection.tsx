"use client";

import { EditableText } from "@/components/editor/EditableText";
import { useEditor } from "@/hooks/useEditor";

const defaultHeroImage =
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop";

export function HeroSection() {
  const { sections, previewDevice } = useEditor();

  const section = sections.find((item) => item.type === "hero");
  const sectionId = section?.id || "hero-section";

  const isDesktop = previewDevice === "desktop";
  const isTablet = previewDevice === "tablet";
  const isMobile = previewDevice === "mobile";

  const title = section?.content?.title || "Moda moderna";
  const subtitle =
    section?.content?.subtitle ||
    "Estrutura visual profissional para marcas de moda.";
  const buttonText = section?.content?.buttonText || "Comprar agora";
  const image = section?.content?.image || defaultHeroImage;

  const backgroundColor = section?.styles?.backgroundColor || "#e7e1db";
  const paddingTop = section?.styles?.paddingTop ?? 80;
  const paddingBottom = section?.styles?.paddingBottom ?? 80;
  const borderRadius = section?.styles?.borderRadius ?? 40;
  const textAlign = section?.styles?.textAlign || "left";

  return (
    <section
      className={`overflow-hidden ${
        isMobile ? "px-3" : isTablet ? "px-8" : "px-16"
      }`}
      style={{
        backgroundColor,
        paddingTop: isMobile ? Math.min(paddingTop, 40) : paddingTop,
        paddingBottom: isMobile ? Math.min(paddingBottom, 40) : paddingBottom,
        borderRadius,
        textAlign,
      }}
    >
      <div
        className={`grid items-center ${
          isDesktop ? "grid-cols-2 gap-14" : "grid-cols-1 gap-8"
        }`}
      >
        <div className={isDesktop ? "" : "text-center"}>
          <div
            className={`mb-5 inline-flex rounded-full bg-black font-black uppercase text-white ${
              isMobile
                ? "px-4 py-2 text-[10px] tracking-[0.2em]"
                : "px-5 py-3 text-xs tracking-[0.3em]"
            }`}
          >
            Nova coleção
          </div>

          <EditableText
            sectionId={sectionId}
            field="title"
            initialValue={title}
            className={`mx-auto max-w-full break-words font-black leading-[1.1] text-black ${
              isMobile
                ? "text-center text-[30px]"
                : isTablet
                ? "max-w-[640px] text-center text-[54px]"
                : "text-[72px]"
            }`}
          />

          <EditableText
            sectionId={sectionId}
            field="subtitle"
            initialValue={subtitle}
            multiline
            className={`mt-5 max-w-full leading-relaxed text-zinc-600 ${
              isMobile
                ? "text-center text-sm"
                : isTablet
                ? "mx-auto max-w-[620px] text-center text-lg"
                : "max-w-[560px] text-xl"
            }`}
          />

          <div
            className={`mt-7 flex gap-3 ${
              isMobile ? "flex-col" : isDesktop ? "flex-row" : "justify-center"
            }`}
          >
            <div className="rounded-full bg-black px-6 py-4 text-center font-bold text-white">
              <EditableText
                sectionId={sectionId}
                field="buttonText"
                initialValue={buttonText}
                className="w-full bg-transparent text-center font-bold text-white outline-none"
              />
            </div>

            <button
              type="button"
              className="rounded-full bg-white px-6 py-4 font-bold text-black"
            >
              Ver coleção
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div
            className={`overflow-hidden rounded-[34px] shadow-2xl ${
              isMobile
                ? "h-[180px] w-full"
                : isTablet
                ? "h-[420px] w-full max-w-[520px]"
                : "h-[620px] w-[480px]"
            }`}
          >
            <img
              src={image}
              alt="Imagem principal"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}