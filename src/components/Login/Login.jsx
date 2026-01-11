import React, { useState } from "react";
import Navbar from "../Navbar";
import { Link, useNavigate } from "react-router";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/login",
        formData,
        {
          withCredentials: true,
        }
      );
      if (data?.status === 201) {
        navigate("/");
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <>
      <Navbar />
      <section>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
            {/* Header */}
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800">
                Login a Account
              </h1>
              <p className="text-gray-500 mt-2">Sign up to get started</p>
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 active:scale-95 transition-transform"
              >
                Register
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-sm text-gray-500 mt-6">
              You Are a New User?{" "}
              <Link
                to={"/register"}
                className="text-indigo-600 font-medium cursor-pointer hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
