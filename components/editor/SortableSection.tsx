"use client";

import { GripVertical } from "lucide-react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import { useEditor } from "@/hooks/useEditor";

type SortableSectionProps = {
  id: string;
  children: React.ReactNode;
};

export function SortableSection({ id, children }: SortableSectionProps) {
  const { selectedSection, setSelectedSection } = useEditor();

  const isSelected = selectedSection === id;

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

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={() => setSelectedSection(id)}
      className={`group relative cursor-pointer transition-all duration-300 ${
        isDragging ? "z-50 scale-[1.01] opacity-70" : ""
      } ${
        isSelected
          ? "ring-4 ring-blue-500 ring-offset-4 ring-offset-white"
          : "ring-0"
      }`}
    >
      <button
        type="button"
        {...attributes}
        {...listeners}
        onClick={(event) => event.stopPropagation()}
        className="absolute left-5 top-5 z-50 flex h-10 w-10 cursor-grab items-center justify-center rounded-full border border-black/10 bg-white text-black opacity-0 shadow-xl transition group-hover:opacity-100 active:cursor-grabbing"
      >
        <GripVertical size={18} />
      </button>

      {children}
    </div>
  );
}