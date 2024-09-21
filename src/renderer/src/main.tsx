import { RouterProvider } from 'react-router-dom'
import '@renderer/assets/index.css'

import ReactDOM from 'react-dom/client'
import router from '@renderer/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer />
  </>
)
