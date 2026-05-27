"use client";

import type { ReactNode } from "react";
import { useEditor } from "@/hooks/useEditor";

type PreviewDeviceFrameProps = {
  children: ReactNode;
};

export function PreviewDeviceFrame({ children }: PreviewDeviceFrameProps) {
  const { previewDevice } = useEditor();

  const deviceWidth = {
    desktop: "w-full max-w-[1450px]",
    tablet: "w-[900px]",
    mobile: "w-[430px]",
  };

  return (
    <div className="flex w-full justify-center px-10 py-24">
      <div
        className={`transition-all duration-500 ${deviceWidth[previewDevice]}`}
      >
        <div className="rounded-[42px] bg-[#e6e1da] p-8 shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}