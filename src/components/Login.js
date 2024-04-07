import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {

  const [payload, setPayload] = useState(null);

  const handleChange = (e)=>{
    console.log(e)
    setPayload(e.target.value)
  }

  const signInEvent = async()=>{
   console.log(payload)
   try{
    const data = await fetch('http://localhost:3000/Signin', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(payload)
    })
   console.log(data);
   }catch(err){
    console.log('error');
   }
  }

  return (
    //     <div class="min-h-screen flex items-center justify-center bg-gray-100">
    //   <div class="relative">
    //     <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
    //       <div class="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
    //         <h2 class="text-2xl font-semibold text-center">Login</h2>
    //         <form class="mt-4">
    //           {/* <!-- Your form fields go here --> */}
    //           <div class="mt-6">
    //             <button type="submit" class="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">Login</button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <div className=' flex items-center justify-center  ' >
    //   <div className=' relative ' >
    //    <div className='absolute bg-gray-300  ' >
    //     <div className=' text-white  ' >
    //       <h2 > Login </h2>

    //     </div>
    //    </div>
    //   </div>
    // </div>



    <div className=' flex item-center justify-center opacity-85  ' >
      <div className='absolute  bg-black  w-1/3 -translate-y-1/2 top-1/2  ' > {/*after styling add this -translate-y-1/2 top-1/2 */}
        <div className='m-16 ' >
        <h1 className=' text-white text-3xl font-bold  pb-8 ' >Sign In</h1>


<div className='   ' >
  <input 
  onChange={handleChange}
   className=' text-white bg-transparent	 border border-white p-3 w-full rounded-md '
    placeholder='Email or phone number'
    type='email' />
</div >

<div className=' pt-4  ' >
  <input
  placeholder='Password '
    className=' text-white bg-transparent border border-white p-3 w-full rounded-md '
    type='password' />
</div>

<div
  className=' pt-4 flex justify-center  opacity-100  ' >
  <button onClick={signInEvent} className=' w-full p-2 rounded-md font-medium text-white bg-red-400 ' >
    Sign In
  </button>
</div>

<div className=' pt-4 flex  ' >
  <input 
  className=' h-5 w-5  rounded-xl '
  type='checkbox'
  /> <p className='pl-3  text-white' >Remember me</p>
</div>

{/* <div className=' ' >
  <input
  className=' '
  type='checkbox  ' /> <p className='pl-3  text-white' >Remember me</p>
</div> */}


<div className='text-white pt-4 ' >

  <p className='text-gray-300'  >New to Netflix? 
  
  <Link to='/SignUp' > <button className='font-bold'  > Sign up now.</button> </Link>
  {/* <a  className='font-bold' href='/SignUp' >Sign up now.</a>  */}
 </p>

</div>
        </div>
      </div>
    </div>

  )
}

export default Login