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

// icons
import { Camera, Check, XCircle } from 'lucide-react'


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

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        console.log(selectedImage);
        setImage(selectedImage); // Actualizas el estado

    };

    const handleImageUpload = async () => {
        const formData = new FormData();
        formData.append('profileImage', image); // Usa la imagen almacenada en el estado

        try {
            if (user.image !== "") {
                await deleteImage(userId); // Elimina la imagen anterior
            }
            await uploadImage(userId, formData); // Sube la nueva imagen
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    };

    return (

        <>
            <section className="w-full flex justify-center h-fit">
                <div className="max-w-screen-2xl w-full rounded-lg h-fit">
                    <div className="flex justify-between items-center h-screen">
                        <div className="w-1/2 flex items-center">
                            {user ? (
                                <div className="flex flex-col">
                                    {/* user image container */}
                                    <div className="flex items-center">
                                        <div className="relative w-24 h-24 rounded-full overflow-hidden flex justify-center items-center bg-green-700">

                                            {
                                                user.image ? (
                                                    <img src={`${user.image}`} alt="user" className="w-full h-full object-cover" />
                                                ) : (
                                                    <label htmlFor="image" className="cursor-pointer">
                                                        <Camera size={48} color="white" />
                                                    </label>
                                                )
                                            }
                                        </div>
                                        {/* update and delete picture buttons */}
                                        <div className="flex ml-10 h-10 gap-4">

                                            <input type="file" id="image" className="hidden" onChange={handleImageChange} />

                                            <button onClick={handleImageUpload} className="bg-green-500 text-white px-6 py-1 rounded-md cursor-pointer">
                                                Upload Image
                                            </button>

                                            <button onClick={() => { deleteImage(userId); window.location.reload(); }} className="bg-red-500 text-white px-6 py-1 rounded-md cursor-pointer">
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>

                                    {/* user info container */}
                                    <div className="flex flex-col mt-4">
                                        <div >
                                            <p className="text-normal font-bold mb-2 text-[#8b8b8b]">Profile Name</p>
                                            <input type="text" disabled placeholder={`${user.firstName} ${user.lastName}`} className="w-full h-10 rounded-md p-3 px-4 outline outline-2 outline-[#e4e4e4]" />
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-normal font-bold mb-2 text-[#8b8b8b]">Email</p>
                                            <input type="text" disabled placeholder={user.email} className="w-full h-10 rounded-md p-3 px-4 outline outline-2 outline-[#e4e4e4]" />
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-normal font-bold mb-2 text-[#8b8b8b]">Phone</p>
                                            <input type="text" disabled placeholder={user.phoneNumber} className="w-full h-10 rounded-md p-3 px-4 outline outline-2 outline-[#e4e4e4]" />
                                        </div>

                                        <div className="mt-4 flex gap-4">
                                            <div>
                                                <p className="text-normal font-bold mb-2 text-[#8b8b8b]">Created At</p>
                                                <input type="text" disabled placeholder={date} className="w-full h-10 rounded-md p-3 px-4 outline outline-2 outline-[#e4e4e4]" />
                                            </div>

                                            <div>
                                                <p className="text-normal font-bold mb-2 text-[#8b8b8b]">Updated At</p>
                                                <input type="text" disabled placeholder={endDate} className="w-full h-10 rounded-md p-3 px-4 outline outline-2 outline-[#e4e4e4]" />
                                            </div>
                                        </div>

                                        <div className="mt-4 flex items-end justify-between">
                                            {
                                                user.active ? (
                                                    <div className="flex items-center gap-2">
                                                        <Check size={24} color="green" />
                                                        <p className="text-2xl font-bold text-[#1ab427]">Active</p>
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-2">
                                                        <XCircle size={24} color="red" />
                                                        <p className="text-2xl font-bold text-[#ff0000]">Inactive</p>
                                                    </div>
                                                )
                                            }
                                            <div>
                                                <p className="text-normal font-bold mb-2 text-[#8b8b8b]">memberShip</p>
                                                <input type="text" disabled placeholder={user.memberShip} className="capitalize w-full h-10 rounded-md p-3 px-4 outline outline-2 outline-[#e4e4e4]" />
                                            </div>
                                        </div>

                                        {/* logout */}
                                        <div className="mt-6 flex justify-end">
                                            <button onClick={logout} className="bg-red-500 text-white font-semibold px-6 py-2 rounded-md cursor-pointer">
                                                Logout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <p>Cargando usuario...</p>
                            )}

                        </div>

                        <div className="w-1/2 h-full">
                            {gymStatus ? (
                                <div className="flex justify-center items-center h-full">
                                    <p className="text-9xl font-black">{gymStatus.currentCapacity}</p>
                                </div>
                            ) : (
                                <div className="flex justify-center items-center h-full">
                                    <div
                                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                                        role="status">
                                        <span
                                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                                        >Loading...</span>
                                    </div>
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