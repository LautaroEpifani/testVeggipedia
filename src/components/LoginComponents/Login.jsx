import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from '../../context/authContext';
import Alert from "./Alert";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { login, loginWithGoogle, resetPassword, stateUser } = useAuth();

  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/graphic");
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("Correo Inválido");
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña Inválida");
      }
      if (error.code === "auth/invalid-email") {
        setError("Correo Inválido");
      }
      if (error.code === "auth/weak-password") {
        setError("Contraseña Inválida");
      }
      console.log(error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/graphic");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleResetPassword = async () => {
    if(!user.email) return setError("Por favor ingresa tu correo")
    try {
      await resetPassword(user.email)
      setError("Te hemos enviado un correo con un enlace para que restablezcas tu contraseña")
    } catch (error) {
      setError(error.message)
    }
  }

   if (stateUser()) return <Navigate to="/graphic"/>

  return (
    <div className="bg-primary h-screen pt-20">
    <div className="w-full max-w-lg m-auto px-2">
      {error && <Alert message={error} />}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-white
    shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
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
            placeholder="youremail@company.com"
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

        <div className=" flex items-center justify-between">
          <button className="bg-pink-500 hover:bg-pink-700 text-sm text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Login
          </button>
          <a onClick={handleResetPassword}
            className="inline-block align-baseline font-bold text-sm
        text-pink-500 hover:text-pink-800"
            href="#!"
          >
            Forgot your Password?
          </a>
        </div>
      </form>

      <p className="my-4 text-sm flex justify-between px-3">
        Don't have an Account?
        <Link to="/register"> Sign Up</Link>
      </p>
      <button
        className="w-full bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4"
        onClick={handleGoogleSignIn}
      >
        Login with Google
      </button>
    </div>
    </div>
  );
};

export default Login;
