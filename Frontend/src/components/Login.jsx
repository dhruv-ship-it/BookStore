import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)



  return (
    <div>

<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

      </form>
      <form  onSubmit={handleSubmit(onSubmit)}>
    
    <h3 className="font-bold text-lg">Login</h3>

    {/* {Email} */}
    <div className='mt-4 space-y-2'>
        <span>
            Email
        </span>
        <br/>

        <input type='email' placeholder='Enter you email' className=' w-80 px-3 py-1 border rounded-md outline-none'
        {...register("email", { required: true })}/>
        <br/>
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
        
    </div>

    {/* {Password} */}

    <div className='mt-4 space-y-2'>
        <span>
            Password
        </span>
        <br/>

        <input type='text' placeholder='Enter you password' className=' w-80 px-3 py-1 border rounded-md outline-none' 
        {...register("password", { required: true })}/>
        <br/>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
        
    </div>

    {/* {Button} */}

    <div className='flex justify-around mt-4'>


        <button className='badge badge-outline bg-pink-500 text-black hover:bg-pink-700 hover:text-white h-8 w-20'>
            Login
        </button>

        <p>
            Not Registered?{' '}
            <Link to="/signup" className='text-blue-500 underline cursor-pointer'>
                Signup
            </Link>
        </p>
    </div>
    </form>
  </div>
</dialog>
      
    </div>
  )
}

export default Login
