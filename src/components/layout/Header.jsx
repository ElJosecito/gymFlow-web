import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// logo vital dental center
// import logo from '../../images/logo_vitaldental.png'

// icons
import { Menu, X } from 'lucide-react'


function Header() {

    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 70) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        })
    }, [])


    // mobile menu
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }


    // display mobile menu
    const mobileMenu = menu ? 'flex' : 'hidden'

    return (
        <header className='w-full flex justify-center fixed z-[10000]  '>
            <div className={` w-full  px-0`}>
                <nav className={`flex justify-between items-center w-full h-20 px-8 rounded-b-md backdrop-blur-lg transition-all duration-500  ${scroll ? 'bg-[#E6F6FE] ' : 'bg-transparent'}`}>
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

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className='bg-primary text-white px-8 py-4 text-sm rounded-xl font-semibold hidden lg:flex'>
                        Book Now
                    </motion.button>

                    {/* mobile menu */}
                    <div className='lg:hidden flex items-center'>
                        <button onClick={handleMenu} className='text-2xl'>
                            {menu ? <X absoluteStrokeWidth /> : <Menu absoluteStrokeWidth />}
                        </button>
                    </div>

                    <ul className={`flex flex-col gap-8 font-semibold text-base ${mobileMenu} lg:hidden absolute top-20 left-0 right-0 ${scroll ? 'bg-[#E6F6FE] shadow-lg' : 'bg-white'} rounded-md shadow-lg p-8 transition-all duration-500`}>
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
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className='bg-primary text-white px-8 py-4 text-sm rounded-xl font-semibold'>
                            Book Now
                        </motion.button>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header