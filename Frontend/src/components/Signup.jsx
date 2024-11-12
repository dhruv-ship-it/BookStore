import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Signup() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
<div className='flex min-h-screen items-center justify-center'>
<div id="my_modal_3" className="border-[2px] border-primary shadow-md p-5 rounded-md">
  <div className="">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">X</Link>
    </form>

    <form onSubmit={handleSubmit(onSubmit)}>
    <h3 className="font-bold text-lg">Signup</h3>

        {/* {Name} */}
        <div className='mt-4 space-y-2'>
        <span>
            Name
        </span>
        <br/>

        <input type='text' placeholder='Enter you name' className=' w-80 px-3 py-1 border rounded-md outline-none'
        {...register("name", { required: true })}/>

<br/>
{errors.name && <span className='text-sm text-red-500'>This field is required</span>}
        
    </div>

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
           Signup
        </button>

        <p>
            Have account?
            <Link to="/" className='text-blue-500 underline cursor-pointer'>
                Login
            </Link>
        </p>
    </div>
    </form>
  </div>
</div>
</div>
      
    </>
  )
}

export default Signup
