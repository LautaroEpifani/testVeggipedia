import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/authContext'

const ProtectedReviews = ({children}) => {
  const {stateUser, loading} = useAuth()

  if (loading) return <h1>Loading</h1>

  if(!stateUser()) return <Navigate to="/login"/>
  
  return <>{children}</> 
}

export default ProtectedReviews