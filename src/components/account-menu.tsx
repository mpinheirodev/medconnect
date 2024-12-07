import { LogOut, ScrollText, UserCircle, UserRound } from 'lucide-react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown-menu';

export function AccountMenu() {

  const [usuarioNome, setUsuarioNome] = useState<string | null>(null);
  const [usuarioEmail, setUsuarioEmail] = useState<string | null>(null);

  useEffect(() => {
    const nomeUsuario = localStorage.getItem("nome");
    const emailUsuario = localStorage.getItem("email");

    if (nomeUsuario) {
      setUsuarioEmail(emailUsuario);
      setUsuarioNome(nomeUsuario);
    }
  }, []);


  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/sign-in';
  };

  return (
    <div>
      {usuarioNome ? (
        <div className='flex'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="bg-emerald-500 flex select-none items-center gap-2 text-accent font-bold shadow hover:bg-emerald-600"
              >
                <UserCircle className="h-4 w-4" />
                {usuarioNome}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="flex flex-col">
                <span>{usuarioNome}</span>
                <span className="text-xs font-normal text-muted-foreground">
                  {usuarioEmail}
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => window.location.href = "/profile"}>
                <UserCircle className="mr-2 h-4 w-4" />
                <span>Perfil do usuário</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => window.location.href = "/consultations"}>
                <ScrollText className="mr-2 h-4 w-4" />
                <span>Minhas consultas</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-rose-500 dark:text-rose-400" onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sair</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <Link to='/sign-in'>
          <Button className="flex select-none items-center gap-2 bg-emerald-500 border-emerald-500 hover:bg-emerald-600">
            <UserRound className="h-4 w-4" />
            Entrar
          </Button>
        </Link>
      )}
    </div>
  )
}