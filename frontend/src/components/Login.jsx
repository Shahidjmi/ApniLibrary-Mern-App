import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast';
import Logout from './Logout';



const Login = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()



  const onSubmit = async (data) => {
    const userInfo ={
      username: data.username,
      email: data.email,
      password: data.password,
    }
    await axios.post("http://localhost:3000/user/login", userInfo).then((res) => {
      if(res.data){
        // console.log(res.data)
        // alert(res.data.message)
   
        toast.success('User loggedin successfully');
        localStorage.setItem("User", JSON.stringify(res.data.user));
  document.getElementById("my_modal_3").close();
  setTimeout(() =>{
    window.location.reload();
  },1000)
      
      }
     

    }).catch((err) => {
      // console.log("Error getting : ", err)
      if(err){
        toast.error(err.response.data.message)
      }

    });
  }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      
    </form>
    <h2 className="text-2xl font-bold mb-6 text-gray-100 dark:text-gray-100 ">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-100 dark:text-gray-200 mb-2">Email</label>
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
            <label htmlFor="password" className="block text-gray-100 dark:text-gray-200 mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-700 dark:text-gray-200"
              {...register("password",{required:true})}
            />
             {errors.password && <span className='text-red-600'>Password is required</span>}
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-900"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <span className="text-gray-400 dark:text-gray-400">Not registered? </span>
            <Link to='/signup' className="text-pink-500 hover:text-pink-600">Sign up</Link>
          </div>
        </form>
  </div>
</dialog>
    </div>
  )
}

export default Login
