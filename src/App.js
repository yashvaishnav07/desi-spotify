import React from 'react'
import Body from './components/Body'
import Login from './components/Login'
import { paths } from './shared/routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import ErrorComponent from './components/ErrorComponent'
import Playlist from './components/Playlist'
import Search from './components/Search'
import Album from './components/Album'

const App = () => {

  const router = createBrowserRouter([
    {
      path: paths.LOGIN,
      element: <Login />, 
    },
    {
      path: paths.ERROR,
      element: <ErrorComponent />,
    },
    {
      path: paths.HOME,
      element: <Body />,
      children: [
        {
          path: paths.HOME,
          element: <Home />,
        },
        {
          path: paths.SEARCH,
          element: <Search/>,
        },
        {
          path: paths.PLAYLIST,
          element: <Playlist/>,
        },
        {
          path: paths.ALBUM,
          element: <Album/>,
        },
      ],
    },
  ]);
return (
    <RouterProvider router={router}/>
)}

export default App