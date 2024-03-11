import React from 'react'

const Contact = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <div className=" text-center mb-10">
                <h2 className=' text-[20px] font-poppins font-light md:text-[20px] uppercase'>Contact Us</h2>
                <p className='text-[26px] font-protest md:text-3xl font-bold uppercase'>
                    Need Help?  <span className='text-red-500'>Contact Us</span>
                </p>
            </div>

            <form className='shadow rounded bg-white p-12'>
                <div className='grid md:grid-cols-2 md:gap-4   '>
                    <input type='text' name='name' placeholder='Name'
                        className='input-field bg-slate-100 p-4 rounded mb-6 w-full' />
                    <input type='email' name='email' placeholder='Email'
                        className='input-field bg-slate-100 p-4 rounded mb-6 w-full' />
                </div>
                <div>
                    <input type='text' name='subject' placeholder='Subject'
                        className='input-field bg-slate-100 p-4 rounded mb-6 w-full' />
                </div>
                <div>
                    <textarea name='message' rows='5' placeholder='Message'
                        className='input-field bg-slate-100 p-4 rounded mb-6 w-full' />
                </div>
                <button type='submit' className='btn bg-red-500 hover:bg-red-400 text-white px-10 py-3 rounded-full font-protest font-bold'>Send Message</button>
            </form>
        </div>
    )
}

export default Contact