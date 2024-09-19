import { motion } from 'framer-motion'
import { PlayCircle } from 'lucide-react'

import muscle from '../../assets/images/muscle.png'

function Hero() {
    return (
        <>
            <section className="min-h-screen flex items-center justify-center relative">
                <div className="absolute top-0 left-0 h-screen w-9/12"></div>
                <div className="absolute top-0 right-0 h-screen w-3/12 bg-[#1F1F1F]"></div>
                <div className="h-screen w-full max-w-screen-2xl flex items-center z-10">
                    <div className="flex flex-col items-center lg:items-start lg:w-1/2 pt-32 text-center lg:text-start">
                        {/*  */}
                        <h1 className="lg:text-7xl text-5xl  bungee-tint-regular">
                            Elavate Your <br /> Workout
                        </h1>
                        {/*  */}
                        <p className="lg:text-sm text-xs mt-8 text-[#00000056] md:pr-20 max-w-screen-sm px-3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        {/*  */}
                        <div className='flex flex-col md:flex-row items-start mt-7 gap-6 w-full'>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className='bg-primary text-white rounded-xl p-4 font-semibold '>Book an Appointment
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className=' text-seconday rounded-xl p-4 font-semibold flex'>
                                <PlayCircle className='mr-2' />
                                Play Videos
                            </motion.button>
                        </div>
                    </div>
                    {/*  */}
                    <div className="lg:w-1/2 w-full flex justify-center items-end h-screen relative">
                        <img src={muscle} alt="muscle" className="w-full absolute" />
                    </div>
                </div>
            </section>
            <div className="flex justify-evenly bg-[#1F1F1F] py-16">
                <div className='text-back_white w-48'>
                    <h1 className='font-bold text-2xl'>Heading</h1>
                    <p className='font-light text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='text-back_white w-48'>
                    <h1 className='font-bold text-2xl'>Heading</h1>
                    <p className='font-light text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='text-back_white w-48'>
                    <h1 className='font-bold text-2xl'>Heading</h1>
                    <p className='font-light text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='text-back_white w-48'>
                    <h1 className='font-bold text-2xl'>Heading</h1>
                    <p className='font-light text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>

            <section className="min-h-screen flex items-center justify-center pt-28">
                <div className="w-full max-w-screen-2xl">
                    <div className='flex flex-col items-center'>
                        <h2 className="text-5xl font-bold text-center w-full bungee-tint-regular">Our Services</h2>
                        <p className="text-center text-[#00000056] mt-8 px-3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    <div className='h-screen'>
                        <div className="flex justify-center lg:w-3/5 h-full bg-slate-500">
                            <div className='grid grid-cols-5 grid-rows-5 gap-4'>
                                <div className='bg-white flex w-96 h-28'>
                                    <div className='bg-white '></div>
                                </div>
                                <div className='bg-white'></div>
                                <div className='bg-white'></div>
                                <div className='bg-white'></div>
                            </div>
                        </div>
                        <div className='lg:w-2/5 bg-slate-600'></div>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Hero