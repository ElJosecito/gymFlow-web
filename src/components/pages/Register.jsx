import { useState } from "react"

import { register } from "../../api/auth"

import { useNavigate, Link } from "react-router-dom"
import { motion } from "framer-motion"
import logo from "../../assets/images/Logo.png"

import { toast, Toaster } from 'react-hot-toast'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [number, setNumber] = useState('')


    const navigate = useNavigate()

    const formatPhoneNumber = (phoneNumber) => {
        const cleaned = ('' + phoneNumber).replace(/\D/g, '')
        const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        }
        return null
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        
        
        // check if one of the fields is empty
        if (!email || !password || !firstName || !lastName || !number) {
            return toast.error('Some fields are required')
        }

        // check if the email is valid
        if (!email.includes('@')) {
            return toast.error('Invalid email')
        }

        // check if the password is at least 6 characters long
        if (password.length < 6) {
            return toast.error('Password must be at least 6 characters long')
        }

        const response = await register(email, password, firstName, lastName, number)
        console.log(response)

        if (response.status === 400) {
            return toast.error("User already exists")
        }

        toast.success("User registered successfully")

        setTimeout(() => {
            navigate('/login')
        }, 3300)
    }

    return (

        <>
            <section className="w-full h-screen flex justify-center items-center ">
                {/* motion */}

                <div className="max-w-screen-sm w-full p-4 bg-white shadow-lg rounded-lg">

                    <div className="flex justify-center">
                        <img src={logo} alt="logo" className="w-32" />
                    </div>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>

                        <div className="flex gap-4 w-full">
                            <div className="mb-4 w-full">
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input type="text"
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div className="mb-4 w-full">
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input type="text"
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="text"
                                onChange={(e) => setNumber(formatPhoneNumber(e.target.value))}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.9 }}
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/70 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</motion.button>
                    </form>

                    <div className="mt-8 text-center">
                        <p>Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
                    </div>

                </div>
            </section>
            <Toaster position="bottom-center" />
        </>
    )
}

export default Register