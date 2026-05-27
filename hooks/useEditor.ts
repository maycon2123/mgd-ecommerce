"use client";

import { create } from "zustand";

export type EditorSectionType =
  | "header"
  | "hero"
  | "categories"
  | "products"
  | "banner"
  | "faq"
  | "footer";

export type PreviewDevice = "desktop" | "tablet" | "mobile";

export type EditorSectionStyles = {
  backgroundColor?: string;
  textColor?: string;
  paddingTop?: number;
  paddingBottom?: number;
  borderRadius?: number;
  maxWidth?: number;
  textAlign?: "left" | "center" | "right";
};

export type EditorSection = {
  id: string;
  type: EditorSectionType;
  label: string;
  hidden?: boolean;
  content?: Record<string, string>;
  styles?: EditorSectionStyles;
};

type EditorStore = {
  selectedSection: string | null;
  sections: EditorSection[];
  previewDevice: PreviewDevice;

  setPreviewDevice: (device: PreviewDevice) => void;
  setSelectedSection: (id: string | null) => void;
  setSections: (sections: EditorSection[]) => void;

  updateSectionContent: (
    sectionId: string,
    field: string,
    value: string
  ) => void;

  updateSectionStyles: (
    sectionId: string,
    styles: Partial<EditorSectionStyles>
  ) => void;

  duplicateSection: (id: string) => void;
  deleteSection: (id: string) => void;
  addSection: (type: EditorSectionType) => void;
  renameSection: (id: string, label: string) => void;
  toggleSectionVisibility: (id: string) => void;
};

const labels: Record<EditorSectionType, string> = {
  header: "Header",
  hero: "Hero",
  categories: "Categorias",
  products: "Produtos",
  banner: "Banner",
  faq: "FAQ",
  footer: "Footer",
};

function getDefaultStyles(type: EditorSectionType): EditorSectionStyles {
  if (type === "header") {
    return {
      backgroundColor: "#ffffff",
      paddingTop: 0,
      paddingBottom: 0,
      borderRadius: 38,
      textAlign: "left",
    };
  }

  if (type === "hero") {
    return {
      backgroundColor: "#e7e1db",
      paddingTop: 80,
      paddingBottom: 80,
      borderRadius: 40,
      textAlign: "left",
    };
  }

  if (type === "categories") {
    return {
      backgroundColor: "#edf3ff",
      paddingTop: 80,
      paddingBottom: 80,
      borderRadius: 40,
      textAlign: "center",
    };
  }

  if (type === "products") {
    return {
      backgroundColor: "#f8fafc",
      paddingTop: 80,
      paddingBottom: 80,
      borderRadius: 40,
      textAlign: "center",
    };
  }

  if (type === "banner") {
    return {
      backgroundColor: "#020617",
      paddingTop: 80,
      paddingBottom: 80,
      borderRadius: 40,
      textAlign: "left",
    };
  }

  if (type === "faq") {
    return {
      backgroundColor: "#f3f3f3",
      paddingTop: 80,
      paddingBottom: 80,
      borderRadius: 40,
      textAlign: "left",
    };
  }

  return {
    backgroundColor: "#000000",
    paddingTop: 60,
    paddingBottom: 60,
    borderRadius: 40,
    textAlign: "left",
  };
}

