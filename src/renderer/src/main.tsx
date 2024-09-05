import { RouterProvider } from 'react-router-dom'
import '@renderer/assets/index.css'

import ReactDOM from 'react-dom/client'
import router from '@renderer/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
