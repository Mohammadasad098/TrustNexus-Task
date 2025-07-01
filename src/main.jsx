import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Loader from './components/Loader.jsx'

const Layout = lazy(() => import('./Layout.jsx'))
const Home = lazy(() => import('./pages/Home.jsx'))
const Project = lazy(() => import('./pages/Project.jsx'))
const Profile = lazy(() => import('./pages/Profile.jsx'))
const SignupDeveloper = lazy(() => import('./pages/signup/SignupDeveloper.jsx'))
const SignupUser = lazy(() => import('./pages/signup/SignupUser.jsx'))
const LoginDeveloper = lazy(() => import('./pages/login/LoginDeveloper.jsx'))
const LoginUser = lazy(() => import('./pages/login/LoginUser.jsx'))
const Getstarted = lazy(() => import('./pages/Getstarted.jsx'))

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'signup/developer', element: <SignupDeveloper /> },
      { path: 'signup/user', element: <SignupUser /> },
      { path: 'login/developer', element: <LoginDeveloper /> },
      { path: 'login/user', element: <LoginUser /> },
      { path: 'project', element: <Project /> },
      { path: 'profile', element: <Profile /> },
      { path: 'getstarted', element: <Getstarted /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loader />}>
    <RouterProvider router={router} />
  </Suspense>
)
