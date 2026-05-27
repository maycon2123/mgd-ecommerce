"use client";

import { useState } from "react";
import {
  Plus,
  GripVertical,
  Eye,
  EyeOff,
  Copy,
  Trash2,
  X,
  Pencil,
} from "lucide-react";
import { DndContext, closestCenter, DragEndEvent } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { useEditor } from "@/hooks/useEditor";
import type { EditorSection, EditorSectionType } from "@/hooks/useEditor";

const sectionOptions: { type: EditorSectionType; label: string }[] = [
  { type: "hero", label: "Hero" },
  { type: "categories", label: "Categorias" },
  { type: "products", label: "Produtos" },
  { type: "banner", label: "Banner" },
  { type: "faq", label: "FAQ" },
  { type: "footer", label: "Footer" },
];

function SidebarItem({ section }: { section: EditorSection }) {
  const {
    duplicateSection,
    deleteSection,
    renameSection,
    toggleSectionVisibility,
  } = useEditor();

  const [editing, setEditing] = useState(false);
  const [label, setLabel] = useState(section.label);

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: section.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  function saveLabel() {
    const cleanLabel = label.trim();

    if (!cleanLabel) {
      setLabel(section.label);
      setEditing(false);
      return;
    }

    renameSection(section.id, cleanLabel);
    setEditing(false);
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-center justify-between rounded-[28px] border px-4 py-5 transition ${
        section.hidden
          ? "border-red-500/20 bg-red-500/5 opacity-60"
          : "border-white/10 bg-[#0f0f0f] hover:border-white/20"
      } ${isDragging ? "z-50 scale-[1.03] opacity-70" : ""}`}
    >
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <button
          type="button"
          {...attributes}
          {...listeners}
          className="shrink-0 cursor-grab text-zinc-500 active:cursor-grabbing"
        >
          <GripVertical size={18} />
        </button>

        {editing ? (
          <input
            value={label}
            autoFocus
            onChange={(event) => setLabel(event.target.value)}
            onBlur={saveLabel}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                saveLabel();
              }

              if (event.key === "Escape") {
                setLabel(section.label);
                setEditing(false);
              }
            }}
            className="min-w-0 flex-1 rounded-xl border border-white/10 bg-black px-3 py-2 text-base font-bold outline-none focus:border-white/40"
          />
        ) : (
          <strong
            title={section.label}
            className={`min-w-0 flex-1 truncate text-lg ${
              section.hidden ? "text-zinc-500 line-through" : "text-white"
            }`}
          >
            {section.label}
          </strong>
        )}
      </div>

      <div className="ml-3 flex shrink-0 items-center gap-2">
        <button
          type="button"
          onClick={() => setEditing(true)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white hover:text-black"
          title="Editar nome"
        >
          <Pencil size={16} />
        </button>

        <button
          type="button"
          onClick={() => toggleSectionVisibility(section.id)}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition ${
            section.hidden
              ? "bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white"
              : "bg-white/5 hover:bg-white/10"
          }`}
          title="Mostrar/ocultar"
        >
          {section.hidden ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>

        <button
          type="button"
          onClick={() => duplicateSection(section.id)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition hover:bg-white/10"
          title="Duplicar"
        >
          <Copy size={16} />
        </button>

        <button
          type="button"
          onClick={() => deleteSection(section.id)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/10 text-red-400 transition hover:bg-red-500 hover:text-white"
          title="Excluir"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}

export function Sidebar() {
  const { sections, setSections, addSection } = useEditor();
  const [showOptions, setShowOptions] = useState(false);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = sections.findIndex((item) => item.id === active.id);
      const newIndex = sections.findIndex((item) => item.id === over.id);

      setSections(arrayMove(sections, oldIndex, newIndex));
    }
  }

  return (
    <aside className="w-[370px] border-r border-white/10 bg-black text-white">
      <div className="border-b border-white/10 px-6 py-8">
        <p className="text-xs uppercase tracking-[0.4em] text-zinc-500">
          Estrutura da loja
        </p>

        <h2 className="mt-3 text-5xl font-black">Editor visual</h2>
      </div>

      <div className="p-6">
        <button
          type="button"
          onClick={() => setShowOptions((current) => !current)}
          className="flex w-full items-center justify-center gap-3 rounded-[24px] bg-white px-6 py-5 font-bold text-black transition hover:scale-[1.02]"
        >
          {showOptions ? <X size={22} /> : <Plus size={22} />}
          {showOptions ? "Fechar opções" : "Adicionar seção"}
        </button>

        {showOptions && (
          <div className="mt-4 grid gap-3 rounded-[28px] border border-white/10 bg-white/[0.04] p-4">
            {sectionOptions.map((option) => (
              <button
                key={option.type}
                type="button"
                onClick={() => {
                  addSection(option.type);
                  setShowOptions(false);
                }}
                className="rounded-2xl bg-white/5 px-5 py-4 text-left font-bold text-zinc-200 transition hover:bg-white hover:text-black"
              >
                + {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={sections.map((section) => section.id)}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-3 px-5 pb-10">
            {sections.map((section) => (
              <SidebarItem key={section.id} section={section} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </aside>
  );
}