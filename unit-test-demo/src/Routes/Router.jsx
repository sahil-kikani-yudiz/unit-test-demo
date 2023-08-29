import { lazy } from 'react'
import { route } from 'Constants/AllRoutes'

const PublicRoute = lazy(() => import('./PublicRoutes'))
const PrivateRoute = lazy(() => import('./PrivateRoutes'))

// Public Routes
const Login = lazy(() => import('Views/Login'))

// Private Routes
const Dashboard = lazy(() => import('Views/Dashboard'))

const RoutesDetails = [
  {
    defaultRoute: '',
    Component: PublicRoute,
    props: {},
    isPrivateRoute: false,
    children: [{ path: route.login, Component: Login, exact: true }]
  },
  {
    defaultRoute: '',
    Component: PrivateRoute,
    props: {},
    isPrivateRoute: true,
    children: [
        { path: route.dashboard, Component: Dashboard, exact: true }
    ]
  }
]

export default RoutesDetails
