import { useNavigate} from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { goToLoginPage } from '../routes/Coordinator'

const useProtectedPage = () => {
  const navigate = useNavigate()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (!token){
      goToLoginPage(navigate)
    }
  }, [navigate])
}

export default useProtectedPage