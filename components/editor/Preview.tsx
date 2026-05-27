"use client";

import { useState } from "react";
import { SectionRenderer } from "./SectionRenderer";
import { useEditor } from "@/hooks/useEditor";
import { DeviceToolbar, DeviceMode } from "./DeviceToolbar";
import { PreviewDeviceFrame } from "./PreviewDeviceFrame";

export function Preview() {
  const { sections } = useEditor();
  const [device, setDevice] = useState<DeviceMode>("desktop");

  return (
    <section className="flex-1 overflow-auto bg-[#d8d3cb] p-10">
      <div className="mb-8 flex justify-center">
        <DeviceToolbar device={device} onChange={setDevice} />
      </div>

      <PreviewDeviceFrame device={device}>
        <div className="overflow-hidden rounded-[36px] border border-black/5 bg-[#f8f8f8]">
          <header className="flex items-center justify-between border-b border-black/5 bg-white px-10 py-8">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#7b7691]">
                Fashion
              </p>

              <h2 className="mt-1 text-3xl font-black text-black">
                MGD Fashion
              </h2>
            </div>

            <nav className="hidden gap-8 font-medium text-black md:flex">
              <button>Feminino</button>
              <button>Masculino</button>
              <button>Coleções</button>
              <button>Acessórios</button>
            </nav>
          </header>

          <SectionRenderer sections={sections} />
        </div>
      </PreviewDeviceFrame>
    </section>
  );
}