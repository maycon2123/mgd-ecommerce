"use client";

import { EditableText } from "@/components/editor/EditableText";
import { useEditor } from "@/hooks/useEditor";

export function CategoriesSection() {
  const { sections, previewDevice } = useEditor();

  const section = sections.find(
    (item) => item.type === "categories"
  );

  const sectionId =
    section?.id || "categories-section";

  const isDesktop = previewDevice === "desktop";
  const isTablet = previewDevice === "tablet";
  const isMobile = previewDevice === "mobile";

  const backgroundColor =
    section?.styles?.backgroundColor || "#edf3ff";

  const paddingTop =
    section?.styles?.paddingTop ?? 80;

  const paddingBottom =
    section?.styles?.paddingBottom ?? 80;

  const borderRadius =
    section?.styles?.borderRadius ?? 40;

  return (
    <section
      className={`overflow-hidden ${
        isMobile
          ? "px-3"
          : isTablet
          ? "px-8"
          : "px-16"
      }`}
      style={{
        backgroundColor,
        paddingTop: isMobile
          ? Math.min(paddingTop, 40)
          : paddingTop,

        paddingBottom: isMobile
          ? Math.min(paddingBottom, 40)
          : paddingBottom,

        borderRadius,
      }}
    >
      <div className="mx-auto max-w-[1400px]">
        <div
          className={
            isMobile ? "text-center" : "text-center"
          }
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[#7d7aa5]">
            Categorias
          </span>

          <EditableText
            sectionId={sectionId}
            field="title"
            initialValue="Explore por estilo"
            className={`mt-4 break-words font-black leading-tight text-black ${
              isMobile
                ? "text-4xl"
                : isTablet
                ? "text-6xl"
                : "text-7xl"
            }`}
          />

          <EditableText
            sectionId={sectionId}
            field="subtitle"
            initialValue="Estrutura modular para categorias principais da loja virtual."
            multiline
            className={`mx-auto mt-6 max-w-[800px] leading-relaxed text-[#4f566b] ${
              isMobile
                ? "text-sm"
                : isTablet
                ? "text-lg"
                : "text-xl"
            }`}
          />
        </div>

        <div
          className={`mt-14 grid gap-6 ${
            isMobile
              ? "grid-cols-1"
              : isTablet
              ? "grid-cols-2"
              : "grid-cols-4"
          }`}
        >
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-[34px] bg-white shadow-xl transition hover:-translate-y-1"
            >
              <div className="h-[240px] bg-[#e8e8e8]" />

              <div className="flex min-h-[260px] flex-col p-8">
                <span className="text-sm uppercase tracking-[0.4em] text-[#7d7aa5]">
                  Fashion
                </span>

                <EditableText
                  sectionId={sectionId}
                  field={`card-title-${item}`}
                  initialValue={
                    item === 1
                      ? "Feminino"
                      : item === 2
                      ? "Masculino"
                      : item === 3
                      ? "Acessórios"
                      : "Coleções"
                  }
                  className={`mt-5 break-words font-black leading-tight text-black ${
                    isMobile
                      ? "text-3xl"
                      : "text-4xl"
                  }`}
                />

                <EditableText
                  sectionId={sectionId}
                  field={`card-subtitle-${item}`}
                  initialValue="Categoria visual premium."
                  multiline
                  className="mt-5 text-base leading-relaxed text-[#4f566b]"
                />

                <button
                  type="button"
                  className="mt-auto rounded-full bg-black px-6 py-4 font-bold text-white"
                >
                  Explorar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}