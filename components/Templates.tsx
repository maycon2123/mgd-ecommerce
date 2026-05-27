"use client";

import Link from "next/link";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

type Template = {
  title: string;
  category: string;
  href: string;
  description: string;
};

export function Templates() {
  const swiperRef = useRef<SwiperType | null>(null);

  const templates: Template[] = [
    {
      title: "Fashion Store",
      category: "Moda",
      href: "/templates/fashion",
      description: "Template premium para lojas de moda e acessórios.",
    },
    {
      title: "Baby Kids",
      category: "Infantil",
      href: "/templates/babykids",
      description: "Template delicado para enxoval e produtos infantis.",
    },
    {
      title: "Auto Parts",
      category: "Autopeças",
      href: "/templates/autoparts",
      description: "Template técnico para catálogo automotivo.",
    },
    {
      title: "Tech Store",
      category: "Tecnologia",
      href: "#",
      description: "Ideal para eletrônicos, gadgets e informática.",
    },
    {
      title: "Beauty Shop",
      category: "Beleza",
      href: "#",
      description: "Cosméticos, skincare e perfumaria premium.",
    },
    {
      title: "Home Decor",
      category: "Decoração",
      href: "#",
      description: "Móveis, decoração e ambientes modernos.",
    },
    {
      title: "Pet Shop",
      category: "Pets",
      href: "#",
      description: "Produtos para cães, gatos e pets em geral.",
    },
    {
      title: "Market Store",
      category: "Mercado",
      href: "#",
      description: "Mercado online com categorias e ofertas.",
    },
    {
      title: "Pharmacy Store",
      category: "Farmácia",
      href: "#",
      description: "Farmácia moderna com catálogo inteligente.",
    },
    {
      title: "Restaurant Delivery",
      category: "Delivery",
      href: "#",
      description: "Template para restaurantes e delivery online.",
    },
    {
      title: "Fitness Store",
      category: "Fitness",
      href: "#",
      description: "Suplementos, roupas fitness e acessórios.",
    },
    {
      title: "Jewelry Store",
      category: "Joalheria",
      href: "#",
      description: "Template sofisticado para joias e relógios.",
    },
    {
      title: "Optical Store",
      category: "Ótica",
      href: "#",
      description: "Óculos, lentes e produtos ópticos.",
    },
    {
      title: "Construction Store",
      category: "Construção",
      href: "#",
      description: "Materiais de construção e ferramentas.",
    },
    {
      title: "Furniture Store",
      category: "Móveis",
      href: "#",
      description: "Loja moderna para móveis e ambientes.",
    },
    {
      title: "Sneaker Store",
      category: "Calçados",
      href: "#",
      description: "Tênis, calçados e streetwear.",
    },
    {
      title: "Paper Store",
      category: "Papelaria",
      href: "#",
      description: "Produtos escolares e papelaria criativa.",
    },
    {
      title: "Marketplace",
      category: "Marketplace",
      href: "#",
      description: "Estrutura multi-vendedor estilo marketplace.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="mb-20 max-w-4xl">
          <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            Templates inteligentes
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-[1.05] md:text-6xl">
            Layouts modernos para qualquer nicho
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-zinc-400 md:text-2xl">
            Escolha templates profissionais desenvolvidos para maximizar
            conversão, performance e experiência visual da sua loja.
          </p>
        </div>

        <div className="relative">
          <button
            type="button"
            aria-label="Template anterior"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute -left-24 top-[52%] z-30 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-4xl text-white backdrop-blur-xl transition hover:bg-white/20 xl:flex"
          >
            ‹
          </button>

          <button
            type="button"
            aria-label="Próximo template"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute -right-24 top-[52%] z-30 hidden h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-4xl text-white backdrop-blur-xl transition hover:bg-white/20 xl:flex"
          >
            ›
          </button>

          <div className="mx-auto max-w-[1250px] overflow-hidden">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={36}
              slidesPerView={1}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {templates.map((template) => (
                <SwiperSlide key={template.title}>
                  <article className="group overflow-hidden rounded-[38px] border border-zinc-800 bg-zinc-950 transition hover:-translate-y-2 hover:border-white/20">
                    <div className="flex h-[520px] items-center justify-center bg-gradient-to-br from-zinc-900 to-zinc-800">
                      <div className="px-10 text-center">
                        <p className="text-lg uppercase tracking-[0.45em] text-zinc-500">
                          {template.category}
                        </p>

                        <h3 className="mt-10 text-5xl font-bold leading-tight">
                          {template.title}
                        </h3>

                        <p className="mx-auto mt-6 max-w-xs text-zinc-400">
                          {template.description}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-zinc-800 bg-black p-8">
                      {template.href === "#" ? (
                        <button
                          type="button"
                          className="block w-full cursor-not-allowed rounded-[22px] bg-zinc-800 py-5 text-center text-xl font-semibold text-zinc-500"
                        >
                          Em breve
                        </button>
                      ) : (
                        <Link
                          href={template.href}
                          className="block w-full rounded-[22px] bg-white py-5 text-center text-xl font-semibold text-black transition group-hover:scale-[1.02]"
                        >
                          Visualizar Template
                        </Link>
                      )}
                    </div>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}