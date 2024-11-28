import { CircleHelp, Info, Syringe } from 'lucide-react'

import { NavLink } from './nav-link'
import { AccountMenu } from './account-menu'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <div className="bg-emerald-700 text-slate-50 py-3">
      <div className="flex h-16 items-center gap-2 px-6">
        <Link to='/' className='flex items-center gap-2'>
          <Syringe className="h-6 w-6" />
          <h1 className='text-2xl font-semibold'>
            MedConnect
          </h1>
        </Link>

        <div className="ml-auto flex items-center gap-4">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <NavLink to="/">
              <CircleHelp className="h-4 w-4" />
              Ajuda
            </NavLink>
            <NavLink to="/about">
              <Info className="h-4 w-4" />
              Sobre nós
            </NavLink>
          </nav>
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}