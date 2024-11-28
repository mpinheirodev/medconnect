import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { Welcome } from './pages/app/welcome'
import { Scheduling } from './pages/app/scheduling'
import { AuthLayout } from '@/pages/_layouts/auth'
import { SignIn } from './pages/auth/sign-in'
import { SignUp } from './pages/auth/sign-up'
import { Confimation } from './pages/app/confirmation'
import { Profile } from './pages/app/profile'
import { ProfileLayout } from './pages/_layouts/profile'
import { MinhaConsulta } from './pages/app/minhaConsulta'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <Welcome /> },
      { path: '/scheduling', element: <Scheduling /> },
      { path: '/confirmation', element: <Confimation /> },
    ],
  },
  {
    path: '/',
    element: <ProfileLayout />,
    children: [
      { path: '/profile', element: <Profile /> },
      { path: '/appointment', element: <MinhaConsulta /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
])