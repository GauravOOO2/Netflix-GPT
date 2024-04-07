import React from 'react'

const SignUp = () => {
    return (
        <div>
            <div className=' flex item-center justify-center opacity-85  ' >
                <div className='absolute  bg-black  w-1/3 -translate-y-1/2 top-1/2  ' > {/*after styling add this -translate-y-1/2 top-1/2 */}
                    <div className='m-16 ' >
                        <h1 className=' text-white text-3xl font-bold  pb-8 ' >SignUp</h1>


                        <div className=' pb-4  ' >
                            <input
                                placeholder='Your Name '
                                className=' text-white bg-transparent border border-white p-3 w-full rounded-md '
                                type='text' />
                        </div>

                        <div className='   ' >
                            <input className=' text-white bg-transparent	 border border-white p-3 w-full rounded-md '
                                placeholder='Email or phone number'
                                type='email' />
                        </div >

                        <div className=' pt-4  ' >
                            <input
                                placeholder='Set Password '
                                className=' text-white bg-transparent border border-white p-3 w-full rounded-md '
                                type='password' />
                        </div>

                        <div className=' pt-4  ' >
                            <input
                                placeholder='Conform Password '
                                className=' text-white bg-transparent border border-white p-3 w-full rounded-md '
                                type='password' />
                        </div>



                        <div className=' pt-4 flex justify-center   ' >
                            <button className=' w-full p-2 rounded-md font-medium text-white bg-red-600 ' style={{ opacity: 1 }} >
                                Sign In
                            </button>
                        </div>


                        {/* <div className=' pt-4 flex  ' >
                        <input
                            className=' h-5 w-5  rounded-xl '
                            type='checkbox'
                        /> <p className='pl-3  text-white' >Remember me</p>
                    </div> */}


                        <div className='text-white pt-4 ' >
                            <p className='text-gray-300'  >Already have an account? <a className='font-bold' href='/Login' >Sign In now.</a>  </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className=' pt-4 flex justify-center   ' >
                <button className=' w-full p-2 rounded-md font-medium text-white bg-red-600 ' style={{ opacity: 1 }} >
                    Sign In
                </button>
            </div>

            <div className='text-white pt-4 ' >
                <p className='text-gray-300'  >Already have an account? <a className='font-bold' href='/Login' >Sign In now.</a>  </p>
            </div> */}

        </div>
    )
}

export default SignUp