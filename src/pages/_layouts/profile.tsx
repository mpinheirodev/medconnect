import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MenuLateral } from '@/components/menu-lateral'

export function ProfileLayout() {
  return (
    <div>
      <Header />
      <div className="h-[calc(100vh-101px)] w-screen bg-green-100 flex">
        <MenuLateral />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}