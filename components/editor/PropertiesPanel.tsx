"use client";

import { ImagePlus, Layers, Settings2 } from "lucide-react";
import { useEditor } from "@/hooks/useEditor";

export function PropertiesPanel() {
  const {
    sections,
    selectedSection,
    updateSectionContent,
    updateSectionStyle,
  } = useEditor();

  const section = sections.find((item) => item.id === selectedSection);

  if (!section) {
    return (
      <aside className="flex w-[340px] shrink-0 items-center justify-center border-l border-white/10 bg-[#050505] p-6 text-center text-white">
        <div>
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
            <Layers size={24} className="text-zinc-400" />
          </div>

          <h3 className="mt-5 text-xl font-black">
            Nenhuma seção selecionada
          </h3>

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            Clique em uma seção do preview ou na lista da esquerda para editar
            suas propriedades.
          </p>
        </div>
      </aside>
    );
  }

  function handleImageUpload(file: File | undefined) {
    if (!file || !section) return;

    const imageUrl = URL.createObjectURL(file);

    updateSectionContent(section.id, "image", imageUrl);
  }

  return (
    <aside className="w-[340px] shrink-0 overflow-y-auto border-l border-white/10 bg-[#050505] text-white">
      <div className="border-b border-white/10 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
            <Settings2 size={22} />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">
              Propriedades
            </p>

            <h2 className="mt-1 text-2xl font-black">{section.label}</h2>
          </div>
        </div>

        <p className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-400">
          Tipo da seção:{" "}
          <span className="font-bold text-white">{section.type}</span>
        </p>
      </div>

      <div className="space-y-6 p-6">
        <div>
          <label className="mb-2 block text-sm font-bold text-zinc-300">
            Nome da seção
          </label>

          <input
            type="text"
            value={section.label}
            readOnly
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-zinc-300">
            Título
          </label>

          <input
            type="text"
            value={section.content?.title || ""}
            onChange={(event) =>
              updateSectionContent(section.id, "title", event.target.value)
            }
            placeholder="Digite o título da seção"
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-zinc-300">
            Subtítulo
          </label>

          <textarea
            value={section.content?.subtitle || ""}
            onChange={(event) =>
              updateSectionContent(section.id, "subtitle", event.target.value)
            }
            placeholder="Digite o subtítulo da seção"
            className="min-h-[120px] w-full resize-none rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-zinc-300">
            Texto do botão
          </label>

          <input
            type="text"
            value={section.content?.buttonText || ""}
            onChange={(event) =>
              updateSectionContent(section.id, "buttonText", event.target.value)
            }
            placeholder="Comprar agora"
            className="w-full rounded-2xl border border-white/10 bg-black px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-zinc-300">
            Imagem do Hero
          </label>

          <label className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-3xl border border-dashed border-white/15 bg-black p-6 text-center transition hover:border-blue-500 hover:bg-blue-500/5">
            <ImagePlus size={28} className="text-blue-400" />

            <div>
              <p className="text-sm font-bold text-white">
                Clique para enviar imagem
              </p>

              <p className="mt-1 text-xs text-zinc-500">
                PNG, JPG ou WEBP
              </p>
            </div>

            <input
              type="file"
              accept="image/png,image/jpeg,image/jpg,image/webp"
              onChange={(event) => handleImageUpload(event.target.files?.[0])}
              className="hidden"
            />
          </label>
        </div>

        {section.content?.image && (
          <div>
            <label className="mb-2 block text-sm font-bold text-zinc-300">
              Pré-visualização
            </label>

            <div className="h-40 overflow-hidden rounded-3xl border border-white/10 bg-black">
              <img
                src={section.content.image}
                alt="Prévia da imagem"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        )}

        <div>
          <label className="mb-2 block text-sm font-bold text-zinc-300">
            Cor principal
          </label>

          <input
            type="color"
            value={section.styles?.backgroundColor || "#000000"}
            onChange={(event) =>
              updateSectionStyle(
                section.id,
                "backgroundColor",
                event.target.value
              )
            }
            className="h-14 w-full cursor-pointer rounded-2xl border border-white/10 bg-black p-2"
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <h3 className="font-black">Responsividade</h3>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            Em breve esta seção terá configurações separadas para desktop,
            tablet e mobile.
          </p>
        </div>
      </div>
    </aside>
  );
}