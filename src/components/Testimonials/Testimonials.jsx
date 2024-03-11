import React, { useState } from 'react'
import { RiStarSFill } from "react-icons/ri";
import { BiSolidQuoteLeft } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonials = () => {
    const [activeSlide, setActiveSlide] = useState(0); // State to track active slide

    var settings = {
        dots: true,
        speed: 500,
        className: "center",
        autoplay: true,
        centerMode: true,
        centerPadding: "10px",
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const testimonials = [
        {
            id: 1,
            name: "Thomas Wagner",
            img: "/testimonials-1.jpg",
            review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.`,
            rating: 5
        },
        {
            id: 2,
            name: "Elizabeth Smith",
            img: "/testimonials-5.jpg",
            review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.`,
            rating: 5
        },
        {
            id: 3,
            name: "Oliver Jensen",
            img: "/testimonials-3.jpg",
            review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.`,
            rating: 5
        },
    ];
    return (
        <div>
            <div className=" text-center mb-32">
                <h2 className=' text-[20px] font-poppins font-light md:text-[20px] uppercase'>TESTIMONIALS</h2>
                <p className='text-[26px] font-protest md:text-3xl font-normal uppercase'>
                    What Are They <span className='text-red-500'>Saying About Us</span>
                </p>
            </div>


            {/* bg-slate-100 shadow-lg */}
            <div className='max-w-7xl mx-auto proj'>
                <div className='slider-container'>
                    <Slider {...settings}>

                        {testimonials.map((testimonial, index) => (

                            <div key={testimonial.id} className='px-3 pb-7 proj' style={{
                                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                            }}>
                                <div className='flex items-center justify-center'>
                                    <img className='mb-5 mt-[-70px] w-36 rounded-full shadow-lg' src={testimonial.img} alt='Testimonial' />
                                </div>
                                <div className='flex mb-4 gap-1.5 text-red-500 items-center justify-center text-2xl'>
                                    {Array(testimonial.rating).fill().map((_, i) => (
                                        <RiStarSFill key={i} />
                                    ))}
                                </div>
                                <h2 className='text-center font-protest text-2xl md:text-3xl font-bold mb-4'>{testimonial.name}</h2>
                                <div className='text-center flex justify-center mb-4'>
                                    <BiSolidQuoteLeft className='text-2xl md:text-3xl text-red-500' />
                                </div>
                                <p className='text-center font-poppins font-light text-[14px] md:text-[16px]'>{testimonial.review}</p>
                            </div>

                        ))}

                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials