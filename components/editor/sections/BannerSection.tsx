export function BannerSection() {
  return (
    <section className="px-10 py-10">
      <div className="overflow-hidden rounded-[40px] bg-black px-10 py-20 text-white">
        <div className="max-w-3xl">
          <span className="text-sm uppercase tracking-[0.4em] text-zinc-500">
            Campanha especial
          </span>

          <h2 className="mt-6 text-6xl font-black leading-[0.95]">
            Fashion Weekend
          </h2>

          <p className="mt-8 text-xl leading-relaxed text-zinc-400">
            Crie banners promocionais modernos para campanhas sazonais,
            descontos e lançamentos da loja.
          </p>

          <button className="mt-10 rounded-full bg-white px-8 py-5 font-bold text-black">
            Explorar campanha
          </button>
        </div>
      </div>
    </section>
  );
}