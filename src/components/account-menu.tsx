import { UserRound } from 'lucide-react'

import { Button } from './ui/button'

import { Link } from 'react-router-dom'

export function AccountMenu() {
  return (
    <Link to='/sign-in'>
      <Button
        className="flex select-none items-center gap-2 bg-emerald-500 border-emerald-500 hover:bg-emerald-600"
      >
        <UserRound className="h-4 w-4" />
        Entrar
      </Button>
    </Link>
  )
}