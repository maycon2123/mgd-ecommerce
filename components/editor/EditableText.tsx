"use client";

import { useEffect, useRef, useState } from "react";
import { useEditor } from "@/hooks/useEditor";

type EditableTextProps = {
  sectionId: string;
  field: string;
  initialValue: string;
  className?: string;
  multiline?: boolean;
};

export function EditableText({
  sectionId,
  field,
  initialValue,
  className = "",
}: EditableTextProps) {
  const { updateSectionContent } = useEditor();

  const [value, setValue] = useState(initialValue);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  function resizeTextarea() {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    resizeTextarea();
  }, [value, className]);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    const newValue = event.target.value;

    setValue(newValue);
    updateSectionContent(sectionId, field, newValue);
  }

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      rows={1}
      spellCheck={false}
      className={`
        block
        w-full
        max-w-full
        min-w-0
        resize-none
        overflow-hidden
        whitespace-pre-wrap
        break-words
        border-none
        bg-transparent
        p-0
        outline-none
        leading-[inherit]
        ${className}
      `}
    />
  );
}