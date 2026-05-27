"use client";

import { EditableText } from "@/components/editor/EditableText";
import { useEditor } from "@/hooks/useEditor";

export function FooterSection() {
  const { sections, previewDevice } = useEditor();

  const section = sections.find((item) => item.type === "footer");
  const sectionId = section?.id || "footer-section";

  const isMobile = previewDevice === "mobile";
  const isTablet = previewDevice === "tablet";

  const backgroundColor = section?.styles?.backgroundColor || "#000000";

  const gridClass = isMobile
    ? "grid-cols-1"
    : isTablet
    ? "grid-cols-2"
    : "grid-cols-4";

  return (
    <footer
      className={`rounded-[40px] text-white ${
        isMobile ? "px-6 py-10" : isTablet ? "px-10 py-14" : "px-14 py-16"
      }`}
      style={{ backgroundColor }}
    >
      <div className={`grid gap-10 ${gridClass}`}>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-zinc-500">
            Fashion Store
          </p>

          <EditableText
            sectionId={sectionId}
            field="title"
            initialValue={section?.content?.title || "MGD Fashion"}
            multiline
            className={`max-w-full break-words font-black leading-tight text-white ${
              isMobile ? "text-4xl" : "text-5xl"
            }`}
          />

          <EditableText
            sectionId={sectionId}
            field="subtitle"
            initialValue={
              section?.content?.subtitle ||
              "Plataforma visual moderna para ecommerce profissional."
            }
            multiline
            className="mt-6 max-w-full break-words text-base leading-relaxed text-zinc-400"
          />
        </div>

        <div>
          <EditableText
            sectionId={sectionId}
            field="footerColumn1Title"
            initialValue={section?.content?.footerColumn1Title || "Navegação"}
            className="mb-6 max-w-full break-words text-2xl font-black text-white"
          />

          <div className="space-y-4">
            {["Home", "Produtos", "Coleções", "Contato"].map((text, index) => (
              <EditableText
                key={index}
                sectionId={sectionId}
                field={`footerNav${index + 1}`}
                initialValue={
                  section?.content?.[`footerNav${index + 1}`] || text
                }
                className="max-w-full break-words text-base text-zinc-300"
              />
            ))}
          </div>
        </div>

        <div>
          <EditableText
            sectionId={sectionId}
            field="footerColumn2Title"
            initialValue={section?.content?.footerColumn2Title || "Categorias"}
            className="mb-6 max-w-full break-words text-2xl font-black text-white"
          />

          <div className="space-y-4">
            {["Feminino", "Masculino", "Acessórios", "Promoções"].map(
              (text, index) => (
                <EditableText
                  key={index}
                  sectionId={sectionId}
                  field={`footerCategory${index + 1}`}
                  initialValue={
                    section?.content?.[`footerCategory${index + 1}`] || text
                  }
                  className="max-w-full break-words text-base text-zinc-300"
                />
              )
            )}
          </div>
        </div>

        <div>
          <EditableText
            sectionId={sectionId}
            field="footerColumn3Title"
            initialValue={section?.content?.footerColumn3Title || "Redes sociais"}
            multiline
            className="mb-6 max-w-full break-words text-2xl font-black leading-tight text-white"
          />

          <div className="space-y-4">
            {["Instagram", "Facebook", "TikTok", "YouTube"].map(
              (text, index) => (
                <EditableText
                  key={index}
                  sectionId={sectionId}
                  field={`footerSocial${index + 1}`}
                  initialValue={
                    section?.content?.[`footerSocial${index + 1}`] || text
                  }
                  className="max-w-full break-words text-base text-zinc-300"
                />
              )
            )}
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-8">
        <EditableText
          sectionId={sectionId}
          field="copyright"
          initialValue={
            section?.content?.copyright ||
            "© 2026 MGD Ecommerce — Todos os direitos reservados."
          }
          className="max-w-full break-words text-sm text-zinc-500"
        />
      </div>
    </footer>
  );
}