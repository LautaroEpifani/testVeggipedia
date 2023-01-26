import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/authContext';
import { logo, close, menu, user} from "../assets/img"

const NavGraphic = () => {
  const { logout, stateUser } = useAuth();

   const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const handleLogOut = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
      <div className="">
      <div className="list-none sm:flex hidden flex-1 justify-between px-20 items-center text-xs lg:text-base mb-2 bg-primary">
        <div className="p-4">
          <NavLink to="/">
             <img src={logo} alt="" className="w-[150px] h-[120px]" />
          </NavLink>
        </div>
        <ul className="flex gap-10 w-1/2 justify-center items-center   cursor-pointer font-bold  uppercase tracking-wide">
          <li className=" group relative dropdown text-white hover:text-slate-300  cursor-pointer font-bold  uppercase tracking-wide">
            <NavLink to="/graphic">Ranking</NavLink>
          </li>
          <li className=" group relative dropdown   text-white hover:text-slate-300   cursor-pointer font-bold  uppercase tracking-wide">
            <NavLink to="/products">List of products</NavLink>
          </li>
          <li className=" group relative dropdown text-white hover:text-slate-300  cursor-pointer font-bold uppercase tracking-wide">
            <NavLink to="/formproduct">Upload a product</NavLink>
          </li>
          <li className=" group relative dropdown  text-white hover:text-slate-300 cursor-pointer font-bold uppercase tracking-wide">
            <div className="flex gap-2 items-center">
              <p>My Account</p>
              <svg
                className="w-4 h-4 ml-2 mt-1"
                aria-hidden="true"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
              
            </div>
            <div className="group-hover:block absolute hidden h-auto">
              <ul className=" bg-primary shadow w-full">
                <li className="block  font-bold uppercase text-white hover:text-slate-300  cursor-pointer py-2 px-1 ">
                  <NavLink to="/login">Sign In</NavLink>
                </li>
                <li className="block  font-bold uppercase text-white hover:text-slate-300  cursor-pointer  px-1 ">
                  <NavLink to="/register">Sign Up</NavLink>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <ul className="flex gap-2">
          {!stateUser() ? (
            <li></li>
          ) : (
            <li className="w-44 group relative dropdown  px-4 text-white hover:text-slate-300 cursor-pointer font-bold  uppercase tracking-wide">
              <div>
                <div className="flex items-center gap-2 rounded py-2 px-4 text-white hover:text-slate-300 cursor-pointer font-bold  uppercase tracking-wide">
                  <img className="w-[30px] h-[30px]" src={user} alt="" />
                  <p className="whitespace-nowrap">{stateUser().displayName}</p> 
                </div>
              </div>
              <div className="group-hover:block absolute hidden h-auto">
                <ul className=" bg-primary shadow w-full">
                  {stateUser() ? (
                    <li className="block">
                      <button
                        className=" rounded py-2 px-4  text-white hover:text-slate-300 cursor-pointer font-bold  uppercase tracking-wide"
                        onClick={handleLogOut}
                      >
                        LogOut
                      </button>
                    </li>
                  ) : (
                    <li className="block"></li>
                  )}
                </ul>
              </div>
            </li>
          )}
        </ul>
      </div>
      <div className="sm:hidden flex-col justify-end items-center">
        <div className="flex justify-between p-4">
        <div className='flex gap-4'>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
      
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } mb-4 bg-black-gradient  min-w-[140px] rounded-xl sidebar text-xs text-left`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
           <li className=" group relative dropdown text-white hover:text-slate-300  cursor-pointer font-bold  uppercase tracking-wide ">
            <NavLink to="/graphic">Ranking</NavLink>
          </li>
          <li className=" group relative dropdown   text-white hover:text-slate-300   cursor-pointer font-bold  uppercase tracking-wide">
            <NavLink to="/products">List of products</NavLink>
          </li>
          <li className=" group relative dropdown text-white hover:text-slate-300  cursor-pointer font-bold uppercase tracking-wide">
            <NavLink to="/formproduct">Upload a product</NavLink>
          </li>
          <li className=" group relative dropdown  text-white hover:text-slate-300 cursor-pointer font-bold uppercase tracking-wide">
            <div className="flex gap-2 items-center">
              <p>My Account</p>
              <svg
                className="w-4 h-4 ml-2 mt-1"
                aria-hidden="true"
                fill="none"
                stroke="black"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 9l-7 7-7-7"></path>
              </svg>
              
            </div>
            <div className="group-hover:block absolute hidden ">
              <ul className=" bg-primary shadow w-full flex">
                <li className="block w-20 font-bold uppercase text-white hover:text-slate-300  cursor-pointer ">
                  <NavLink to="/login">Sign In</NavLink>
                </li>
                <li className="block w-20 font-bold uppercase text-white hover:text-slate-300  cursor-pointer ">
                  <NavLink to="/register">Sign Up</NavLink>
                </li>
              </ul>
            </div>
          </li>
          </ul>
          <div>
          <ul className="flex">
          {!stateUser() ? (
            <li></li>
          ) : (
            <li className="w-20 group relative dropdown  px-4 text-white hover:text-slate-300 cursor-pointer font-bold  uppercase tracking-wide">
              <div>
                <div className="flex items-center gap-2 rounded py-2 px-4 text-white hover:text-slate-300 cursor-pointer font-bold  uppercase tracking-wide">
                  <img className="w-[30px] h-[30px]" src={user} alt="" />
                  <p className="whitespace-nowrap">{stateUser().displayName}</p> 
                </div>
              </div>
              <div className="group-hover:block absolute hidden h-auto">
                <ul className=" bg-primary shadow w-full">
                  {stateUser() ? (
                    <li className="block">
                      <button
                        className=" rounded py-2 px-4  text-white hover:text-slate-300 cursor-pointer font-bold  uppercase tracking-wide"
                        onClick={handleLogOut}
                      >
                        LogOut
                      </button>
                    </li>
                  ) : (
                    <li className="block"></li>
                  )}
                </ul>
                </div>
            </li>
          )}
        </ul>
                </div>
        </div>
        </div>
          <Link to="/"><img src={logo} alt="" width={80}/></Link>
          
      </div>
     
      </div>
    </div>         
  );
};

export default NavGraphic