const questions = [
  "Como funciona o prazo de entrega?",
  "Posso trocar ou devolver uma peça?",
  "A loja aceita Pix e cartão?",
  "Os produtos podem ser editados?",
];

export function FaqSection() {
  return (
    <section className="px-10 py-20">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <span className="text-sm uppercase tracking-[0.35em] text-zinc-500">
            Dúvidas frequentes
          </span>

          <h2 className="mt-6 text-6xl font-black leading-[0.95] text-black">
            Compra simples,
            <br />
            segura e moderna.
          </h2>

          <p className="mt-8 max-w-xl text-xl leading-relaxed text-zinc-600">
            Área destinada para perguntas frequentes da loja virtual.
          </p>
        </div>

        <div className="space-y-6">
          {questions.map((question) => (
            <article
              key={question}
              className="rounded-[28px] border border-black/5 bg-white p-8 shadow-sm"
            >
              <h3 className="text-2xl font-black text-black">
                {question}
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                Resposta editável diretamente pelo editor visual da loja.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}