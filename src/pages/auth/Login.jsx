import React, { useState } from "react";
import { EmailLogin, GoogleAuth } from "../../Firebase";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signinWithGoogle = async () => {
    const res = await GoogleAuth();
    localStorage.setItem("user", JSON.stringify(res));
    console.log(res);
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await EmailLogin(email, password);
    localStorage.setItem("user", JSON.stringify(res));
    console.log(res);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-gray-600">Or sign in with</span>
          <button
            onClick={signinWithGoogle}
            className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
          >
            Google
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
