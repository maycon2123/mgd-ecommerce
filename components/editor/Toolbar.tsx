"use client";

import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  Minus,
  Plus,
  Type,
} from "lucide-react";

export function Toolbar() {
  return (
    <div className="fixed left-1/2 top-6 z-[100] flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/90 px-4 py-3 text-white shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-2 border-r border-white/10 pr-3">
        <Type size={18} className="text-zinc-400" />

        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/10 p-2 transition hover:bg-white hover:text-black"
        >
          <Minus size={16} />
        </button>

        <span className="min-w-10 text-center text-sm font-bold">64</span>

        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/10 p-2 transition hover:bg-white hover:text-black"
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="flex items-center gap-2 border-r border-white/10 pr-3">
        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/10 p-2 transition hover:bg-white hover:text-black"
        >
          <Bold size={16} />
        </button>

        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/10 p-2 transition hover:bg-white hover:text-black"
        >
          <Italic size={16} />
        </button>
      </div>

      <div className="flex items-center gap-2 border-r border-white/10 pr-3">
        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/10 p-2 transition hover:bg-white hover:text-black"
        >
          <AlignLeft size={16} />
        </button>

        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/10 p-2 transition hover:bg-white hover:text-black"
        >
          <AlignCenter size={16} />
        </button>

        <button
          type="button"
          className="rounded-full border border-white/10 bg-white/10 p-2 transition hover:bg-white hover:text-black"
        >
          <AlignRight size={16} />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="color"
          defaultValue="#000000"
          className="h-9 w-9 cursor-pointer rounded-full border border-white/10 bg-white/10"
        />
      </div>
    </div>
  );
}