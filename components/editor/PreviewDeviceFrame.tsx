"use client";

import type { ReactNode } from "react";
import type { DeviceMode } from "./DeviceToolbar";

type PreviewDeviceFrameProps = {
  device: DeviceMode;
  children: ReactNode;
};

export function PreviewDeviceFrame({
  device,
  children,
}: PreviewDeviceFrameProps) {
  const widthClass = {
    desktop: "max-w-[1400px]",
    tablet: "max-w-[768px]",
    mobile: "max-w-[390px]",
  };

  return (
    <div
      className={`mx-auto w-full rounded-[42px] bg-[#e6e1da] p-8 transition-all duration-300 ${widthClass[device]}`}
    >
      {children}
    </div>
  );
}