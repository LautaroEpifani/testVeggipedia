import {useEffect} from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const ProtectedReviews = ({children}) => {
  const {loading, checkVerified, stateUser,} = useAuth()

  if (loading) return <h1>Loading</h1>

  
  if(stateUser()) {
    if(!checkVerified()) return <Navigate to="/validateEmail"/>    
  
  }else return <Navigate to="/graphic"/> 
  
  
  return <>{children}</> 
}

export default ProtectedReviews