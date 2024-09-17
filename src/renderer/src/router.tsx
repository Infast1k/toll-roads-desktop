import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@renderer/pages/LoginPage'
import RegisterPage from '@renderer/pages/RegisterPage'
import HomePage from '@renderer/pages/HomePage'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
  {
    path: '/',
    element: <HomePage />
  }
])

export default router
