"use client";

import { create } from "zustand";

export type EditorSectionType =
  | "hero"
  | "categories"
  | "products"
  | "banner"
  | "faq"
  | "footer";

export type EditorSection = {
  id: string;
  type: EditorSectionType;
  label: string;
  hidden?: boolean;

  content?: {
    title?: string;
    subtitle?: string;
    buttonText?: string;
  };

  styles?: {
    backgroundColor?: string;
  };
};

type EditorStore = {
  selectedSection: string | null;
  sections: EditorSection[];

  setSelectedSection: (id: string | null) => void;
  setSections: (sections: EditorSection[]) => void;

  updateSectionContent: (
    id: string,
    field: string,
    value: string
  ) => void;

  updateSectionStyle: (
    id: string,
    field: string,
    value: string
  ) => void;

  duplicateSection: (id: string) => void;
  deleteSection: (id: string) => void;
  addSection: (type: EditorSectionType) => void;
  renameSection: (id: string, label: string) => void;
  toggleSectionVisibility: (id: string) => void;
};

const labels: Record<EditorSectionType, string> = {
  hero: "Hero",
  categories: "Categorias",
  products: "Produtos",
  banner: "Banner",
  faq: "FAQ",
  footer: "Footer",
};

export const useEditor = create<EditorStore>((set, get) => ({
  selectedSection: null,

  sections: [
    {
      id: "hero-section",
      type: "hero",
      label: "Hero",

      content: {
        title: "Moda moderna",
        subtitle:
          "Estrutura visual profissional para marcas de moda, coleções, campanhas e ecommerce premium.",
        buttonText: "Comprar agora",
      },

      styles: {
        backgroundColor: "#e7e1db",
      },
    },

    {
      id: "categories-section",
      type: "categories",
      label: "Categorias",
    },

    {
      id: "products-section",
      type: "products",
      label: "Produtos",
    },

    {
      id: "banner-section",
      type: "banner",
      label: "Banner",
    },

    {
      id: "faq-section",
      type: "faq",
      label: "FAQ",
    },

    {
      id: "footer-section",
      type: "footer",
      label: "Footer",
    },
  ],

  setSelectedSection: (id) => set({ selectedSection: id }),

  setSections: (sections) => set({ sections }),

  updateSectionContent: (id, field, value) => {
    const sections = get().sections;

    set({
      sections: sections.map((section) =>
        section.id === id
          ? {
              ...section,
              content: {
                ...section.content,
                [field]: value,
              },
            }
          : section
      ),
    });
  },

  updateSectionStyle: (id, field, value) => {
    const sections = get().sections;

    set({
      sections: sections.map((section) =>
        section.id === id
          ? {
              ...section,
              styles: {
                ...section.styles,
                [field]: value,
              },
            }
          : section
      ),
    });
  },

  duplicateSection: (id) => {
    const sections = get().sections;
    const section = sections.find((item) => item.id === id);

    if (!section) return;

    const newSection: EditorSection = {
      ...section,
      id: `${section.type}-${Date.now()}`,
      label: `${section.label} cópia`,
    };

    const index = sections.findIndex((item) => item.id === id);
    const updated = [...sections];

    updated.splice(index + 1, 0, newSection);

    set({
      sections: updated,
      selectedSection: newSection.id,
    });
  },

  deleteSection: (id) => {
    const { sections, selectedSection } = get();

    set({
      sections: sections.filter((item) => item.id !== id),
      selectedSection: selectedSection === id ? null : selectedSection,
    });
  },

  addSection: (type) => {
    const newSection: EditorSection = {
      id: `${type}-${Date.now()}`,
      type,
      label: labels[type],
    };

    set({
      sections: [...get().sections, newSection],
      selectedSection: newSection.id,
    });
  },

  renameSection: (id, label) => {
    const sections = get().sections;

    set({
      sections: sections.map((section) =>
        section.id === id ? { ...section, label } : section
      ),
    });
  },

  toggleSectionVisibility: (id) => {
    const sections = get().sections;

    set({
      sections: sections.map((section) =>
        section.id === id
          ? {
              ...section,
              hidden: !section.hidden,
            }
          : section
      ),
    });
  },
}));