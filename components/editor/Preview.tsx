"use client";

import {
  DndContext,
  closestCenter,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { useEditor } from "@/hooks/useEditor";
import { PreviewDeviceFrame } from "./PreviewDeviceFrame";
import { SortableSection } from "./SortableSection";
import { SectionRenderer } from "./SectionRenderer";

export function Preview() {
  const { sections, setSections } = useEditor();

  const visibleSections = sections.filter((section) => !section.hidden);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = sections.findIndex((section) => section.id === active.id);
    const newIndex = sections.findIndex((section) => section.id === over.id);

    if (oldIndex === -1 || newIndex === -1) return;

    setSections(arrayMove(sections, oldIndex, newIndex));
  }

  return (
    <div className="min-h-full px-10 pb-20 pt-24">
      <PreviewDeviceFrame>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext
            items={visibleSections.map((section) => section.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-8">
              {visibleSections.map((section) => (
                <SortableSection key={section.id} id={section.id}>
                  <SectionRenderer section={section} />
                </SortableSection>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </PreviewDeviceFrame>
    </div>
  );
}