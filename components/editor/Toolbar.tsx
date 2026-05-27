"use client";

import { DeviceToolbar } from "./DeviceToolbar";

export function Toolbar() {
  return (
    <div className="fixed left-1/2 top-6 z-[200] -translate-x-1/2">
      <DeviceToolbar />
    </div>
  );
}