"use client";

import { Menu, Search, ShoppingBag } from "lucide-react";
import { EditableText } from "@/components/editor/EditableText";
import { useEditor } from "@/hooks/useEditor";

export function HeaderSection() {
  const { sections, previewDevice } = useEditor();

  const section = sections.find((item) => item.type === "header");
  const sectionId = section?.id || "header-section";

  const isMobile = previewDevice === "mobile";
  const isTablet = previewDevice === "tablet";
  const isDesktop = previewDevice === "desktop";

  const title = section?.content?.title || "MGD Fashion";
  const subtitle = section?.content?.subtitle || "Fashion";

  const backgroundColor = section?.styles?.backgroundColor || "#ffffff";
  const borderRadius = section?.styles?.borderRadius ?? 38;
  const paddingTop = section?.styles?.paddingTop ?? 0;
  const paddingBottom = section?.styles?.paddingBottom ?? 0;

  return (
    <header
      className="overflow-hidden border border-white/40 bg-white shadow-sm"
      style={{
        backgroundColor,
        borderRadius,
        paddingTop,
        paddingBottom,
      }}
    >
      <div
        className={`flex items-center justify-between gap-6 ${
          isMobile ? "px-5 py-5" : isTablet ? "px-8 py-6" : "px-10 py-7"
        }`}
      >
        <div className="flex min-w-0 items-center gap-4">
          {isMobile && (
            <button
              type="button"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white"
            >
              <Menu size={20} />
            </button>
          )}

          <div className="min-w-0">
            <EditableText
              sectionId={sectionId}
              field="subtitle"
              initialValue={subtitle}
              className="text-xs uppercase tracking-[0.35em] text-[#7d7aa5]"
            />

            <EditableText
              sectionId={sectionId}
              field="title"
              initialValue={title}
              multiline
              className={`font-black leading-tight text-black ${
                isMobile ? "text-2xl" : isTablet ? "text-3xl" : "text-4xl"
              }`}
            />
          </div>
        </div>

        {!isMobile && (
          <nav className="flex shrink-0 items-center gap-6">
            {["Feminino", "Masculino", "Coleções", "Acessórios"].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  className="whitespace-nowrap text-base font-medium text-black"
                >
                  {item}
                </button>
              )
            )}
          </nav>
        )}

        {isDesktop && (
          <div className="flex h-12 w-[230px] shrink-0 items-center gap-3 rounded-full border border-zinc-200 bg-[#f7f7f7] px-4">
            <Search size={17} className="shrink-0 text-zinc-500" />

            <input
              type="text"
              placeholder="Buscar..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
            />
          </div>
        )}

        <button
          type="button"
          className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white"
        >
          <ShoppingBag size={20} />

          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#3b82f6] text-[11px] font-black text-white">
            2
          </span>
        </button>
      </div>

      {(isMobile || isTablet) && (
        <div className="border-t border-zinc-100 px-5 pb-5 pt-4">
          <div className="flex h-12 items-center gap-3 rounded-full border border-zinc-200 bg-[#f7f7f7] px-4">
            <Search size={18} className="shrink-0 text-zinc-500" />

            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-zinc-400"
            />
          </div>
        </div>
      )}

      {isMobile && (
        <div className="flex gap-3 overflow-x-auto px-5 pb-5">
          {["Feminino", "Masculino", "Coleções", "Acessórios"].map((item) => (
            <button
              key={item}
              type="button"
              className="whitespace-nowrap rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-medium"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}