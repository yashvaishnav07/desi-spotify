import React, { lazy, Suspense } from 'react'
import Body from './components/Body'
import Login from './components/Login'
import { paths } from './shared/routes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorComponent from './components/ErrorComponent'
import Search from './components/Search'
import SkeletonLoader from './components/Loader/SkeletonLoader'

const Home = lazy(() => import('./components/Home'));
const Playlist = lazy(() => import('./components/Playlist'));
const Album = lazy(() => import('./components/Album'));

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
          element: (
            <Suspense fallback={<SkeletonLoader />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: paths.SEARCH,
          element: <Search />,
        },
        {
          path: paths.PLAYLIST,
          element: (
            <Suspense fallback={<SkeletonLoader />}>
              <Playlist />
            </Suspense>
          ),
        },
        {
          path: paths.ALBUM,
          element: (
            <Suspense fallback={<SkeletonLoader />}>
              <Album />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  )
}

export default App