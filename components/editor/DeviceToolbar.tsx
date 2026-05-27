"use client";

import {
  Monitor,
  Tablet,
  Smartphone,
} from "lucide-react";

import { useEditor } from "@/hooks/useEditor";

export function DeviceToolbar() {
  const { previewDevice, setPreviewDevice } =
    useEditor();

  const devices = [
    {
      id: "desktop",
      icon: Monitor,
      label: "Desktop",
    },
    {
      id: "tablet",
      icon: Tablet,
      label: "Tablet",
    },
    {
      id: "mobile",
      icon: Smartphone,
      label: "Mobile",
    },
  ] as const;

  return (
    <div className="flex items-center gap-3 rounded-full bg-white p-2 shadow-2xl">
      {devices.map((device) => {
        const Icon = device.icon;

        const active =
          previewDevice === device.id;

        return (
          <button
            key={device.id}
            onClick={() =>
              setPreviewDevice(device.id)
            }
            className={`
              flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all
              ${
                active
                  ? "bg-black text-white"
                  : "bg-transparent text-black hover:bg-zinc-100"
              }
            `}
          >
            <Icon size={18} />
            {device.label}
          </button>
        );
      })}
    </div>
  );
}