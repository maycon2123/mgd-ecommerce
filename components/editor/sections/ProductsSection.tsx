"use client";

import { Package } from "lucide-react";
import { EditableText } from "@/components/editor/EditableText";
import { useEditor } from "@/hooks/useEditor";

export function ProductsSection() {
  const { sections, previewDevice } = useEditor();

  const section = sections.find((item) => item.type === "products");
  const sectionId = section?.id || "products-section";

  const isMobile = previewDevice === "mobile";
  const isTablet = previewDevice === "tablet";

  const title = section?.content?.title || "Produtos em destaque";
  const subtitle =
    section?.content?.subtitle || "Seleção especial para sua loja.";
  const buttonText = section?.content?.buttonText || "Comprar";
  const backgroundColor = section?.styles?.backgroundColor || "#f8fafc";

  const gridClass = isMobile
    ? "grid-cols-1"
    : isTablet
    ? "grid-cols-2"
    : "grid-cols-3";

  const products = [1, 2, 3];

  return (
    <section
      className={`rounded-[40px] ${
        isMobile ? "px-5 py-10" : isTablet ? "px-8 py-14" : "px-16 py-20"
      }`}
      style={{ backgroundColor }}
    >
      <div className="mx-auto mb-14 max-w-5xl text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#7b7691]">
          Produtos
        </p>

        <EditableText
          sectionId={sectionId}
          field="title"
          initialValue={title}
          className={`mx-auto max-w-full break-words text-center font-black leading-tight text-black ${
            isMobile ? "text-4xl" : isTablet ? "text-5xl" : "text-6xl"
          }`}
        />

        <EditableText
          sectionId={sectionId}
          field="subtitle"
          initialValue={subtitle}
          multiline
          className={`mx-auto mt-6 max-w-3xl text-center leading-relaxed text-zinc-600 ${
            isMobile ? "text-base" : isTablet ? "text-xl" : "text-2xl"
          }`}
        />
      </div>

      <div className={`grid gap-8 ${gridClass}`}>
        {products.map((item) => {
          const productTitle =
            section?.content?.[`product${item}Title`] || "Produto Premium";

          const productDescription =
            section?.content?.[`product${item}Description`] ||
            "Área visual para preview dos produtos.";

          const productPrice =
            section?.content?.[`product${item}Price`] || "R$ 199,90";

          return (
            <article
              key={item}
              className="flex min-h-[520px] flex-col overflow-hidden rounded-[34px] bg-white shadow-xl"
            >
              <div className="flex h-[230px] shrink-0 items-center justify-center bg-zinc-200">
                <div className="flex h-20 w-20 rotate-6 items-center justify-center rounded-[24px] bg-black text-white shadow-xl">
                  <Package size={34} />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <p className="text-xs uppercase tracking-[0.35em] text-[#7b7691]">
                  Fashion
                </p>

                <EditableText
                  sectionId={sectionId}
                  field={`product${item}Title`}
                  initialValue={productTitle}
                  className="mt-6 break-words text-2xl font-black leading-tight text-black"
                />

                <EditableText
                  sectionId={sectionId}
                  field={`product${item}Description`}
                  initialValue={productDescription}
                  multiline
                  className="mt-5 text-base leading-relaxed text-zinc-600"
                />

                <div className="mt-auto pt-8">
                  <EditableText
                    sectionId={sectionId}
                    field={`product${item}Price`}
                    initialValue={productPrice}
                    className="w-full break-words text-3xl font-black leading-none text-black"
                  />

                  <div className="mt-6 rounded-full bg-black px-5 py-4 text-center font-bold text-white">
                    <EditableText
                      sectionId={sectionId}
                      field="buttonText"
                      initialValue={buttonText}
                      className="w-full bg-transparent text-center text-xs font-bold text-white outline-none"
                    />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}