//Routes configuration
import { Route, Routes } from 'react-router-dom'

//layaout components
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

//hero
import Hero from '../components/pages/Hero'

// login
import Login from '../components/pages/Login'

//register
import Register from '../components/pages/Register'

import { useLocation } from 'react-router-dom'



function Router() {

    const path = useLocation().pathname

    return (
        <>
            {path === '/login' || path === '/register' ? null : <Header />}

            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login/>} />

                {/* page no found */}
                <Route path="*" element={<h1>Page not found</h1>} />

            </Routes>
            <Footer />
        </>
    )
}

export default Router