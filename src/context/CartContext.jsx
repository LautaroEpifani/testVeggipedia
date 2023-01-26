import React, { createContext, useState, useContext } from 'react'
const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {

   const [reviewsList, setReviewsList] = useState([]) 

    

  return (
    <CartContext.Provider value={{
      
      
      setReviewsList,
      reviewsList
      
    }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider