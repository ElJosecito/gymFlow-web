import { useEffect, useState } from "react"

import { enterGym, getEntryById } from "../../api/gymEntry"

import { User, CheckCircle2, XCircle } from "lucide-react"

import { format } from "@formkit/tempo"
import { useNavigate } from "react-router-dom"

function EnterGym() {

    const [gymId, setGymId] = useState('')
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState(null)

    const [date, setDate] = useState(null)

    const navigate = useNavigate()

    const handleEnterGym = async (e) => {
        e.preventDefault()
        setLoading(true)
        const data = {
            id: gymId
        }
        const response = await enterGym(data)
        setUser(response.user)
        console.log(response)
        setLoading(false)
        
    }

    const handleLastEntry = async () => {

        const array = user.gymEntries
        const lastEntry = array[array.length - 1]

        if (user.active === true) {
            const response = await getEntryById(lastEntry)
            setDate(format(response.entryTime, "full"))
        }

        setTimeout(() => {
            navigate('/passHandler')
        }, 6000)
    }

    useEffect(() => {
        if (user) {
            handleLastEntry()
        }
    }, [user])

    return (
        <>
            <section className={`w-full h-screen flex items-center justify-center ${!user ? "" : user.active === true ? "bg-green-500" : "bg-red-600"}`}>
                <div className="w-1/2 h-1/2 flex flex-col items-center justify-center">

                    {
                        loading ? <p>Loading...</p> :
                            <>
                                {
                                    user ?
                                        <div className="flex flex-col items-center justify-center ">
                                            {/* user profile */}
                                            {
                                                user.image ?
                                                    <img src={user.image} alt="user" className="w-32 h-32 rounded-full" /> :
                                                    <div className="w-32 h-32 bg-green-700 rounded-full flex items-center justify-center">
                                                        <User size={48} color="white" />
                                                    </div>

                                            }
                                            <h2 className="text-4xl font-bold text-white my-8">{`${user.firstName} ${user.lastName}`}</h2>
                                            {
                                                user.active === true ?
                                                    <div className="flex items-end justify-between gap-4 w-full ">

                                                        {
                                                            user.isAdmin ?
                                                                <p className="text-white">Admin</p> :
                                                                <p className="font-bold text-2xl text-red-600">Not Admin</p>
                                                        }
                                                        <CheckCircle2 size={48} color="white" />
                                                    </div> :
                                                    <div className="flex items-end justify-between gap-4 w-full px-5">
                                                        <XCircle size={48} color="white" />
                                                        <p className="text-white">You are not in the gym</p>
                                                    </div>
                                            }



                                            {
                                               user.active ? <div className="w-full mt-20">
                                                    <p className="text-normal font-bold mb-2 text-[#ffffff7e]">Last Entry</p>
                                                    <input type="text" disabled placeholder={date} className="w-full h-10 rounded-md p-3 px-4 outline outline-2 outline-[#ffffff7e] bg-[#ffffff7e] placeholder-green-500" />
                                                </div> : null
                                            }

                                            {/* gym memberShip */}
                                            <div className="w-full mt-4 flex justify-end">
                                                {
                                                    user.memberShip === 'basic' ?
                                                        <div className="w-fit">
                                                            <input type="text" disabled placeholder={user.memberShip} className="w-fit h-10 rounded-md p-3 px-4 bg-blue-400 placeholder-white placeholder:font-bold text-center capitalize" />
                                                        </div>
                                                        : null}
                                                {
                                                    user.memberShip === 'gold' ?
                                                        <div className="w-fit">
                                                            <input type="text" disabled placeholder={user.memberShip} className="w-fit h-10 rounded-md p-3 px-4 bg-yellow-400 placeholder-white placeholder:font-bold text-center capitalize" />
                                                        </div>
                                                        : null
                                                }
                                                {
                                                    user.memberShip === 'platinum' ?
                                                        <div className="w-fit">
                                                            <input type="text" disabled placeholder={user.memberShip} className="w-fit h-10 rounded-md p-3 px-4 bg-fuchsia-400 placeholder-white placeholder:font-bold text-center capitalize" />
                                                        </div>
                                                        : null
                                                }
                                            </div>

                                        </div> :
                                        <>
                                            <form action="submit" className="flex justify-center items-center flex-col w-full" onSubmit={handleEnterGym}>
                                                {/* input id */}
                                                <input type="text" placeholder="Enter Gym ID" className="w-1/2 h-12 mt-8 px-4 rounded-lg outline-none bg-[#e7e7e7]" onChange={(e) => {
                                                    setGymId(e.target.value)
                                                }} />
                                                {/* button */}
                                                <button className="w-1/2 h-12 mt-8 bg-primary text-white font-semibold rounded-lg" >Enter</button>
                                            </form>
                                        </>
                                }
                            </>
                    }
                </div>
            </section>
        </>
    )
}

export default EnterGym