import React from 'react'
import { IoCheckmarkDoneOutline } from "react-icons/io5";

const About = () => {
    return (
        <div className='max-w-7xl mx-auto px-4'>
            <div className=" text-center mb-10">
                <h2 className=' text-[20px] font-poppins font-light md:text-[20px] uppercase'>About Us</h2>
                <p className='text-[26px] font-protest md:text-3xl font-bold uppercase'>
                    Learn More <span className='text-red-500'>About Us</span>
                </p>
            </div>
            <div className='md:grid lg:grid-cols-2 md:grid-cols-1 gap-7 '>
                <div className='mb-5 md:mb-4'>
                    <img className='w-full h-[400px] sm:h-[700px] lg:h-[665px] object-cover'
                        src='https://images.unsplash.com/photo-1487303988450-fd2a2e01e804?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        alt='About Me' />
                </div>


                <div className="content ">
                    <p className=" mb-3 font-poppins font-light ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul>
                        <li className='flex items-center gap-2 font-poppins font-bold'>
                            <IoCheckmarkDoneOutline className='text-[17px] text-red-500' /> Ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </li>
                        <li className='flex items-center gap-2 mb-4  font-poppins font-bold'>
                            <IoCheckmarkDoneOutline className='text-[17px] text-red-500' /> Duis aute irure dolor in reprehenderit
                            in voluptate velit.
                        </li>
                    </ul>
                    <p className='font-poppins font-light'>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident
                    </p>
                    <div className="relative mt-5">
                        <img src="/about-2.jpg" className="  lg:h-[450px] w-auto object-cover" alt="" />
                        <a
                            href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                            className="glightbox play-btn"
                        />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default About