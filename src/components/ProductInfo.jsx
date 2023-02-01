import React from 'react'
import { useState } from 'react'

const ProductInfo = ({ingredients, nutritional, additional}) => {

  const [openIngredients, setOpenIngredients] = useState(false)
  const [openNutritional, setOpenNutritional] = useState(false)
  const [openAdditional, setOpenAdditional] = useState(false)

  return (
    <div className="grid grid-cols-1 lg:w-1/2  rounded-lg h-40 sm:mt-0 mt-14 gap-4 lg:ml-20">
          <button onClick={() => {setOpenIngredients(!openIngredients); setOpenNutritional(false); setOpenAdditional(false)}}
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white w-full sm:w-1/2 text-center mx-auto border uppercase border-gray-400 focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm  py-5   inline-flex items-center"
            type="button"
          >
            <div className="flex mx-auto">
            <p className="">Ingredients</p>
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
            </div>
          </button>
          {openIngredients?
          <div
            id="dropdown"
            className="z-10 rounded shadow  text-left"
          >
            <ul
              className="py-1 text-sm"
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <p
                  href="#"
                  className="block px-4 py-2 "
                >
                 {ingredients}
                </p>
              </li>
            </ul>
          </div>
          : <></>}
          
          <button onClick={() => {setOpenNutritional(!openNutritional); setOpenIngredients(false); setOpenAdditional(false)}}
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white w-full sm:w-1/2 mx-auto border uppercase border-gray-400 focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-12 py-2.5  inline-flex items-center"
            type="button"
          >
            <div className="flex mx-auto">
            Nutritional <br></br> Information
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
            </div>
          </button>
          {openNutritional ? 
          <div
            id="dropdown"
            className="z-10 rounded shadow "
          >
            <ul
              className="py-1 text-sm "
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <p
                  href="#"
                  className="block px-4 py-2 "
                >
                  {nutritional}
                </p>
              </li>
            </ul>
          </div>
           : <></>}
          <button onClick={() => {setOpenAdditional(!openAdditional); setOpenIngredients(false); setOpenNutritional(false)}}
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white w-full  sm:w-1/2 mx-auto border uppercase border-gray-400 focus:ring-1 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-12 py-2.5 inline-flex items-center"
            type="button"
          >
            <div className="flex mx-auto">
            Additional <br></br> Information
            <svg
              className="w-4 h-4 ml-2"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
            </div>
          </button>
          {openAdditional ?
          <div
            id="dropdown"
            className="z-10 rounded shadow "
          >
            <ul
              className="py-1 text-sm "
              aria-labelledby="dropdownDefaultButton"
            >
              <li>
                <p
                  href="#"
                  className="block px-4 py-2  "
                >
                  {additional}
                </p>
              </li>
            </ul>
          </div>
           : <></>}
        </div>
       
  )
}

export default ProductInfo