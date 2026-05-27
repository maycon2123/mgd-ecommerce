"use client";

import { useEffect, useState } from "react";
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
  multiline = false,
}: EditableTextProps) {
  const { updateSectionContent } = useEditor();
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  function handleChange(newValue: string) {
    setValue(newValue);
    updateSectionContent(sectionId, field, newValue);
  }

  if (multiline) {
    return (
      <textarea
        value={value}
        rows={1}
        onChange={(event) => handleChange(event.target.value)}
        className={`w-full resize-none overflow-hidden bg-transparent outline-none ${className}`}
      />
    );
  }

  return (
    <input
      value={value}
      onChange={(event) => handleChange(event.target.value)}
      className={`w-full bg-transparent outline-none ${className}`}
    />
  );
}