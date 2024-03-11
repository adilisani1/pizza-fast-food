import React from 'react'

const Hero = () => {


    return (

        <div>
            <div className='relative w-full md:!pt-[160px]  md:pb-[60px] flex items-center justify-center text-black'>

                <div className='max-w-7xl  mx-auto grid md:grid-cols-2 items-center px-3 md:px-6'>
                    <div className=' py-20  text-center md:text-left z-10'>
                        <h1 className='text-[38px] md:text-5xl mb-5  font-protest font-bold '>Fast Food Restaurant</h1>
                        <p className='mt-2 mb-3 font-poppins font-light text-[15px]  md:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quisquam, quidem.</p>
                        <button className='mt-4 bg-red-500 hover:bg-red-400 text-white px-10 py-3 rounded-full font-protest font-bold'>Order Now</button>
                    </div>

                    <img className='w-[200px] z-[1]  absolute bottom-[20px] left-[0px]'
                        src='/leaf-top.png' alt="leaf top" />


                    <img className='w-[30px] md:w-[50px] z-[1] absolute top-[50px] right-[100px]'
                        src='/leaf-left.png' alt="leaf bottom" />
                    <div className='relative'>


                        <img className='w-[50px] absolute bottom-10 left-0 z-20 md:bottom-[50px] md:left-[50px]'
                            src='/tommato-one.png' alt="Tommato One" />
                        <img
                            className='w-[50px] absolute top-0 z-20 right-0 md:top-[50px] md:right-[50px]'
                            src='/tommato-two.png' alt="Tommato Two" />

                        <div className='relative'>
                            {/* <span className='img-bg absolute bg-yellow-400 w-[500px] h-[500px] top-0 right-0 z-[1] bottom-0 rounded-full'></span> */}
                            <img className='w-[30px] md:w-[50px] z-[1] left-[60px] absolute md:top-[80px] md:left-[0px]'
                                src='/leaf-right.png' alt="leaf top" />
                            <img className='w-[900px] relative z-10 object-contain h-[300px] md:h-[500px]' src='./hero-pizza-img.png' alt="Hero Image" />
                        </div>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Hero