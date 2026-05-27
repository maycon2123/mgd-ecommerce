"use client";

import { Package } from "lucide-react";
import { EditableText } from "@/components/editor/EditableText";
import { useEditor } from "@/hooks/useEditor";

export function ProductsSection() {
  const { sections } = useEditor();

  const section = sections.find((item) => item.type === "products");

  const sectionId = section?.id || "products-section";

  const title = section?.content?.title || "Produtos em destaque";

  const subtitle =
    section?.content?.subtitle || "Seleção especial para sua loja.";

  const buttonText =
    section?.content?.buttonText || "Comprar";

  const backgroundColor =
    section?.styles?.backgroundColor || "#f8fafc";

  const products = [1, 2, 3];

  return (
    <section
      className="rounded-[40px] px-16 py-20"
      style={{ backgroundColor }}
    >
      <div className="mx-auto mb-14 max-w-5xl text-center">
        <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#7b7691]">
          Produtos
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

      <div className="grid grid-cols-3 gap-10">
        {products.map((item) => {
          const productTitle =
            section?.content?.[`product${item}Title`] ||
            "Produto Premium";

          const productDescription =
            section?.content?.[`product${item}Description`] ||
            "Área visual para preview dos produtos.";

          const productPrice =
            section?.content?.[`product${item}Price`] ||
            "R$ 199,90";

          return (
            <article
              key={item}
              className="overflow-hidden rounded-[36px] bg-white shadow-xl"
            >
              <div className="flex h-[260px] items-center justify-center bg-zinc-200">
                <div className="flex h-20 w-20 rotate-6 items-center justify-center rounded-[24px] bg-black text-white shadow-xl">
                  <Package size={34} />
                </div>
              </div>

              <div className="p-8">
                <p className="text-sm uppercase tracking-[0.35em] text-[#7b7691]">
                  Fashion
                </p>

                <EditableText
                  sectionId={sectionId}
                  field={`product${item}Title`}
                  initialValue={productTitle}
                  className="mt-6 text-3xl font-black leading-tight text-black"
                />

                <EditableText
                  sectionId={sectionId}
                  field={`product${item}Description`}
                  initialValue={productDescription}
                  multiline
                  className="mt-5 text-lg leading-8 text-zinc-600"
                />

                <div className="mt-8 flex flex-col gap-5">
                  <EditableText
                    sectionId={sectionId}
                    field={`product${item}Price`}
                    initialValue={productPrice}
                    className="w-full text-4xl font-black leading-none text-black"
                  />

                  <div className="w-full rounded-full bg-black px-6 py-4 text-center font-bold text-white transition hover:scale-[1.03]">
                    <EditableText
                      sectionId={sectionId}
                      field="buttonText"
                      initialValue={buttonText}
                      className="w-full bg-transparent text-center font-bold text-white outline-none"
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