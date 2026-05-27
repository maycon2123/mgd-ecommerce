"use client";

import { useState } from "react";

type EditableTextProps = {
  initialValue: string;
  className?: string;
  multiline?: boolean;
};

export function EditableText({
  initialValue,
  className = "",
  multiline = false,
}: EditableTextProps) {
  const [value, setValue] = useState(initialValue);

  if (multiline) {
    return (
      <textarea
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={`w-full resize-none bg-transparent outline-none ${className}`}
      />
    );
  }

  return (
    <input
      value={value}
      onChange={(event) => setValue(event.target.value)}
      className={`w-full bg-transparent outline-none ${className}`}
    />
  );
}