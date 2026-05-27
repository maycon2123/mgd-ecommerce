"use client";

import { EditableText } from "@/components/editor/EditableText";
import { useEditor } from "@/hooks/useEditor";

const faqItems = [
  { question: "faqQuestion1", answer: "faqAnswer1" },
  { question: "faqQuestion2", answer: "faqAnswer2" },
  { question: "faqQuestion3", answer: "faqAnswer3" },
];

export function FaqSection() {
  const { sections } = useEditor();

  const section = sections.find((item) => item.type === "faq");

  const sectionId = section?.id || "faq-section";

  const title =
    section?.content?.title || "Perguntas frequentes";

  const subtitle =
    section?.content?.subtitle ||
    "Tire as principais dúvidas dos seus clientes.";

  return (
    <section className="rounded-[40px] bg-[#f7f7f7] px-16 py-24">
      <div className="grid grid-cols-2 gap-16">
        <div>
          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-[#7b7691]">
            Dúvidas frequentes
          </p>

          <EditableText
            sectionId={sectionId}
            field="title"
            initialValue={title}
            multiline
            className="min-h-[180px] text-7xl font-black leading-[1.08] text-black"
          />

          <EditableText
            sectionId={sectionId}
            field="subtitle"
            initialValue={subtitle}
            multiline
            className="mt-8 max-w-xl text-2xl leading-[1.8] text-zinc-600"
          />
        </div>

        <div className="space-y-8">
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
                className="rounded-[32px] bg-white p-10 shadow-lg"
              >
                <EditableText
                  sectionId={sectionId}
                  field={item.question}
                  initialValue={question}
                  multiline
                  className="min-h-[90px] text-4xl font-black leading-[1.15] text-black"
                />

                <EditableText
                  sectionId={sectionId}
                  field={item.answer}
                  initialValue={answer}
                  multiline
                  className="mt-4 min-h-[70px] text-xl leading-[1.8] text-zinc-600"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}