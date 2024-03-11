import React from 'react'
import { BsCart2 } from "react-icons/bs";
import { FaBasketShopping } from "react-icons/fa6";

const Cart = () => {
    return (
        <div className=' '>
            <a
                className='cart relative text-2xl '
                href='#cart'>
                <div>
                    <span className='text-[13px] bg-red-500 z-50 text-white rounded-full w-5 h-5 flex justify-center items-center absolute top-[-7px] right-[-7px]'>4</span>
                </div>
                <span className=' '><FaBasketShopping /></span>

            </a>
        </div>
    )
}

export default Cart