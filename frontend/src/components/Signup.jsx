import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Signup = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = async (data) => {
    // console.log(data)
    
    const userInfo ={
      username: data.username,
      email: data.email,
      password: data.password,
    }
    await axios.post("http://localhost:3000/user/signup", userInfo).then((res) => {
      if(res.data){
        console.log(res.data)
        // alert(res.data.message)
        toast.success("User registered successfully")
      
      }
      localStorage.setItem("User", JSON.stringify(res.data.user))
      navigate('/')

    }).catch((err) => {
      console.log("Error getting : ", err)
      if(err){
        toast.error(err.response.data.message)
      }

    });
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">Signup</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 dark:text-gray-200 mb-2">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-gray-200"
            {...register("username",{required:true})}
          />
           {errors.username && <span className='text-red-600'>Username is required</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-gray-200"
            {...register("email",{required:true})}
          />
           {errors.email && <span className='text-red-600'>Email is required</span>}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 dark:text-gray-200 mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-gray-200"
            {...register("password",{required:true,minLength:6})}
          />
           {errors.password && <span className='text-red-600'>Password is required and Minlength 6</span>}
        </div>
        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900"
        >
          Signup
        </button>
        <div className="mt-4 text-center">
          <span className="text-gray-600 dark:text-gray-400">Have Account? </span>
          <Link to="/" className="text-pink-500 hover:text-pink-600">Login</Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Signup
