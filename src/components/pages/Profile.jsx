import { useEffect, useState } from "react"

import { useAuthStore } from "../../store/auth"

import { getUser } from "../../api/user"

function Profile() {

    const { token, userId } = useAuthStore()

    const logout = useAuthStore(state => state.logout)

    const [user, setUser] = useState({})

    useEffect(() => {
        if (token) {
            getUser(userId).then((response) => {
                setUser(response)
            })
        }
    }, [token, userId])





    return (
        <section className="w-full h-screen flex justify-center items-center ">
            <div className="max-w-screen-sm w-full p-4 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center">Profile</h2>
                <div className="mt-4">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            value={user.firstName}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            disabled
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            value={user.lastName}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            disabled
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={user.email}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            disabled
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            value={user.number}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            disabled
                        />
                    </div>

                    <div className="flex justify-center">
                        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-md">Logout</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile