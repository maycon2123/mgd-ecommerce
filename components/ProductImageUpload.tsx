"use client";

import { useRef, useState } from "react";
import { ImagePlus, Trash2 } from "lucide-react";

export function ProductImageUpload() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [preview, setPreview] = useState<string | null>(null);

  function handleSelectImage(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);
  }

  function removeImage() {
    setPreview(null);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-black">Imagem do produto</h2>

        <p className="mt-2 text-zinc-500">
          Faça upload da foto principal do produto.
        </p>
      </div>

      {!preview ? (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          className="flex h-72 w-full flex-col items-center justify-center rounded-[28px] border border-dashed border-white/20 bg-black transition hover:border-white/40"
        >
          <ImagePlus size={42} className="mb-4 text-zinc-500" />

          <span className="text-lg font-bold">
            Clique para enviar imagem
          </span>

          <span className="mt-2 text-sm text-zinc-500">
            PNG, JPG ou WEBP
          </span>
        </button>
      ) : (
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black">
          <img
            src={preview}
            alt="Preview"
            className="h-72 w-full object-cover"
          />

          <div className="flex items-center justify-between border-t border-white/10 p-5">
            <span className="text-sm text-zinc-400">
              Imagem carregada com sucesso
            </span>

            <button
              type="button"
              onClick={removeImage}
              className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-2 font-semibold text-red-400 transition hover:bg-red-500 hover:text-white"
            >
              <Trash2 size={18} />
              Remover
            </button>
          </div>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleSelectImage}
        className="hidden"
      />
    </div>
  );
}