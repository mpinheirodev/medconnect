import { House, List, ScrollText, User, X } from "lucide-react";

export function MenuLateral() {
  return (
    <aside className="w-[300px] bg-green-700 text-neutral-50 flex flex-col p-6 gap-8">
      <h1 className="text-xl font-title">MedConnect</h1>
      <nav className="flex flex-col gap-4">
        <a href="/" className="flex items-center gap-4 text-neutral-50">
          <span><House /></span> Home
        </a>
        <a href="/profile" className="flex items-center gap-4 font-semibold text-neutral-50">
          <span><User /></span> Perfil
        </a>
        <a href="/appointment" className="flex items-center gap-4">
          <span><ScrollText /></span> Minhas Consultas
        </a>
        <a href="/history" className="flex items-center gap-4">
          <span><List /></span> Histórico
        </a>
      </nav>
      <a href="/sign-out" className="mt-auto flex items-center gap-4 text-neutral-50">
        <span><X /></span> Sair da Conta
      </a>
    </aside>
  )
}