"use client";

import { EditableText } from "@/components/editor/EditableText";
import { useEditor } from "@/hooks/useEditor";

export function FooterSection() {
  const { sections } = useEditor();

  const section = sections.find((item) => item.type === "footer");

  const sectionId = section?.id || "footer-section";

  return (
    <footer className="rounded-[40px] bg-black px-14 py-16 text-white">
      <div className="grid grid-cols-4 gap-12">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-zinc-500">
            Fashion Store
          </p>

          <EditableText
            sectionId={sectionId}
            field="title"
            initialValue={section?.content?.title || "MGD Fashion"}
            multiline
            className="min-h-[110px] text-5xl font-black leading-[1.05] text-white"
          />

          <EditableText
            sectionId={sectionId}
            field="subtitle"
            initialValue={
              section?.content?.subtitle ||
              "Plataforma visual moderna para ecommerce profissional."
            }
            multiline
            className="mt-6 min-h-[100px] text-lg leading-9 text-zinc-400"
          />
        </div>

        <div>
          <EditableText
            sectionId={sectionId}
            field="footerColumn1Title"
            initialValue={section?.content?.footerColumn1Title || "Navegação"}
            className="mb-8 text-3xl font-black text-white"
          />

          <div className="space-y-4">
            {["Home", "Produtos", "Coleções", "Contato"].map((text, index) => (
              <EditableText
                key={index}
                sectionId={sectionId}
                field={`footerNav${index + 1}`}
                initialValue={section?.content?.[`footerNav${index + 1}`] || text}
                className="text-lg text-zinc-300"
              />
            ))}
          </div>
        </div>

        <div>
          <EditableText
            sectionId={sectionId}
            field="footerColumn2Title"
            initialValue={section?.content?.footerColumn2Title || "Categorias"}
            className="mb-8 text-3xl font-black text-white"
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
                  className="text-lg text-zinc-300"
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
            className="mb-8 min-h-[80px] text-3xl font-black leading-[1.05] text-white"
          />

          <div className="space-y-4">
            {["Instagram", "Facebook", "TikTok", "YouTube"].map(
              (text, index) => (
                <EditableText
                  key={index}
                  sectionId={sectionId}
                  field={`footerSocial${index + 1}`}
                  initialValue={section?.content?.[`footerSocial${index + 1}`] || text}
                  className="text-lg text-zinc-300"
                />
              )
            )}
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 pt-8">
        <EditableText
          sectionId={sectionId}
          field="copyright"
          initialValue={
            section?.content?.copyright ||
            "© 2026 MGD Ecommerce — Todos os direitos reservados."
          }
          className="text-base text-zinc-500"
        />
      </div>
    </footer>
  );
}