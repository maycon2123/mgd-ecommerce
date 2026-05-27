"use client";

import { Sidebar } from "@/components/editor/Sidebar";
import { PropertiesPanel } from "@/components/editor/PropertiesPanel";
import { Preview } from "@/components/editor/Preview";
import { DeviceToolbar } from "@/components/editor/DeviceToolbar";

export default function EditorPage() {
  return (
    <main className="grid h-screen w-screen grid-cols-[360px_minmax(0,1fr)_360px] overflow-hidden bg-black">
      <aside className="h-screen overflow-y-auto bg-black">
        <Sidebar />
      </aside>

      <section className="relative h-screen overflow-hidden bg-[#d8d2c9]">
        <div className="pointer-events-none absolute left-0 top-0 z-[300] flex w-full justify-center pt-6">
          <div className="pointer-events-auto">
            <DeviceToolbar />
          </div>
        </div>

        <div className="h-full overflow-y-auto">
          <Preview />
        </div>
      </section>

      <aside className="h-screen overflow-y-auto bg-white">
        <PropertiesPanel />
      </aside>
    </main>
  );
}