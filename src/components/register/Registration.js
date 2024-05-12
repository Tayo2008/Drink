import React from 'react'
import { Link, NavLink } from "react-router-dom";
import low from "../../components/assets/pharmacist.png"

const Registration = () => {
  return (

    

    <div className="relative">
        <img
          src={low}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
    
        <section class="min-h-screen py-24">
            
            <div class="flex flex-1 items-center justify-center">
                <div class=" bg-white rounded shadow-2xl px-4 lg:px-24 py-16 lg:max-w-xl sm:max-w-md w-full text-center">
                    <form class="text-center">
                        <h1 class="font-bold tracking-wider text-3xl mb-8 w-full text-gray-600">
                            Sign Up
                        </h1>
                        <div class="py-2 text-left">
                            <input type="text" class=" border-2 border-gray-200 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="First name" />
                        </div>
                        <div class="py-2 text-left">
                            <input type="text" class=" border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Last name" />
                        </div>
                        <div class="py-2 text-left">
                            <input type="text" class=" border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Gender" />
                        </div>
                        <div class="py-2 text-left">
                            <input type="password" class=" border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Password" />
                        </div>
                        <div class="py-2 text-left">
                            <input type="password" class=" border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Comfirm Password" />
                        </div>
                        <div class="py-2 text-left">
                            <input type="text" class=" border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Adress" />
                        </div>
                        <div class="py-2 text-left">
                            <input type="text" class=" border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Nationalities" />
                        </div>
                        <div class="py-2 text-left">
                            <input type="text" class=" border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="Province" />
                        </div>
                        <div class="py-2 text-left">
                            <input type="text" class=" border-2 border-gray-100 focus:outline-none bg-gray-100 block w-full py-2 px-4 rounded-lg focus:border-gray-700 " placeholder="State" />
                        </div>
                        
                        <div class="py-2">
                            <button type="submit" class="border-2 border-gray-100 focus:outline-none bg-blue-600 text-white font-bold tracking-wider block w-full p-2 rounded-lg focus:border-gray-700 hover:bg-red-700">
                                Submit
                            </button>
                        </div>
                    </form>
                    <div class="text-center">
                        <a href="#" class="hover:underline">Forgot password?</a>
                    </div>
                    <div class="text-center mt-12">
                        <span>
                            Do you have an account?
                        </span>
                        <Link to="/login" class="text-md text-blue-600 underline font-semibold hover:text-blue-800"> Click to Login</Link>
                    </div>
                </div>
            </div>
        
        
        
            </section>
         
         </div>
         </div>


    
  )
}






export default Registration