import React from 'react'
import { Link, NavLink } from "react-router-dom";
import cat from "../../components/assets/lookingforcare.jpg"
const Login = () => {
  return (

    <div className="relative">
        <img
          src={cat}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
    
        <section class="min-h-screen flex flex-col">
            
            <div class="flex py-56 items-center justify-center">
                <div class="bg-white rounded shadow-2xl px-4 lg:px-24 py-14 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form class="text-center">
                        <h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                            Sign In
                        </h1>
                        <div class="py-2 text-left">
                            <input type="email" class="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Email" />
                        </div>
                        <div class="py-2 text-left">
                            <input type="password" class="bg-gray-200 border-2 border-gray-100 focus:outline-none block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Password" />
                        </div>
                        <div class="py-2">
                            <button type="submit" class="border-2 border-gray-100 focus:outline-none bg-blue-500 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-red-700">
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div class="text-center">
                        <a href="#" class="hover:underline">Forgot password?</a>
                    </div>
                    <div class="text-center mt-12">
                        <span>
                            Don't have an account?
                        </span>
                        <Link to="/signup" class="font-light text-md text-blue-600 underline  hover:text-blue-800"> Create One</Link>
                    </div>
                </div>
            </div>
        </section>
    </div>
 </div>
    
  )
}

export default Login