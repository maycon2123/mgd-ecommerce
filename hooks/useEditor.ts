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
  content?: Record<string, string>;
  styles?: Record<string, string>;
};

type EditorStore = {
  selectedSection: string | null;
  sections: EditorSection[];

  setSelectedSection: (id: string | null) => void;
  setSections: (sections: EditorSection[]) => void;
  updateSectionContent: (id: string, field: string, value: string) => void;
  updateSectionStyle: (id: string, field: string, value: string) => void;
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

const defaultHeroImage =
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop";

const initialSections: EditorSection[] = [
  {
    id: "hero-section",
    type: "hero",
    label: "Hero",
    content: {
      title: "Moda moderna",
      subtitle:
        "Estrutura visual profissional para marcas de moda, coleções, campanhas e ecommerce premium.",
      buttonText: "Comprar agora",
      image: defaultHeroImage,
    },
    styles: {
      backgroundColor: "#e7e1db",
    },
  },
  {
    id: "categories-section",
    type: "categories",
    label: "Categorias",
    content: {
      title: "Explore por estilo",
      subtitle: "Estrutura modular para categorias principais da loja virtual.",
      buttonText: "Explorar",
      category1Title: "Feminino",
      category1Text: "Categoria visual para navegação do ecommerce.",
      category2Title: "Masculino",
      category2Text: "Categoria visual para navegação do ecommerce.",
      category3Title: "Acessórios",
      category3Text: "Categoria visual para navegação do ecommerce.",
      category4Title: "Coleções",
      category4Text: "Categoria visual para navegação do ecommerce.",
    },
    styles: {
      backgroundColor: "#eef4ff",
    },
  },
  {
    id: "products-section",
    type: "products",
    label: "Produtos",
    content: {
      title: "Produtos em destaque",
      subtitle: "Seleção especial para sua loja.",
      buttonText: "Comprar",
    },
  },
  {
    id: "banner-section",
    type: "banner",
    label: "Banner",
    content: {
      title: "Fashion Weekend",
      subtitle:
        "Crie banners promocionais modernos para campanhas sazonais, descontos e lançamentos da loja.",
      buttonText: "Explorar campanha",
    },
    styles: {
      backgroundColor: "#020617",
    },
  },
  {
    id: "faq-section",
    type: "faq",
    label: "FAQ",
    content: {
      title: "Perguntas frequentes",
      subtitle: "Tire as principais dúvidas dos seus clientes.",
      buttonText: "Ver dúvidas",
    },
  },
  {
    id: "footer-section",
    type: "footer",
    label: "Footer",
    content: {
      title: "MGD Fashion",
      subtitle: "Sua loja profissional criada com MGD Ecommerce.",
      buttonText: "Voltar ao topo",
    },
  },
];

export const useEditor = create<EditorStore>((set, get) => ({
  selectedSection: null,
  sections: initialSections,

  setSelectedSection: (id) => {
    set({ selectedSection: id });
  },

  setSections: (sections) => {
    set({ sections });
  },

  updateSectionContent: (id, field, value) => {
    set({
      sections: get().sections.map((section) => {
        if (section.id !== id) return section;

        return {
          ...section,
          content: {
            ...section.content,
            [field]: value,
          },
        };
      }),
    });
  },

  updateSectionStyle: (id, field, value) => {
    set({
      sections: get().sections.map((section) => {
        if (section.id !== id) return section;

        return {
          ...section,
          styles: {
            ...section.styles,
            [field]: value,
          },
        };
      }),
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
    const updatedSections = [...sections];

    updatedSections.splice(index + 1, 0, newSection);

    set({
      sections: updatedSections,
      selectedSection: newSection.id,
    });
  },

  deleteSection: (id) => {
    const { sections, selectedSection } = get();

    set({
      sections: sections.filter((section) => section.id !== id),
      selectedSection: selectedSection === id ? null : selectedSection,
    });
  },

  addSection: (type) => {
    const newSection: EditorSection = {
      id: `${type}-${Date.now()}`,
      type,
      label: labels[type],
      content: {
        title: labels[type],
        subtitle: "Edite o conteúdo desta seção.",
        buttonText: "Explorar",
      },
    };

    set({
      sections: [...get().sections, newSection],
      selectedSection: newSection.id,
    });
  },

  renameSection: (id, label) => {
    set({
      sections: get().sections.map((section) =>
        section.id === id ? { ...section, label } : section
      ),
    });
  },

  toggleSectionVisibility: (id) => {
    set({
      sections: get().sections.map((section) =>
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