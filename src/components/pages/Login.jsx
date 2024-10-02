import { useState } from 'react'
import { login } from '../../api/auth'

import { useAuthStore } from '../../store/auth'

import { useNavigate, Link } from 'react-router-dom'

function Login() {

    const navigate = useNavigate()

    const { setToken, setUserId } = useAuthStore()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await login(email, password)
        console.log(response)
        if (response.token) {
            setToken(response.token)
            setUserId(response.user.id)
            navigate('/')
        }
    }

    return (
        <section className="w-full h-screen flex justify-center items-center ">
            <div className="max-w-screen-sm w-full p-4 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <form className="mt-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                    </div>
                    <button type="submit"
                        className="w-full bg-primary hover:bg-primary/70 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
                </form>

                <div className="mt-8 text-center">
                    <p>Don't have an account? <Link to="/register" className="text-blue-500">Register</Link></p>
                </div>

            </div>
        </section>
    )
}

export default Login