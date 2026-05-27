"use client";

import { Monitor, Smartphone, Tablet } from "lucide-react";

export type DeviceMode = "desktop" | "tablet" | "mobile";

type DeviceToolbarProps = {
  device: DeviceMode;
  onChange: (device: DeviceMode) => void;
};

export function DeviceToolbar({ device, onChange }: DeviceToolbarProps) {
  const devices = [
    { id: "desktop" as const, label: "Desktop", icon: Monitor },
    { id: "tablet" as const, label: "Tablet", icon: Tablet },
    { id: "mobile" as const, label: "Mobile", icon: Smartphone },
  ];

  return (
    <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white p-2 shadow-xl">
      {devices.map((item) => {
        const Icon = item.icon;
        const active = device === item.id;

        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onChange(item.id)}
            className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${
              active
                ? "bg-black text-white"
                : "bg-zinc-100 text-black hover:bg-zinc-200"
            }`}
          >
            <Icon size={16} />
            {item.label}
          </button>
        );
      })}
    </div>
  );
}