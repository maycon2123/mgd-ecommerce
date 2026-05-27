"use client";

import { useEditor } from "@/hooks/useEditor";

export function PropertiesPanel() {
  const { selectedSection, sections, updateSectionStyles } = useEditor();

  const section = sections.find((item) => item.id === selectedSection);

  if (!section) {
    return (
      <div className="h-full w-full overflow-y-auto border-l border-zinc-200 bg-white p-6">
        <div className="rounded-2xl border border-dashed border-zinc-300 p-8 text-center text-sm text-zinc-500">
          Selecione uma seção para editar
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full overflow-y-auto border-l border-zinc-200 bg-white p-6">
      <div className="space-y-8 pb-10">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400">
            Seção
          </p>

          <h2 className="mt-3 text-2xl font-black text-black">
            {section.label}
          </h2>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            Cor de fundo
          </label>

          <input
            type="color"
            value={section.styles?.backgroundColor || "#ffffff"}
            onChange={(e) =>
              updateSectionStyles(section.id, {
                backgroundColor: e.target.value,
              })
            }
            className="h-14 w-full cursor-pointer rounded-2xl border border-zinc-300 bg-transparent"
          />
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            Padding superior
          </label>

          <input
            type="range"
            min={0}
            max={200}
            value={section.styles?.paddingTop || 0}
            onChange={(e) =>
              updateSectionStyles(section.id, {
                paddingTop: Number(e.target.value),
              })
            }
            className="w-full"
          />

          <p className="mt-2 text-sm text-zinc-500">
            {section.styles?.paddingTop || 0}px
          </p>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            Padding inferior
          </label>

          <input
            type="range"
            min={0}
            max={200}
            value={section.styles?.paddingBottom || 0}
            onChange={(e) =>
              updateSectionStyles(section.id, {
                paddingBottom: Number(e.target.value),
              })
            }
            className="w-full"
          />

          <p className="mt-2 text-sm text-zinc-500">
            {section.styles?.paddingBottom || 0}px
          </p>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            Border radius
          </label>

          <input
            type="range"
            min={0}
            max={80}
            value={section.styles?.borderRadius || 0}
            onChange={(e) =>
              updateSectionStyles(section.id, {
                borderRadius: Number(e.target.value),
              })
            }
            className="w-full"
          />

          <p className="mt-2 text-sm text-zinc-500">
            {section.styles?.borderRadius || 0}px
          </p>
        </div>

        <div>
          <label className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            Alinhamento
          </label>

          <div className="grid grid-cols-3 gap-3">
            {(["left", "center", "right"] as const).map((align) => (
              <button
                key={align}
                type="button"
                onClick={() =>
                  updateSectionStyles(section.id, {
                    textAlign: align,
                  })
                }
                className={`rounded-2xl border px-4 py-3 text-sm font-bold capitalize transition ${
                  section.styles?.textAlign === align
                    ? "border-black bg-black text-white"
                    : "border-zinc-300 bg-white text-black"
                }`}
              >
                {align}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}