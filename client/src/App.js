import './App.css';
import DashboardLayout from './components/Dashboard.js';
import MovieList from './components/Movielist.js';
import Show from './components/Show.js';
import TheatreList from './components/TheatreList.js';

import SignIn from './components/signIn.js';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {path: '/' , element: <DashboardLayout title={'Home Page'} />},
  {path: '/sign-in' , element: <SignIn />},
  {path: '/movies/:movieId' , element: <DashboardLayout title={'Theatre Page'}><TheatreList /></DashboardLayout> },
  {path: '/movies' , element: <DashboardLayout title={'Theatre Page'}><MovieList /></DashboardLayout> },
  {path: '/show/:showId' , element: <DashboardLayout title={'Show Page'}><Show /></DashboardLayout> }
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
