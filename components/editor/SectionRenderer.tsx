"use client";

import { HeroSection } from "./sections/HeroSection";
import { ProductsSection } from "./sections/ProductsSection";
import { BannerSection } from "./sections/BannerSection";
import { CategoriesSection } from "./sections/CategoriesSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { SortableSection } from "./SortableSection";

import type { EditorSection } from "@/hooks/useEditor";

type SectionRendererProps = {
  sections: EditorSection[];
};

export function SectionRenderer({ sections }: SectionRendererProps) {
  return (
    <div className="space-y-6">
      {sections.map((section) => {
        if (section.hidden) return null;

        return (
          <SortableSection key={section.id} id={section.id}>
            {section.type === "hero" && <HeroSection />}
            {section.type === "categories" && <CategoriesSection />}
            {section.type === "products" && <ProductsSection />}
            {section.type === "banner" && <BannerSection />}
            {section.type === "faq" && <FaqSection />}
            {section.type === "footer" && <FooterSection />}
          </SortableSection>
        );
      })}
    </div>
  );
}