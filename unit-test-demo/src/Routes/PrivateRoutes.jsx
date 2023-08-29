import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from 'Components/Wrapper'
import { Outlet } from 'react-router-dom'


function PrivateRoute() {
//   const dispatch = useDispatch()
//   const location = useLocation()

//   const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn)
//   const resultIsUserLoggedIn = localStorage.getItem('isUserLoggedIn')

//   useEffect(() => {
//     dispatch(clearBreadCrumb())
//   }, [location.pathname, dispatch])

//   if (!isUserLoggedIn && resultIsUserLoggedIn !== 'true') {
//     dispatch(setLoginStatus(false))
//     return <Navigate to='/login' replace />
//   } else {
//     return (
//       <Wrapper>
//         <Outlet />
//       </Wrapper>
//     )
//   }

return (
    <Wrapper>
        <Outlet/>
    </Wrapper>
)

  
}

PrivateRoute.propTypes = {
  element: PropTypes.element
}

export default PrivateRoute
