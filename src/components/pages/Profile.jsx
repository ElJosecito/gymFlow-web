import { useEffect, useState } from "react"

// store
import { useAuthStore } from "../../store/auth"

// api
import { getUser, deleteImage, uploadImage } from "../../api/user"

//socket 
import io from 'socket.io-client'

//tempo 
import { format } from "@formkit/tempo"

//hot toast
import { toast, Toaster } from "react-hot-toast"


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


    const [date, setDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {

        setDate(format(user.createdAt, "long"))
        setEndDate(format(user.updatedAt, "long"))


    }, [user.createdAt, user.updatedAt])


    //toast

    useEffect(() => {
        if (gymStatus) {
            toast.success(gymStatus.message, {
                duration: 4000,
                position: "bottom-right"
            }
            )
        }
    }, [gymStatus])

    const [image, setImage] = useState('')

    const handleImageChange = async (e) => {
        console.log(e.target.files[0])
        
        setImage(e.target.files[0])
    };

    const handleImageUpload = async () => {
        const formData = new FormData()
        formData.append('profileImage', image)

        try {
            const response = await uploadImage( userId, formData)
            console.log(response)
            window.location.reload()
        } catch (error) {
            console.error(error)
        }
    }

    return (

        <>
            <section className="w-full flex justify-center h-fit">
                <div className="max-w-screen-2xl w-full rounded-lg h-fit">
                    <div className="flex justify-between items-center h-screen">
                        <div className="w-1/2">
                            <h1 className="text-5xl font-bold mb-10">Profile</h1>
                            <div className="">
                                {user ? (
                                    <div>
                                        <div className="flex justify-around items-center outline outline-4 rounded-xl outline-primary w-fit px-10 py-5">
                                            <img src={`http://localhost:3000${user.image}`} alt="avatar" className="w-24 h-24 rounded-full bg-primary" />
                                            <div className="ml-8">
                                                <h2 className="text-2xl font-bold capitalize">{`${user.firstName} ${user.lastName}`}</h2>
                                                <p className="text-sm font-medium text-[#00000056]">{user.email}</p>
                                            </div>
                                        </div>

                                        <h2 className="text-2xl font-bold mt-10">Información del usuario:</h2>

                                        <div className="self-center mt-8">
                                            <h2 className="text-xl font-bold capitalize">Number:</h2>
                                            <p className="text-sm font-medium text-[#00000056]">{user.phoneNumber}</p>
                                        </div>

                                        <div className="self-center mt-4">
                                            <h2 className="text-xl font-bold capitalize">Email:</h2>
                                            <p className="text-sm font-medium text-[#00000056]">{user.email}</p>
                                        </div>

                                        <div className="self-center mt-10">
                                            {/* memberShip card*/}
                                            <h2 className="text-2xl font-bold capitalize">Membership:</h2>
                                            <div className={`flex gap-4 px-10 py-5 outline outline-4 rounded-xl w-fit my-8 ${user.memberShip === "basic" ? " outline-primary shadow-sm shadow-primary" : user.memberShip === "gold" ? "outline-yellow-500 shadow-md shadow-yellow-500" : "outline-fuchsia-400 shadow-md shadow-fuchsia-400"}`}>
                                                <div className="flex flex-col">
                                                    <p className="text-sm font-medium text-[#00000056]">Start Date</p>
                                                    <p className="text-lg font-semibold">{date}</p>
                                                </div>

                                                <div className="flex flex-col ml-4">
                                                    <p className="text-sm font-medium text-[#00000056]">End Date</p>
                                                    <p className="text-lg font-semibold">{endDate}</p>
                                                </div>

                                                {/* memberShip type */}
                                                <div className="flex flex-col ml-4">
                                                    <p className="text-sm font-medium text-[#00000056]">Type</p>
                                                    <p className="text-lg font-semibold capitalize">{user.memberShip}</p>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            user.active ? (
                                                <p className="text-green-500 font-bold text-xl">Usuario activo</p>
                                            ) : (
                                                <p className="text-red-500 font-bold text-xl">Usuario inactivo</p>
                                            )
                                        }

                                        <div className="mt-8">
                                            <h2 className="text-2xl font-bold">Actualizar imagen:</h2>
                                            <input type="file" onChange={handleImageChange} />

                                            <button onClick={handleImageUpload} className="bg-primary text-white px-4 py-2 rounded-md mt-8">Actualizar imagen</button>
                                        </div>
                                        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-md mt-8">Cerrar sesión</button>


                                    </div>
                                ) : (
                                    <p>Cargando usuario...</p>
                                )}
                            </div>
                        </div>

                        <div className="w-1/2 h-full">
                            {gymStatus ? (
                                <div className="flex justify-center items-center h-full">
                                    <p className="text-9xl font-black">{gymStatus.currentCapacity}</p>
                                </div>
                            ) : (
                                <div className="flex justify-center items-center h-full">
                                    <p className="text-5xl font-bold">Cargando...</p>
                                </div>
                            )}
                        </div>

                    </div>

                </div>
            </section>

            <Toaster />

        </>

    )
}

export default Profile