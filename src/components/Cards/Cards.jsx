import React, { useState } from 'react'
import { IoAddOutline } from "react-icons/io5";

const Cards = ({ pizzas }) => {


    return (
        <div className='max-w-7xl mx-auto '>

            <div className='mb-5'>
                <h1 className='text-center font-protest text-3xl font-bold  mb-5'>Our Menu</h1>
                <p className='text-center font-poppins font-light text-[16px] px-1 md:px-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            </div>
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    pizzas.map((pizza) => (
                        <div className='dish-card  bg-white px-3 pb-7'
                            style={
                                {
                                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                                }
                            }
                            key={pizza.id}>
                            <div className='dish-card-body'>
                                <img className=' flex mx-auto' src={pizza.img} alt='Pizzas' />
                                <div className='text-center'>
                                    <h2 className="font-protest text-2xl font-bold mb-4">{pizza.name}</h2>
                                    <span className='mt-3 font-poppins font-light text-[16px]'>{pizza.description}</span>
                                    <div className=' flex justify-between mt-5 px-5 items-center'>

                                        <span className='font-poppins text-green-500 font-bold text-[16px]'>
                                            RS. {pizza.prices.find(price => price.small)?.small}
                                        </span>

                                        <div className='bg-red-500 hover:bg-red-600 p-1 text-white rounded-full text-xl cursor-pointer transition-rotate ease-custom transform origin-center hover:rotate-[-180deg] duration-550'>
                                            <IoAddOutline />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }


            </div>

        </div>
    )
}

export default Cards