//Routes configuration
import { Route, Routes } from 'react-router-dom'

//layaout components
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

//hero
import Hero from '../components/pages/Hero'


function Router() {

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Hero/>} />
                <Route path="/about" element={
                    <>
                        <h1>About</h1>
                        <p>Learn more about us</p>
                    </>
                } />
                <Route path="/contact" element={
                    <>
                        <h1>Contact</h1>
                        <p>Get in touch with us</p>
                    </>
                } />
                <Route path="/services" element={
                    <>
                        <h1>Services</h1>
                        <p>Discover our services</p>
                    </>
                } />

            </Routes>
            <Footer />
        </>
    )
}

export default Router