"use client";

import { EditableText } from "@/components/editor/EditableText";
import { useEditor } from "@/hooks/useEditor";

type CategoryCard = {
  titleField: string;
  textField: string;
};

const categoryCards: CategoryCard[] = [
  { titleField: "category1Title", textField: "category1Text" },
  { titleField: "category2Title", textField: "category2Text" },
  { titleField: "category3Title", textField: "category3Text" },
  { titleField: "category4Title", textField: "category4Text" },
];

export function CategoriesSection() {
  const { sections } = useEditor();

  const section = sections.find((item) => item.type === "categories");

  const sectionId = section?.id || "categories-section";

  const title = section?.content?.title || "Explore por estilo";

  const subtitle =
    section?.content?.subtitle ||
    "Estrutura modular para categorias principais da loja virtual.";

  const buttonText = section?.content?.buttonText || "Explorar";

  const backgroundColor = section?.styles?.backgroundColor || "#eef4ff";

  return (
    <section
      className="rounded-[40px] px-16 py-20"
      style={{ backgroundColor }}
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#7b7691]">
          Categorias
        </p>

        <EditableText
          sectionId={sectionId}
          field="title"
          initialValue={title}
          className="mx-auto text-center text-6xl font-black leading-tight text-black"
        />

        <EditableText
          sectionId={sectionId}
          field="subtitle"
          initialValue={subtitle}
          multiline
          className="mx-auto mt-6 max-w-3xl text-center text-2xl leading-[1.6] text-zinc-600"
        />
      </div>

      <div className="mt-16 grid grid-cols-4 gap-8">
        {categoryCards.map((card, index) => {
          const categoryTitle =
            section?.content?.[card.titleField] || `Categoria ${index + 1}`;

          const categoryText =
            section?.content?.[card.textField] ||
            "Categoria visual para navegação do ecommerce.";

          return (
            <div
              key={card.titleField}
              className="flex min-h-[560px] flex-col overflow-hidden rounded-[32px] bg-white shadow-xl"
            >
              <div className="h-[260px] shrink-0 bg-zinc-200" />

              <div className="flex flex-1 flex-col p-8">
                <EditableText
                  sectionId={sectionId}
                  field={card.titleField}
                  initialValue={categoryTitle}
                  className="text-3xl font-black leading-tight text-black"
                />

                <EditableText
                  sectionId={sectionId}
                  field={card.textField}
                  initialValue={categoryText}
                  multiline
                  className="mt-5 text-lg leading-8 text-zinc-600"
                />

                <div className="mt-auto pt-8">
                  <div className="rounded-full bg-black px-7 py-4 text-center font-bold text-white transition hover:scale-[1.03]">
                    <EditableText
                      sectionId={sectionId}
                      field="buttonText"
                      initialValue={buttonText}
                      className="w-full bg-transparent text-center font-bold text-white outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}