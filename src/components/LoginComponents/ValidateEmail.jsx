import { reload } from 'firebase/auth'
import React from 'react'
import { useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'

const ValidateEmail = () => {

  

  return (
    <div>
     <div className="flex-col text-center mt-40 text-pink-700 font-bold">
      <h1 className="m-10 text-4xl">You need to validate your Email</h1>
      
      <p className="m-10 text-2xl">Go to Gmail</p>
      <Link
        to="/"
      >
      <button className="btn btn-outline btn-error">Back to Home</button>
      </Link>
    </div> 
    </div>
    
  )
}

export default ValidateEmail