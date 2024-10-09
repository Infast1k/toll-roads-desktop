import { toast } from 'react-toastify'

const notify = (message: string, isError: boolean) => {
  isError ? toast.error(message) : toast.success(message)
}

export default notify
