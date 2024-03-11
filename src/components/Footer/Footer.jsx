import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiUserFollowLine } from "react-icons/ri";


const Footer = () => {
    return (

        <footer className="footer  text-white pt-12 pb-8 px-10 bg-black text-base-content">

            <div className='max-w-7xl mx-auto '>
                <div className='lg:flex justify-between items-center lg:gap-5 mb-12'>
                    <div className='mb-7 md:mb-7'>
                        <div className=' flex gap-3'>
                            <IoLocationOutline className=' text-[26px]' />
                            <div>
                                <h3 className='font-poppins font-bold text-[16px]'>Address</h3>
                                <p className='font-poppins font-light text-[14px]  mt-2'>
                                    A108 Adam Street<br />New York, NY 535022 - US
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='mb-7 md:mb-7'>
                        <div className=' flex  gap-3'>
                            <BsTelephone className=' text-[26px]' />
                            <div className='font-poppins'>
                                <h3 className='font-bold text-[16px]'>Reservations</h3>
                                <p className='font-light text-[14px]  mt-2'>
                                    <span className=' font-medium'>Phone:</span> +1 5589 55488 55<br />
                                    <span className=' font-medium'>Email:</span> 0lS5t@example.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-7 md:mb-7'>
                        <div className=' flex  gap-3'>
                            <FaRegClock className=' text-[26px]' />
                            <div>
                                <h3 className='font-poppins font-bold text-[16px]'>Opening Hours</h3>
                                <p className='font-poppins font-light text-[14px] mt-2'>
                                    <span className=' font-medium'>Mon-Sat:</span>  11AM - 23PM<br />
                                    <span className=' font-medium'> Sunday:</span>  Closed<br />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='mb-7 md:mb-7'>
                        <div className=' flex gap-3'>
                            <RiUserFollowLine className=' text-[26px]' />
                            <div>
                                <h3 className='font-poppins font-bold text-[16px] '>Follow Us</h3>
                                <div className=' flex gap-4 text-4xl mt-2'>
                                    <FaFacebook className=' border rounded-full p-2 cursor-pointer hover:border-none hover:bg-white hover:text-black' />
                                    <FaTwitter className=' border rounded-full p-2 cursor-pointer hover:border-none hover:bg-white hover:text-black' />
                                    <FaInstagram className=' border rounded-full p-2 cursor-pointer hover:border-none hover:bg-white hover:text-black' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <div className='copyright border-t border-gray-600 pt-8'>
                        © Copyright <span className='font-poppins  font-semibold text-[15px] md-text-[16px]'>Fast Food Restaurant</span>. All Rights Reserved
                        <p>Desing by <span className='font-poppins font-semibold  text-[15px] md-text-[16px]'>Muhammad Adil</span></p>
                    </div>
                </div>
            </div>
        </footer >

    )
}

export default Footer