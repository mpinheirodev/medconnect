import { Syringe } from 'lucide-react'
import { Link, Outlet } from 'react-router-dom'
import doctor2 from '@/assets/doctor2.png'

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2 antialiased">
      <div className="flex h-full flex-col justify-between bg-emerald-700 p-10 text-muted-foreground">
        <div className="flex items-center gap-3 text-lg font-medium text-accent">
          <Link to='/' className='flex items-center gap-2'>
            <Syringe className="h-6 w-6" />
              MedConnect
          </Link>
        </div>
        <div className='flex-1 flex flex-col items-center justify-center'>
          <h1 className='w-80 text-accent font-bold text-4xl'>CADA CONSULTA, FEITA PARA VOCÊ</h1>
          <img src={doctor2} alt="" className='h-[600px]' />
        </div>
        <footer className="text-sm text-accent">
          &copy; MEGA | {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center bg-muted">
        <Outlet />
      </div>
    </div>
  )
}
