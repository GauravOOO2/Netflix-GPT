import React from 'react'
// import Body from './Body'
import { createBrowserHistory } from 'history';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return ( 
    <>
    
    <nav className='absolute w-full top-0 right-0  grid grid-cols-2  ' >

      <Link to={'/'} ><div className='  align-center '>
        <img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
          alt='Logo'
          className='w-52' />
      </div></Link>

      <div className=' ' >
      <div className='  px-4 ' >  
        <ul className=' flex  justify-end space-x-8 mx-20 p-8  text-sm font-medium'  >
     <Link to='/Login' ><button className='bg-red-600 pl-4  pr-4 pb-2.5 pt-1.5  rounded-md pointer ' ><li className='text-white  ' > Sign In </li></button></Link>            
        </ul>
      </div>
      </div>


     </nav>
   
    </>
  )
}

export default Navbar
