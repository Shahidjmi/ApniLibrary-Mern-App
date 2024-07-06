import React from 'react'
import myContext from '../contextApi/context'
import { useContext } from 'react'
import toast from 'react-hot-toast'

const Logout = () => {
  const { authUser,setAuthUser } = useContext(myContext)
  function handleLogout(){
    setAuthUser(null)
    localStorage.removeItem('User')
    toast.success("logged out successfully")
  }
  return (
    <div>
      <button className='px-2 py-3 bg-red-500 cursor-pointer rounded-md text-white'
      onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
