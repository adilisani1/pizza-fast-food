import React, { useEffect, useRef, useState } from 'react';
import Cart from '../Cart/Cart';
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = ({ showMobileNav, setShowMobileNav }) => {
    const navRef = useRef(null);
    const handleCloseNav = () => {
        setShowMobileNav(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showMobileNav && navRef.current && !navRef.current.contains(event.target)) {
                setShowMobileNav(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);

    }, [showMobileNav]);

    const links = ['Home', 'About', 'Menu', 'Testimonials', 'Contact']
    return (
        <div ref={navRef} className='fixed top-0 right-0 left-0 z-[100000] bg-red-500 shadow text-white'>

            <nav className='navbar max-w-7xl mx-auto relative z-50  transition-all duration-300 py-2.5 px-1.5 lg:px-5 flex items-center md:justify-between'>

                <a className='logo flex items-center gap-3 uppercase' href='#'>
                    <img className='w-12 md:w-[58px]' src='/food-app-logo.png' alt='logo' />
                    <span className=' md:text-[23px] text-[16px] font-poppins leading-5 md:leading-6 font-extrabold'>Fast Food <br /> <p className='text-[15px] md:text-[16px] tracking-[0px] md:tracking-[3px] font-light'>Restaurant</p></span>
                </a>

                {/* MOBILE NAV START */}
                <div className=' flex justify-end items-center flex-1 lg:hidden' >
                    <span className='text-2xl  cursor-pointer'
                        onClick={() => setShowMobileNav(true)}>
                        <IoIosMenu />
                    </span>

                    <ul className={`flex flex-col absolute z-[10000] sm:w-3/6 h-screen w-4/6 px-6 py-16 right-0 top-[0px] bg-red-500 ${showMobileNav ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} transition-transform transition-opacity duration-300 ease-in-out`}>
                        <span className='text-2xl  bg-white rounded-full p-[8px] text-red-500 cursor-pointer absolute top-5 right-5 transition-rotate  ease-custom transform origin-center hover:rotate-180 duration-550' onClick={handleCloseNav}><IoMdClose /></span>
                        {
                            links.map((link) => <li className='border-b py-5 flex items-center  border-white border-opacity-40' key={link}><a href={`#${link}`}>{link}</a></li>)
                        }
                    </ul>
                    <button className=' lg:flex px-7 ml-3 py-2.5 bg-white rounded text-black '>Login</button>

                </div>
                {/* MOBILE NAV END */}

                <ul className=' list-none lg:flex items-center gap-7 transition-all hidden '>
                    {
                        links.map((link) => <li key={link}><a href={`#${link}`}>{link}</a></li>)
                    }
                </ul>

                <div className='flex gap-3 '>
                    <div className='z-50 cursor-pointer  md:border md:border-none bg-slate-100 text-black lg:bg-none py-3 px-3 md:rounded-full shadow lg:shadow-none fixed bottom-7 right-0 lg:bottom-0 lg:right-0 lg:relative lg:flex  '>
                        <Cart />
                    </div>
                    <button className=' lg:flex px-10 ml-3 py-3 bg-white rounded text-black hidden'>Login</button>
                </div>


            </nav >
        </div >
    )
}

export default Navbar