import { motion } from 'framer-motion'
import { CircleCheck, Ban, XCircle } from 'lucide-react'

import rectangle1 from '../../assets/images/Rectangle1.png'
import rectangle2 from '../../assets/images/Rectangle2.png'
import rectangle3 from '../../assets/images/Rectangle3.png'

// trinaers
import trainer1 from '../../assets/images/trainer1.png'
import trainer2 from '../../assets/images/trainer2.png'
import trainer3 from '../../assets/images/trainer3.png'

// hero images
import hero from '../../assets/images/hero.jpg'
import hero1 from '../../assets/images/hero1.jpg'
import hero2 from '../../assets/images/hero2.jpg'
import hero3 from '../../assets/images/hero3.jpg'
import hero4 from '../../assets/images/hero4.jpg'

import Modal from 'react-modal';
import { useState } from 'react';

import { updateUser } from '../../api/user'

import { useAuthStore } from '../../store/auth'

import { Link, useNavigate } from 'react-router-dom'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

function Hero() {

    const [plan, setPlan] = useState({})

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [payment, setPayment] = useState(false)
    const { userId, isAuth } = useAuthStore()

    const navigate = useNavigate()

    // modal
    Modal.setAppElement('#root');


    return (
        <>

            <section className="w-full h-screen flex justify-center">
                {/* autoplay swiper carrousel, with title in the middle */}
                <Swiper
                    modules={[EffectFade, Autoplay, Pagination]}
                    spaceBetween={0}
                    slidesPerView={1}

                    autoplay={{ delay: 2500, disableOnInteraction: false }}
                    loop={true}
                    className="w-full h-full "
                >
                    {
                        [hero, hero1, hero2, hero3, hero4].map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="w-full h-full flex justify-center items-center filter brightness-50">
                                    <img src={item} alt="hero" className="w-full h-full object-cover" />
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>

                <div className="max-w-screen-2xl w-full h-full flex justify-between items-center absolute z-10 ">
                    <div className=" px-5 w-full md:w-3/5 flex flex-col justify-center items-center md:items-start md:pl-8" >
                        <p className="text-lg md:text-base opacity-50 hidden md:flex text-white ">
                            We Are The Best Gym In The World
                        </p>

                        <h1 className="text-5xl text-center md:text-start md:text-8xl font-bold ease text-white">
                            WLCOME TO <span className="text-primary">REVOLUTIN</span>{" "}
                            Gym
                        </h1>
                        <p className="text-sm text-center md:text-start md:text-base mt-5 opacity-60 text-white md:pr-44">
                            We are the best Gym in the world. We have the best
                            coaches and the best facilities. We are here to help you become the
                            best basketball player you can be. We have helped many players
                            achieve their dreams and we can help you too.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="mt-5 bg-primary text-white px-8 py-3 font-bold rounded-xl "
                        >
                            Get Started
                        </motion.button>

                    </div>
                </div>



            </section>

            {/* services section */}
            <div className="flex justify-evenly bg-[#1F1F1F] py-16 flex-wrap gap-5">
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

            <section className=" flex  justify-center py-28">
                <div className="w-full max-w-screen-2xl">
                    <div className='flex flex-col items-center'>
                        <h2 className="text-5xl font-bold text-center w-full ">Why Choose Us?</h2>
                        <p className="text-center text-[#00000056] mt-8 px-3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    <div className='pt-20 flex items-center flex-col xl:flex-row'>
                        <div className="flex justify-center items-center xl:w-3/5 h-full ">
                            <div className='grid md:grid-cols-2 grid-rows-3 gap-4'>
                                <div className=' flex w-96 p-3 py-4'>
                                    <div className='bg-white pr-3'>
                                        <div className='bg-black h-8 w-8 rounded-full'>
                                        </div>
                                    </div>
                                    <div className='bg-white '>
                                        <h1 className='font-bold text-xl mb-2'>Heading</h1>
                                        <p className='font-light text-sm text-[#00000056] pr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                                {/*  */}
                                <div className=' flex w-96 p-3 py-4'>
                                    <div className='bg-white pr-3'>
                                        <div className='bg-black h-8 w-8 rounded-full'>
                                        </div>
                                    </div>
                                    <div className='bg-white '>
                                        <h1 className='font-bold text-xl mb-2'>Heading</h1>
                                        <p className='font-light text-sm text-[#00000056] pr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                                {/*  */}
                                <div className=' flex w-96 p-3 py-4'>
                                    <div className='bg-white pr-3'>
                                        <div className='bg-black h-8 w-8 rounded-full'>
                                        </div>
                                    </div>
                                    <div className='bg-white '>
                                        <h1 className='font-bold text-xl mb-2'>Heading</h1>
                                        <p className='font-light text-sm text-[#00000056] pr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                                {/*  */}
                                <div className=' flex w-96 p-3 py-4'>
                                    <div className='bg-white pr-3'>
                                        <div className='bg-black h-8 w-8 rounded-full'>
                                        </div>
                                    </div>
                                    <div className='bg-white '>
                                        <h1 className='font-bold text-xl mb-2'>Heading</h1>
                                        <p className='font-light text-sm text-[#00000056] pr-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. amet consectetur adipisicing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='xl:w-2/5 p-3'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-4'>
                                <div className='rounded-2xl shadow-xl hidden md:block'>
                                    <img src={rectangle1} alt="muscle" className='w-full h-full object-cover rounded-2xl' />
                                </div>
                                <div className="col-start-1 row-start-2 bg-white rounded-2xl shadow-xl hidden md:block">
                                    <img src={rectangle2} alt="muscle" className='w-full h-full object-cover rounded-2xl' />
                                </div>
                                <div className="row-span-2 col-start-2 row-start-1 w-full lg:w-72 min-h-[400px] rounded-2xl bg-white shadow-xl">
                                    <img src={rectangle3} alt="muscle" className='w-full h-full object-cover rounded-2xl' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section className="flex justify-center pb-40">
                <div className='w-full max-w-screen-2xl'>
                    <div className='flex flex-col items-center'>
                        <h2 className="text-5xl font-bold text-center w-full">Meet Our Trainers</h2>
                        <p className="text-center text-[#00000056] mt-8 lg:px-32 px-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>

                    <div className='flex items-center justify-around mt-28 flex-wrap gap-5'>
                        <div className='flex flex-col items-center group shadow-lg rounded-2xl overflow-hidden'>
                            <div className='relative'>
                                <img src={trainer1} alt="trainer" className='w-80 h-96 object-cover' />
                                <div className='absolute w-full h-full bg-black/20 backdrop-blur-sm transition-all duration-500 top-0 opacity-0 group-hover:opacity-100 p-8 cursor-pointer'>
                                    <h2 className='text-white font-bold text-2xl'>Trainer Name</h2>
                                    <p className='text-white font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        {/*  */}

                        <div className='flex flex-col items-center group shadow-lg rounded-2xl overflow-hidden'>
                            <div className='relative'>
                                <img src={trainer2} alt="trainer" className='w-80 h-96 object-cover' />
                                <div className='absolute w-full h-full bg-black/20 backdrop-blur-sm transition-all duration-500 top-0 opacity-0 group-hover:opacity-100 p-8 cursor-pointer'>
                                    <h2 className='text-white font-bold text-2xl'>Trainer Name</h2>
                                    <p className='text-white font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                        {/*  */}

                        <div className='flex flex-col items-center group shadow-lg rounded-2xl overflow-hidden'>
                            <div className='relative'>
                                <img src={trainer3} alt="trainer" className='w-80 h-96 object-cover' />
                                <div className='absolute w-full h-full bg-black/20 backdrop-blur-sm transition-all duration-500 top-0 opacity-0 group-hover:opacity-100 p-8 cursor-pointer'>
                                    <h2 className='text-white font-bold text-2xl'>Trainer Name</h2>
                                    <p className='text-white font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* plans section */}

            <section className="min-h-screen flex justify-center">
                <div className='w-full max-w-screen-2xl h-fit'>

                    <div className='flex flex-col items-center'>
                        <p className="text-start text-[#00000056] font-bold mb-4 w-full pl-3">
                            Pricing Plans
                        </p>
                        <h2 className="text-6xl font-extrabold text-start w-full pl-3">JOIN TODAY</h2>

                        <div className='flex items-center justify-around flex-wrap gap-5 mt-28 w-full h-fit pb-10'>
                            {/*  */}
                            <div className='flex flex-col shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-2xl overflow-hidden w-[400px] h-[500px] px-5 py-8'>
                                <h1 className='font-bold text-base'>Beginner Plan</h1>
                                <div className='flex items-end mt-4'>
                                    <p className='font-bold text-6xl leading-none '>$05</p>
                                    <p className='font-bold text-sm pb-3'> /Per Month</p>
                                </div>
                                <p className='text-xs text-[#00000056] font-medium mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>

                                {/* beneficts list */}

                                <ul className='mt-8'>
                                    <li className='flex items-center gap-2 text-[#00000056] font-semibold my-2'>
                                        <CircleCheck size={20} color='green' strokeWidth={2.5} absoluteStrokeWidth />
                                        <p>Free Training</p>
                                    </li>
                                    <li className='flex items-center gap-2 text-[#00000056] font-semibold my-2'>
                                        <CircleCheck size={20} color='green' strokeWidth={2.5} absoluteStrokeWidth />
                                        <p>Free Training</p>
                                    </li>
                                    <li className='flex items-center gap-2 text-[#00000056] font-semibold my-2'>
                                        <CircleCheck size={20} color='green' strokeWidth={2.5} absoluteStrokeWidth />
                                        <p>Free Training</p>
                                    </li>
                                    <li className='flex items-center gap-2 text-[#00000056] font-semibold my-2'>
                                        <Ban size={20} color='red' strokeWidth={2.5} absoluteStrokeWidth />
                                        <p>Free Training</p>
                                    </li>
                                    <li className='flex items-center gap-2 text-[#00000056] font-semibold my-2'>
                                        <Ban size={20} color='red' strokeWidth={2.5} absoluteStrokeWidth />
                                        <p>Free Training</p>
                                    </li>
                                </ul>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='bg-primary text-white rounded-xl p-4 font-semibold mt-8'
                                    onClick={() => {
                                        setModalIsOpen(true)
                                        setPlan({ name: 'basic', price: 5 })
                                    }}
                                >Book Now</motion.button>

                            </div>
                            {/*  */}

                            <div className='flex flex-col bg-[#1F1F1F] text-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-2xl overflow-hidden w-[400px] h-[500px] px-5 py-8'>
                                <h1 className='font-bold text-base'>Premium Plan</h1>
                                <div className='flex items-end mt-4'>
                                    <p className='font-bold text-6xl leading-none '>$15</p>
                                    <p className='font-bold text-sm pb-3'> /Per Month</p>
                                </div>
                                <p className='text-xs text-[#ffffff56] font-medium mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>

                                {/* beneficts list */}

                                <ul className='mt-8'>
                                    <li className='flex items-center gap-2 text-[#ffffff56] font-semibold my-2'>
                                        <CircleCheck size={20} color='green' strokeWidth={2.5} absoluteStrokeWidth />
                                        <p>Free Training</p>
                                    </li>
                                    <li className='flex items-center gap-2 text-[#ffffff56] font-semibold my-2'>
                                        <CircleCheck size={20} color='green' strokeWidth={2.5} absoluteStrokeWidth />
                                        <p>Free Training</p>
                                    </li>
                                    <li className='flex items-center gap-2 text-[#ffffff56] font-semibold my-2'>
                                        <CircleCheck size={20} color='green' strokeWidth={2.5} absoluteStrokeWidth />
                                        <p>Free Training</p>
                                    </li>
                                    <li className='flex items-center gap-2 text-[#ffffff56] font-semibold my-2'>
                                        <Ban size={20} color='red' strokeWidth={2.5} absoluteStrokeWidth />
                                        <p>Free Training</p>
                                    </li>
                                    <li className='flex items-center gap-2 text-[#ffffff56] font-semibold my-2'>
                                        <Ban size={20} color='red' strokeWidth={2.5} absoluteStrokeWidth />
                                        <p>Free Training</p>
                                    </li>
                                </ul>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='bg-white text-primary rounded-xl p-4 font-semibold mt-8'
                                    onClick={() => {
                                        setModalIsOpen(true)
                                        setPlan({ name: 'gold', price: 15 })
                                    }}
                                >Book Now</motion.button>
                            </div>

                            {/*  */}

                            <div className='flex flex-col  shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)] rounded-2xl overflow-hidden w-[400px] h-[500px] px-5 py-8'>
                                <h1 className='font-bold text-base'>Expert Plan</h1>
                                <div className='flex items-end mt-4'>
                                    <p className='font-bold text-6xl leading-none '>$20</p>
                                    <p className='font-bold text-sm pb-3'> /Per Month</p>
                                </div>
                                <p className='text-xs text-[#00000056] font-medium mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>

                                {/* beneficts list */}

                                <ul className='mt-8'>
                                    <li className='flex items-center gap-2 text-[#00000056] font-semibold my-2'>
                                        <CircleCheck size={20} color='green' strokeWidth={2.5} absoluteStrokeWidth />
                                        <p>Free Training</p>
                                    </li>
                                    <li className='flex items-center gap-2 text-[#00000056] font-semibold my-2'>
                                        <CircleCheck size={20} color='green' strokeWidth={2.5} absoluteStrokeWidth />
                                        <p>Free Training</p>
                                    </li>
                                    <li className='flex items-center gap-2 text-[#00000056] font-semibold my-2'>
                                        <CircleCheck size={20} color='green' strokeWidth={2.5} absoluteStrokeWidth />
                                        <p>Free Training</p>
                                    </li>
                                    <li className='flex items-center gap-2 text-[#00000056] font-semibold my-2'>
                                        <Ban size={20} color='red' strokeWidth={2.5} absoluteStrokeWidth />
                                        <p>Free Training</p>
                                    </li>
                                    <li className='flex items-center gap-2 text-[#00000056] font-semibold my-2'>
                                        <Ban size={20} color='red' strokeWidth={2.5} absoluteStrokeWidth />
                                        <p>Free Training</p>
                                    </li>
                                </ul>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='bg-primary text-white rounded-xl p-4 font-semibold mt-8' onClick={() => {
                                        setModalIsOpen(true)
                                        setPlan({ name: 'platinum', price: 20 })
                                    }}>Book Now</motion.button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <Modal overlayClassName="Overlay" className="bg-white absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 max-w-screen-lg w-full rounded-xl p-5" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>

                <div className='flex justify-end items-center'>
                    <button onClick={() => setModalIsOpen(false)}>
                        <XCircle size={30} color='red' strokeWidth={2.5} absoluteStrokeWidth />
                    </button>
                </div>

                {/* payment section */}
                <section className="flex justify-start w-full">
                    <div className={`${isAuth ? " w-1/2" : "w-full"} flex justify-center items-center`}>
                        {
                            !isAuth ? (
                                <div className='flex flex-col items-center'>
                                    <h1 className='font-bold text-2xl'>Please Login to continue</h1>
                                    <p className='text-[#8b8b8b] mt-4'>You need to login to continue with the payment</p>
                                    <Link to='/login'>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.9 }}
                                            className='bg-primary text-white rounded-xl p-4 px-10 font-semibold mt-8'
                                        >Login</motion.button>
                                    </Link>
                                </div>
                            ) : (
                                !payment ? (
                                    < form className="w-full px-10 ">
                                        <div className='flex flex-col'>
                                            <label htmlFor="" className='font-bold mb-2 text-[#8b8b8b]'>Full Name</label>
                                            <input type="text" className="outline outline-1 outline-[#c0c0c0] px-3 rounded-lg  py-2" />
                                        </div>
                                        {/* card Number */}
                                        <div className='flex flex-col mt-4'>
                                            <label htmlFor="" className='font-bold mb-2 text-[#8b8b8b]'>Card Number</label>
                                            <input type="text" className="outline outline-1 outline-[#c0c0c0] px-3 rounded-lg  py-2" />
                                        </div>

                                        <div className='flex gap-4 mt-4  justify-between'>
                                            <div className='flex flex-col'>
                                                <label htmlFor="" className='font-bold mb-2 text-[#8b8b8b]'>Expiry Date</label>
                                                <input type="text" className="outline outline-1 outline-[#c0c0c0] px-3 rounded-lg w-52 py-2" />
                                            </div>
                                            <div className='flex flex-col'>
                                                <label htmlFor="" className='font-bold mb-2 text-[#8b8b8b]'>CVV</label>
                                                <input type="text" className="outline outline-1 outline-[#c0c0c0] px-3 rounded-lg w-36 py-2" />
                                            </div>
                                        </div>

                                        {/* payment description */}

                                        <div className='flex flex-col mt-7 px-2'>
                                            <div className='flex justify-between items-center'>
                                                <h1 className='font-semibold'>SubTotal</h1>
                                                <p className='text-[#8b8b8b]'>{`$${plan.price}`}</p>
                                            </div>

                                            <div className='flex justify-between items-center mt-3'>
                                                <h1 className='font-semibold'>Tax</h1>
                                                <p className='text-[#8b8b8b]'>{`$${plan.price * 0.1}`}</p>
                                            </div>

                                            {/* divider */}
                                            <div className='border-b-[0.5px] border-[#8b8b8b] my-3'></div>

                                            <div className='flex justify-between items-center'>
                                                <h1 className='font-semibold'>Total</h1>
                                                <p className='text-[#8b8b8b]'>{`${plan.price + (plan.price * 0.1)
                                                    }`}</p>
                                            </div>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.9 }}
                                            className='bg-primary text-white rounded-xl p-4 font-semibold mt-8 w-full'
                                            onClick={() => {
                                                updateUser(userId, { memberShip: plan.name, active: true })
                                                setPayment(true)
                                                setTimeout(() => {
                                                    setModalIsOpen(false)
                                                    navigate('/profile')
                                                }, 2000)
                                            }}
                                        >Pay Now</motion.button>
                                    </form>
                                ) : (

                                    <div className='flex flex-col items-center w-full'>
                                        <h1 className='font-bold text-2xl'>Payment Successfull</h1>
                                        <p className='text-[#8b8b8b] mt-4'>Redirecting to profile page...</p>
                                    </div>
                                )
                            )
                        }
                    </div>
                    <div className={`${isAuth ? " w-1/2" : ""} flex justify-center items-center`}>
                        {/* plan description */}

                        {
                            isAuth? (
                                <div className='flex flex-col outline outline-[#d6d6d6] rounded-2xl overflow-hidden w-[400px] h-[500px] px-5 py-8'>
                            <h1 className='font-bold text-base capitalize'>{plan.name}</h1>
                            <div className='flex items-end mt-4'>
                                <p className='font-bold text-6xl leading-none '>{`$${plan.price}`}</p>
                                <p className='font-bold text-sm pb-3'> /Per Month</p>
                            </div>
                            <p className='text-xs text-[#00000056] font-medium mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </p>

                            {/* beneficts list */}

                            <ul className='mt-8'>
                                <li className='flex items-center gap-2 text-[#00000056] font-semibold my-2'>
                                    <CircleCheck size={20} color='green' strokeWidth={2.5} absoluteStrokeWidth />
                                    <p>Free Training</p>
                                </li>
                                <li className='flex items-center gap-2 text-[#00000056] font-semibold my-2'>
                                    <CircleCheck size={20} color='green' strokeWidth={2.5} absoluteStrokeWidth />
                                    <p>Free Training</p>
                                </li>
                                <li className='flex items-center gap-2 text-[#00000056] font-semibold my-2'>
                                    <CircleCheck size={20} color='green' strokeWidth={2.5} absoluteStrokeWidth />
                                    <p>Free Training</p>
                                </li>
                                <li className='flex items-center gap-2 text-[#00000056] font-semibold my-2'>
                                    <Ban size={20} color='red' strokeWidth={2.5} absoluteStrokeWidth />
                                    <p>Free Training</p>
                                </li>
                                <li className='flex items-center gap-2 text-[#00000056] font-semibold my-2'>
                                    <Ban size={20} color='red' strokeWidth={2.5} absoluteStrokeWidth />
                                    <p>Free Training</p>
                                </li>
                            </ul>
                            {/* change plans */}
                            <div className='flex justify-center items-center mt-8'>
                                <p className='text-[#00000056]'>Change Plan</p>
                            </div>
                            <div className='flex justify-between mt-5'>
                                <div className='hover:border-b-4 cursor-pointer duration-200 border-blue-500'
                                    onClick={() => setPlan({ name: 'basic', price: 5 })}
                                >
                                    <p className='font-semibold'>Basic</p>
                                </div>

                                <div className='hover:border-b-4 cursor-pointer duration-200 border-blue-500' onClick={
                                    () => setPlan({ name: 'gold', price: 15 })
                                }>
                                    <p className='font-semibold'>Gold</p>
                                </div>

                                <div className='hover:border-b-4 cursor-pointer duration-200 border-blue-500' onClick={
                                    () => setPlan({ name: 'platinum', price: 20 })
                                }>
                                    <p className='font-semibold'>Platinum</p>
                                </div>
                            </div>
                        </div>
                            ) : null
                        }
                    </div>

                </section>
            </Modal>
        </>
    )
}

export default Hero