const initialSections: EditorSection[] = [
  {
    id: "header-section",
    type: "header",
    label: "Header",
    hidden: false,
    content: {
      title: "MGD Fashion",
      subtitle: "Fashion",
    },
    styles: getDefaultStyles("header"),
  },
  {
    id: "hero-section",
    type: "hero",
    label: "Hero",
    hidden: false,
    content: {
      title: "Moda moderna",
      subtitle: "Estrutura visual profissional para marcas de moda.",
      buttonText: "Comprar agora",
    },
    styles: getDefaultStyles("hero"),
  },
  {
    id: "categories-section",
    type: "categories",
    label: "Categorias",
    hidden: false,
    content: {
      title: "Explore por estilo",
      subtitle: "Estrutura modular para categorias principais da loja virtual.",
      buttonText: "Explorar",
      "card-title-1": "Feminino",
      "card-title-2": "Masculino",
      "card-title-3": "Acessórios",
      "card-title-4": "Coleções",
      "card-subtitle-1": "Categoria visual premium.",
      "card-subtitle-2": "Categoria visual premium.",
      "card-subtitle-3": "Categoria visual premium.",
      "card-subtitle-4": "Categoria visual premium.",
    },
    styles: getDefaultStyles("categories"),
  },
  {
    id: "products-section",
    type: "products",
    label: "Produtos",
    hidden: false,
    content: {
      title: "Produtos em destaque",
      subtitle: "Seleção especial para sua loja.",
      buttonText: "Comprar",
      product1Title: "Produto Premium",
      product2Title: "Produto Premium",
      product3Title: "Produto Premium",
      product1Description: "Área visual para preview dos produtos.",
      product2Description: "Área visual para preview dos produtos.",
      product3Description: "Área visual para preview dos produtos.",
      product1Price: "R$ 199,90",
      product2Price: "R$ 199,90",
      product3Price: "R$ 199,90",
    },
    styles: getDefaultStyles("products"),
  },
  {
    id: "banner-section",
    type: "banner",
    label: "Banner",
    hidden: false,
    content: {
      title: "Fashion Weekend",
      subtitle: "Crie banners promocionais modernos para campanhas sazonais.",
      buttonText: "Explorar campanha",
    },
    styles: getDefaultStyles("banner"),
  },
  {
    id: "faq-section",
    type: "faq",
    label: "FAQ",
    hidden: false,
    content: {
      title: "Perguntas frequentes",
      subtitle: "Tire as principais dúvidas dos seus clientes.",
      faqQuestion1: "Como funciona o prazo de entrega?",
      faqQuestion2: "Posso trocar ou devolver uma peça?",
      faqQuestion3: "A loja aceita Pix e cartão?",
      faqAnswer1: "Resposta editável diretamente pelo editor visual.",
      faqAnswer2: "Resposta editável diretamente pelo editor visual.",
      faqAnswer3: "Resposta editável diretamente pelo editor visual.",
    },
    styles: getDefaultStyles("faq"),
  },
  {
    id: "footer-section",
    type: "footer",
    label: "Footer",
    hidden: false,
    content: {
      title: "MGD Fashion",
      subtitle: "Plataforma visual moderna para ecommerce profissional.",
      footerColumn1Title: "Navegação",
      footerColumn2Title: "Categorias",
      footerColumn3Title: "Redes sociais",
      footerNav1: "Home",
      footerNav2: "Produtos",
      footerNav3: "Coleções",
      footerNav4: "Contato",
      footerCategory1: "Feminino",
      footerCategory2: "Masculino",
      footerCategory3: "Acessórios",
      footerCategory4: "Promoções",
      footerSocial1: "Instagram",
      footerSocial2: "Facebook",
      footerSocial3: "TikTok",
      footerSocial4: "YouTube",
      copyright: "© 2026 MGD Ecommerce — Todos os direitos reservados.",
    },
    styles: getDefaultStyles("footer"),
  },
];

export const useEditor = create<EditorStore>((set, get) => ({
  selectedSection: "hero-section",
  previewDevice: "desktop",
  sections: initialSections,

  setPreviewDevice: (device) => {
    set({ previewDevice: device });
  },

  setSelectedSection: (id) => {
    set({ selectedSection: id });
  },

  setSections: (sections) => {
    set({ sections });
  },

  updateSectionContent: (sectionId, field, value) => {
    set({
      sections: get().sections.map((section) =>
        section.id === sectionId
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

  updateSectionStyles: (sectionId, styles) => {
    set({
      sections: get().sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              styles: {
                ...section.styles,
                ...styles,
              },
            }
          : section
      ),
    });
  },

  duplicateSection: (id) => {
    const section = get().sections.find((item) => item.id === id);

    if (!section) return;

    const newSection: EditorSection = {
      ...section,
      id: `${section.type}-${Date.now()}`,
      label: `${section.label} cópia`,
      content: { ...section.content },
      styles: { ...section.styles },
    };

    const index = get().sections.findIndex((item) => item.id === id);
    const updatedSections = [...get().sections];

    updatedSections.splice(index + 1, 0, newSection);

    set({
      sections: updatedSections,
      selectedSection: newSection.id,
    });
  },

  deleteSection: (id) => {
    const updatedSections = get().sections.filter(
      (section) => section.id !== id
    );

    set({
      sections: updatedSections,
      selectedSection: updatedSections[0]?.id || null,
    });
  },

  addSection: (type) => {
    const newSection: EditorSection = {
      id: `${type}-${Date.now()}`,
      type,
      label: labels[type],
      hidden: false,
      content: {},
      styles: getDefaultStyles(type),
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