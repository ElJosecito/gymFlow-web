import { useNavigate } from "react-router-dom"

import { motion } from "framer-motion"

import { exitGym } from "../../api/gymEntry"

//hot toast
import {toast, Toaster} from "react-hot-toast"

function PassHandler() {

    const navigate = useNavigate()

    const handleExitGym = async () => {
        await exitGym()
        toast.success('Exit successful')
    }



    return (
        <>
            <section className="w-full h-screen flex items-center justify-center bg-green-500">
                <div className="w-1/2 h-1/2 flex flex-col items-center justify-center">
                    {/* buttons */}
                    <div className="flex gap-5 items-center justify-center">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => navigate('/enter-gym')}
                            className="bg-white text-black px-4 py-2 rounded-md m-2 font-bold w-40">
                            Enter Gym
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleExitGym()}
                            className="bg-red-500 text-white px-4 py-2 rounded-md m-2 font-bold w-40">
                            Exit Gym
                        </motion.button>
                    </div>
                </div>
            </section>

            <Toaster />
        </>
    )
}

export default PassHandler