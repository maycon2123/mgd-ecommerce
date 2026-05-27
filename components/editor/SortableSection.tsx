"use client";

import { GripVertical } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { useEditor } from "@/hooks/useEditor";

type SortableSectionProps = {
  id: string;
  children: React.ReactNode;
};

export function SortableSection({
  id,
  children,
}: SortableSectionProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
  });

  const {
    selectedSection,
    setSelectedSection,
  } = useEditor();

  const isSelected = selectedSection === id;

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={() => setSelectedSection(id)}
      className={`group relative cursor-pointer rounded-[38px] transition-all duration-300 ${
        isDragging
          ? "z-50 scale-[1.01] opacity-70"
          : ""
      } ${
        isSelected
          ? "ring-4 ring-blue-500/80"
          : "hover:ring-2 hover:ring-blue-400/50"
      }`}
    >
      {/* BORDA PREMIUM */}
      {isSelected && (
        <div className="pointer-events-none absolute inset-0 z-40 rounded-[38px] border-2 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.35)]" />
      )}

      {/* BADGE */}
      {isSelected && (
        <div className="absolute left-6 top-6 z-50 rounded-full bg-blue-500 px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-white shadow-2xl">
          Selecionado
        </div>
      )}

      {/* DRAG BUTTON */}
      <button
        type="button"
        {...attributes}
        {...listeners}
        onClick={(event) => event.stopPropagation()}
        className={`absolute left-6 top-20 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-2xl transition-all duration-300 ${
          isSelected
            ? "opacity-100"
            : "opacity-0 group-hover:opacity-100"
        } active:cursor-grabbing`}
      >
        <GripVertical size={18} />
      </button>

      {/* OVERLAY HOVER */}
      <div
        className={`pointer-events-none absolute inset-0 z-30 rounded-[38px] transition-all duration-300 ${
          isSelected
            ? "bg-blue-500/5"
            : "bg-transparent group-hover:bg-black/[0.02]"
        }`}
      />

      {children}
    </div>
  );
}