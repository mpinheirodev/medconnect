import { House, List, ScrollText, User, X } from "lucide-react";
import { NavLink } from "./nav-link";

export function MenuLateral() {

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/sign-in';
  };

  return (
    <aside className="w-[300px] bg-emerald-700 text-accent flex flex-col p-6 gap-8 justify-between">
      <nav className="flex flex-col gap-6">
        <NavLink to="/" className="flex gap-4 text-xl items-center">
          <House />
          Home
        </NavLink>
        <NavLink to="/profile" className="flex gap-4 text-xl items-center">
          <User />
          Perfil
        </NavLink>
        <NavLink to="/appointment" className="flex gap-4 text-xl items-center">
          <ScrollText />
          Minhas Consultas
        </NavLink>
      </nav>

      <NavLink onClick={handleLogout} to="#" className="text-xl flex items-center gap-4 hover:text-rose-500">
        <X />
        Sair da Conta
      </NavLink>
    </aside>
  )
}