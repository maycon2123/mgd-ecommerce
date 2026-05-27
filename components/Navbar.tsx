export function Navbar() {
  return (
    <header className="border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="text-2xl font-bold">
          MGD Ecommerce
        </h1>

        <nav className="flex gap-6 text-sm">
          <a href="#">Início</a>
          <a href="#">Templates</a>
          <a href="#">Recursos</a>
          <a href="#">Planos</a>
        </nav>
      </div>
    </header>
  );
}