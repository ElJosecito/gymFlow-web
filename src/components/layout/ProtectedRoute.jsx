import { Navigate, Outlet } from "react-router-dom"


function ProtectedRoute({children, isAuth}) {

        if (!isAuth) {
            return<Navigate to='/login' />
        }

    return children ? children : <Outlet />
 
}

export default ProtectedRoute