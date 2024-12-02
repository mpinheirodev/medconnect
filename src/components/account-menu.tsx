import { UserRound } from 'lucide-react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useUser } from '@/context/userContext';

export function AccountMenu() {
  const { user, loading } = useUser();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!user) {
      return <Link to='/sign-in'>
      <Button className="flex select-none items-center gap-2 bg-emerald-500 border-emerald-500 hover:bg-emerald-600">
        <UserRound className="h-4 w-4" />
        Entrar
      </Button>
    </Link>
  }

  console.log(user)
  // const [usuarioNome, setUsuarioNome] = useState<string | null>(null);

  // useEffect(() => {
  //   const nomeUsuario = localStorage.getItem("nome");
  //   if (nomeUsuario) {
  //     console.log(nomeUsuario)
  //     setUsuarioNome(nomeUsuario);
  //   }
  // }, []);

  return (
    <div>
      {/* {usuarioNome ? (
        <div className='flex'>
          <Avatar onClick={() => window.location.href = "/profile"} className='cursor-pointer'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-green-950 font-bold w-[100px] text-center">Seja bem-vindo, {usuarioNome}!</p>
        </div>
      ) : ( */}
        <Link to='/sign-in'>
          <Button className="flex select-none items-center gap-2 bg-emerald-500 border-emerald-500 hover:bg-emerald-600">
            <UserRound className="h-4 w-4" />
            Entrar
          </Button>
        </Link>
      {/* )} */}
    </div>
  )
}