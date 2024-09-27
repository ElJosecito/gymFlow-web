import { Navigate, Outlet } from "react-router-dom"


function ProtectedRoute({children, isAuth}) {

        if (!isAuth) {
            return<Navigate to='/' />
        }

    return children ? <>{children}</> : <Outlet />
 
}

export default ProtectedRoute