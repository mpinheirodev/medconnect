import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'
import { UserProvider } from './context/userContext'

export function App() {

  return (
    <UserProvider>
      <HelmetProvider>
        <Helmet titleTemplate="%s | MedConnect" />
        <RouterProvider router={router} />
      </HelmetProvider>
    </UserProvider>
  )
}
