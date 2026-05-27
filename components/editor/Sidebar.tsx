"use client";

import {
  Copy,
  Edit3,
  Eye,
  EyeOff,
  Plus,
  Trash2,
  GripVertical,
} from "lucide-react";

import { useEditor, type EditorSectionType } from "@/hooks/useEditor";

const sectionOptions: EditorSectionType[] = [
  "header",
  "hero",
  "categories",
  "products",
  "banner",
  "faq",
  "footer",
];

export function Sidebar() {
  const {
    sections,
    selectedSection,
    setSelectedSection,
    addSection,
    duplicateSection,
    deleteSection,
    toggleSectionVisibility,
  } = useEditor();

  return (
    <aside className="flex h-full w-full flex-col bg-black text-white">
      <div className="border-b border-white/10 px-7 pb-8 pt-8">
        <p className="text-xs uppercase tracking-[0.45em] text-zinc-500">
          Estrutura da loja
        </p>

        <h1 className="mt-5 text-5xl font-black leading-[0.95]">
          Editor
          <br />
          visual
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-6">
        <button
          type="button"
          onClick={() => addSection("hero")}
          className="mb-6 flex h-16 w-full items-center justify-center gap-3 rounded-[28px] bg-white text-base font-black text-black transition hover:scale-[1.02]"
        >
          <Plus size={22} />
          Adicionar seção
        </button>

        <div className="space-y-4">
          {sections.map((section) => {
            const selected = selectedSection === section.id;

            return (
              <div
                key={section.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedSection(section.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    setSelectedSection(section.id);
                  }
                }}
                className={`flex min-h-[76px] w-full items-center gap-3 rounded-[26px] border px-4 transition ${
                  selected
                    ? "border-blue-500 bg-[#06111f]"
                    : "border-white/10 bg-[#101010] hover:border-white/25"
                }`}
              >
                <GripVertical size={18} className="shrink-0 text-zinc-500" />

                <span className="min-w-0 flex-1 truncate text-lg font-black text-white">
                  {section.label}
                </span>

                <div className="flex shrink-0 items-center gap-2">
                  <button
                    type="button"
                    title="Editar seção"
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedSection(section.id);
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  >
                    <Edit3 size={16} />
                  </button>

                  <button
                    type="button"
                    title="Mostrar/Ocultar"
                    onClick={(event) => {
                      event.stopPropagation();
                      toggleSectionVisibility(section.id);
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  >
                    {section.hidden ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>

                  <button
                    type="button"
                    title="Duplicar"
                    onClick={(event) => {
                      event.stopPropagation();
                      duplicateSection(section.id);
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                  >
                    <Copy size={16} />
                  </button>

                  <button
                    type="button"
                    title="Excluir"
                    onClick={(event) => {
                      event.stopPropagation();
                      deleteSection(section.id);
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/15 text-red-400 transition hover:bg-red-500/25"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-4">
          <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-zinc-500">
            Nova seção
          </p>

          <div className="grid grid-cols-2 gap-2">
            {sectionOptions.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => addSection(type)}
                className="rounded-2xl bg-white/10 px-3 py-3 text-xs font-bold capitalize text-white transition hover:bg-white hover:text-black"
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}