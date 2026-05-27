"use client";

import { Preview } from "@/components/editor/Preview";
import { Sidebar } from "@/components/editor/Sidebar";
import { Toolbar } from "@/components/editor/Toolbar";
import { PropertiesPanel } from "@/components/editor/PropertiesPanel";

export default function EditorPage() {
  return (
    <main className="flex min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      <Toolbar />

      <Sidebar />

      <div className="flex min-w-0 flex-1 overflow-hidden">
        <Preview />

        <PropertiesPanel />
      </div>
    </main>
  );
}