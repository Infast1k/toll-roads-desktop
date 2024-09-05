import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@renderer/pages/LoginPage'
import RegisterPage from '@renderer/pages/RegisterPage'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  }
])

export default router
