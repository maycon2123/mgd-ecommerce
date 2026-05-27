"use client";

import { Preview } from "@/components/editor/Preview";
import { Sidebar } from "@/components/editor/Sidebar";
import { Toolbar } from "@/components/editor/Toolbar";

export default function EditorPage() {
  return (
    <main className="flex min-h-screen bg-[#0a0a0a] text-white">
      <Toolbar />

      <Sidebar />

      <Preview />
    </main>
  );
}