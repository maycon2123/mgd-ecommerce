"use client";

import { EditableText } from "@/components/editor/EditableText";
import { useEditor } from "@/hooks/useEditor";

const faqItems = [
  { question: "faqQuestion1", answer: "faqAnswer1" },
  { question: "faqQuestion2", answer: "faqAnswer2" },
  { question: "faqQuestion3", answer: "faqAnswer3" },
];

export function FaqSection() {
  const { sections, previewDevice } = useEditor();

  const section = sections.find((item) => item.type === "faq");
  const sectionId = section?.id || "faq-section";

  const isMobile = previewDevice === "mobile";
  const isTablet = previewDevice === "tablet";

  const title = section?.content?.title || "Perguntas frequentes";
  const subtitle =
    section?.content?.subtitle ||
    "Tire as principais dúvidas dos seus clientes.";

  return (
    <section
      className={`rounded-[40px] bg-[#f3f3f3] ${
        isMobile ? "px-5 py-10" : isTablet ? "px-8 py-14" : "px-16 py-24"
      }`}
    >
      <div
        className={`grid ${
          isMobile
            ? "grid-cols-1 gap-10"
            : isTablet
            ? "grid-cols-1 gap-12"
            : "grid-cols-2 gap-16"
        }`}
      >
        <div className={isMobile ? "text-center" : ""}>
          <span className="mb-6 block text-xs uppercase tracking-[0.4em] text-[#7d7aa5]">
            Dúvidas frequentes
          </span>

          <EditableText
            sectionId={sectionId}
            field="title"
            initialValue={title}
            multiline
            className={`max-w-full break-words font-black leading-tight text-black ${
              isMobile ? "text-4xl" : isTablet ? "text-5xl" : "text-7xl"
            }`}
          />

          <EditableText
            sectionId={sectionId}
            field="subtitle"
            initialValue={subtitle}
            multiline
            className={`mt-6 max-w-full leading-relaxed text-[#4f566b] ${
              isMobile ? "text-base" : "text-lg"
            }`}
          />
        </div>

        <div className="flex flex-col gap-6">
          {faqItems.map((item, index) => {
            const question =
              section?.content?.[item.question] ||
              [
                "Como funciona o prazo de entrega?",
                "Posso trocar ou devolver uma peça?",
                "A loja aceita Pix e cartão?",
              ][index];

            const answer =
              section?.content?.[item.answer] ||
              "Resposta editável diretamente pelo editor visual da loja.";

            return (
              <div
                key={item.question}
                className={`rounded-[30px] bg-white shadow-lg ${
                  isMobile ? "p-6" : "p-8"
                }`}
              >
                <EditableText
                  sectionId={sectionId}
                  field={item.question}
                  initialValue={question}
                  multiline
                  className={`max-w-full break-words font-black leading-tight text-black ${
                    isMobile ? "text-2xl" : "text-3xl"
                  }`}
                />

                <EditableText
                  sectionId={sectionId}
                  field={item.answer}
                  initialValue={answer}
                  multiline
                  className={`mt-5 max-w-full leading-relaxed text-[#4f566b] ${
                    isMobile ? "text-base" : "text-lg"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}