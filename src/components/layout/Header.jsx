import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// icons
import { Menu, X } from 'lucide-react'

//state management
import { useAuthStore } from '../../store/auth'

//get user data
import { getUser } from '../../api/user'

//navigation
import { Link, useLocation } from 'react-router-dom'

function Header() {

    const [scroll, setScroll] = useState(false)
    const isLogged = useAuthStore(state => state.isAuth)
    const [user, setUser] = useState({})

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 70) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }, [])

    // check if user is logged
    const { token, userId } = useAuthStore()

    useEffect(() => {
        if (token) {
            getUser(userId).then((response) => {
                setUser(response)
            })
        }
    }, [token, userId])

    // mobile menu
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }


    // display mobile menu
    const mobileMenu = menu ? 'flex' : 'hidden'

    //path
    const path = useLocation().pathname

    return (
        <header className='w-full flex justify-center fixed z-[10000]  '>
            <div className={` w-full  px-0`}>
                <nav className={`flex justify-between items-center w-full h-20 px-8 rounded-b-md transition-all duration-500  ${scroll ? 'bg-back_white ' : 'bg-transparent'}`}>
                    <div className='text-2xl font-bold'>
                        {/* <Image src={logo} alt="" /> */}
                        Logo
                    </div>
                    <ul className='lg:flex gap-8 font-semibold text-base hidden'>
                        <motion.li whileHover={{ scale: 1.2 }} className='text-sm'>
                            <a href='/#'>Home</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} className='text-sm'>
                            <a href='#services'>Services</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} className='text-sm'>
                            <a href='#about'>About</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} className='text-sm'>
                            <a href='#contact'>Contact</a>
                        </motion.li>
                    </ul>

                    {
                        isLogged ? (
                            // user logged profile
                            <div className='flex gap-4 items-center'>
                                <div className='flex items-center gap-4'>
                                    <Link to='/profile'>
                                        <img src={`http://localhost:3000${user.image}`} alt="user" className='w-10 h-10 rounded-full' />
                                    </Link>
                                    <p className={`text-lg font-semibold capitalize ${scroll ? 'text-black' : `${path !== '/' ? "text-black" : "text-back_white"}`}`}>{`${user.firstName} ${user.lastName}`}</p>
                                </div>
                            </div>
                        ) : (
                            <div className='flex gap-4'>
                                <Link to='/login'>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className='bg-primary text-white px-8 h-12 text-sm rounded-xl font-semibold'>
                                        Login
                                    </motion.button>
                                </Link>
                                <Link to='/register'>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className={`outline-2 outline ${scroll ? 'outline-primary text-primary' : 'outline-white text-white'} px-8 h-12 text-md rounded-xl font-bold`}>
                                        Register
                                    </motion.button>
                                </Link>
                            </div>
                        )
                    }

                    {/* mobile menu */}
                    <div className='lg:hidden flex items-center'>
                        <button onClick={handleMenu} className='text-2xl'>
                            {menu ? <X absoluteStrokeWidth /> : <Menu absoluteStrokeWidth />}
                        </button>
                    </div>

                    <ul className={`flex flex-col gap-8 font-semibold text-base ${mobileMenu} lg:hidden absolute top-20 left-0 right-0 ${scroll ? 'bg-back_white shadow-lg' : 'bg-white'} rounded-md shadow-lg p-8 transition-all duration-500`}>
                        <motion.li whileHover={{ scale: 1.2 }} className='text-sm' onClick={handleMenu}>
                            <a href='/#'>Home</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} className='text-sm' onClick={handleMenu}>
                            <a href='#services'>Services</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} className='text-sm' onClick={handleMenu}>
                            <a href='#about'>About</a>
                        </motion.li>
                        <motion.li whileHover={{ scale: 1.2 }} className='text-sm' onClick={handleMenu}>
                            <a href='#contact'>Contact</a>
                        </motion.li>
                        {
                            isLogged ? (
                                // user logged profile
                                <div className='flex gap-4 items-center'>
                                    <div className='flex items-center gap-4'>
                                        <Link to='/profile'>
                                            <img src={user.image} alt="user" className='w-10 h-10 rounded-full' />
                                        </Link>
                                        <p className={`text-lg font-semibold capitalize ${scroll ? 'text-black' : `${path !== '/' ? "text-black" : "text-back_white"}`}`}>{`${user.firstName} ${user.lastName}`}</p>
                                    </div>
                                </div>
                            ) : (
                                <div className='flex gap-4'>
                                    <Link to='/login'>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className='bg-primary text-white px-8 h-12 text-sm rounded-xl font-semibold'>
                                            Login
                                        </motion.button>
                                    </Link>
                                    <Link to='/register'>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className={`outline-2 outline ${scroll ? 'outline-primary text-primary' : 'outline-white text-white'} px-8 h-12 text-md rounded-xl font-bold`}>
                                            Register
                                        </motion.button>
                                    </Link>
                                </div>
                            )
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header