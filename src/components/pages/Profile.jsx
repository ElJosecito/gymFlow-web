import { useEffect, useState } from "react"

// store
import { useAuthStore } from "../../store/auth"

// api
import { getUser } from "../../api/user"

//socket 
import io from 'socket.io-client'

function Profile() {

    // socket
    const [gymStatus, setGymStatus] = useState(null);

    // user Store
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


    useEffect(() => {
        const socket = io("http://localhost:3000"); // Conectar al servidor
    
        // Escuchar el evento gymStatusUpdate
        socket.on("gymStatusUpdate", (data) => {
          console.log("Actualización de capacidad del gimnasio:", data);
          setGymStatus(data); // Actualiza el estado con los datos recibidos
        });
    
        // Limpiar la conexión cuando el componente se desmonte
        return () => {
          socket.disconnect();
        };
      }, []);


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
                            value={user.phoneNumber}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            disabled
                        />
                    </div>

                    <div className="">
                        <h1>Estado del gimnasio:</h1>
                        {gymStatus ? (
                            <div>
                                <p>{gymStatus.message}</p>
                                <p>ID del usuario: {gymStatus.userId}</p>
                                <p>Capacidad actual: {gymStatus.currentCapacity}</p>
                            </div>
                        ) : (
                            <p>Cargando estado...</p>
                        )}
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