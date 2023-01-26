import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'


const ProtectedUpload = ({children}) => {
    const {stateUser, loading} = useAuth()

  if (loading) return <h1>Loading</h1>

  if(!stateUser()) return <Navigate to="/login"/>

  if(stateUser()) {
    
    if(stateUser().email !== "epifanilautaro@gmail.com") {
         return <Navigate to="/graphic"/>
    }     
    
  }

  
  return <>{children}</> 
}

export default ProtectedUpload