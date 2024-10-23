import { useState } from 'react'
import { login } from '../../api/auth'

import { useAuthStore } from '../../store/auth'

import { useNavigate, Link } from 'react-router-dom'

import { motion } from 'framer-motion'
import logo from '../../assets/images/Logo.png'

import { toast, Toaster } from 'react-hot-toast'

import { Eye, EyeOff } from 'lucide-react'

function Login() {

    const navigate = useNavigate()

    const { setToken, setUserId } = useAuthStore()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!email || !password) {
            return toast.error('Email and password are required')
        }

        const response = await login(email, password)

        if (response.status === 400) {
            return toast.error("Invalid email or password")
        }

        toast.success("Logged in successfully")

        if (response.token) {
            setToken(response.token)
            setUserId(response.user.id)
            setTimeout(() => {
                navigate('/')
            }, 3000)
        }
    }

    return (
        <>
            {/* motion Login */}

            <section className="w-full h-screen flex justify-center items-center ">
                <div className="max-w-screen-sm w-full p-4 bg-white shadow-lg rounded-lg">
                    <div className="flex justify-center items-center">
                        <img src={logo} alt="logo" className="w-32" />
                    </div>
                    <form className="mt-4" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Insert your email'
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                        </div>
                        <div className="mb-4 relative">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input 
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Insert your password'
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />

                            <div className="absolute right-4 top-8">
                                {
                                    showPassword ? (
                                        <EyeOff size={24} onClick={handleShowPassword} />
                                    ) : (
                                        <Eye size={24} onClick={handleShowPassword} />
                                    )
                                }
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.9 }}
                            type="submit"
                            className="w-full bg-primary hover:bg-primary/70 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline">Login</motion.button>
                    </form>

                    <div className="mt-8 text-center">
                        <p>Don't have an account? <Link to="/register" className="text-blue-500">Register</Link></p>
                    </div>

                </div>
            </section>
            <Toaster position='bottom-center' />
        </>
    )
}

export default Login