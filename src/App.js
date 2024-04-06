import './App.css';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Login from './components/Login';
import Browse from './components/Browse';
import SignUp from './components/SignUp';


const Applayout = () => {
  return (
    <div>  
      <Navbar />
      <Outlet />
      {/* <Body /> */}
      <div className=' top-0 right-0  bg-full bg-fixed h-screen bg-cover ' >
      
      <img  
      className='  object-cover w-full h-full object-center z-10 '
      src='https://handoff-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg' 
      alt='Background' />
    </div>
    </div>
  )
}


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Applayout />,
    children: [{
      path: '/',
      element: <Body />
    },
    {
      path: '/Login',
      element: <Login />
    },
    {
      path: '/Browser',
      element: <Browse />
    },
    {
      path : '/SignUp',
      element: <SignUp />
    }

    ]
  }
])


function App() {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
