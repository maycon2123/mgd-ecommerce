"use client";

import type { EditorSection } from "@/hooks/useEditor";

import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection";
import { CategoriesSection } from "./sections/CategoriesSection";
import { ProductsSection } from "./sections/ProductsSection";
import { BannerSection } from "./sections/BannerSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";

type SectionRendererProps = {
  section: EditorSection;
};

export function SectionRenderer({ section }: SectionRendererProps) {
  if (section.type === "header") return <HeaderSection />;

  if (section.type === "hero") return <HeroSection />;

  if (section.type === "categories") return <CategoriesSection />;

  if (section.type === "products") return <ProductsSection />;

  if (section.type === "banner") return <BannerSection />;

  if (section.type === "faq") return <FaqSection />;

  if (section.type === "footer") return <FooterSection />;

  return null;
}