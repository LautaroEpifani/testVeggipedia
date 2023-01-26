import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/authContext';
import Alert from "./Alert";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    userName: "",
  });

  const navigate = useNavigate();

  const { signup, stateUser } = useAuth();

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password, user.userName);
      navigate("/graphic");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("Correo Inválido");
      }
      if (error.code === "auth/weak-password") {
        setError("Contraseña Inválida");
      }
      console.log(error);
    }
  };

  if (stateUser()) return <Navigate to="/"/>

  return (
    <div className="bg-primary pt-20 h-screen">
    <div className="w-full max-w-lg m-auto px-2">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        noValidate
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Username
          </label>
          <input
            className="  shadow appearance-none border border-gray-300 rounded w-full py-2
            px-3 text-gray-700 leading-tight focus: outline-none focus:border-gray-400"
            type="text"
            name="userName"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border border-gray-300 rounded w-full py-2
      px-3 text-gray-700 leading-tight focus: outline-none focus:border-gray-400"
            type="email"
            name="email"
            placeholder="youremail@company.ltd"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-gray-300 rounded w-full py-2
      px-3 text-gray-700 leading-tight focus: outline-none focus:border-gray-400"
            type="password"
            name="password"
            id="password"
            placeholder="*******"
            onChange={handleChange}
          />
        </div>

        
        <button className="bg-pink-500 hover:bg-pink-700 text-sm text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Sign Up
        </button>
      </form>
      <p className="my-4 text-sm flex justify-between px-3">
          Have an Account?
          <Link to="/login">Sign In</Link>
        </p>  
    </div>
    </div>
  );
};

export default Register;
