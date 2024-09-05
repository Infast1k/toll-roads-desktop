import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '@renderer/pages/LoginPage'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  }
])

export default router
