import React, { useState } from 'react'
import { assets } from '@/Assets/assets'
import Image from 'next/image'
import axios from 'axios';
import { toast } from 'react-toastify';

const Header = () => {
    const [email, setEmail] = useState("");
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);

        const response = await axios.post('/api/email', formData);
        if (response.data.success) {
            toast.success(response.data.msg);
            setEmail("");
        }
        else {
            toast.error("Error");
        }
    }
    return (
        <div className='px-5 py-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
            <p className="text-4xl font-bold bg-gray-500 text-white px-4 py-2 rounded shadow-lg inline-block">
  Blogger
</p>

                <button className='flex items-center text-4xl font-bold bg-gray-500 text-white px-4 py-2 rounded shadow-lg '>Get started <Image src={assets.arrow} alt='arrow' className="ml-2" /></button>
            </div>
        
            <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 border border-gray-500 m-auto shadow-[-1px_4px_25px_#000000] '>
                <input onChange={(e) => { setEmail(e.target.value) }} value={email} type="email" placeholder='Enter your email' className='pl-4 outline-none' />
                <button type="submit" className='border-l border-gray-500 px-4 py-4 sm:px-8 active:bg-gray-500 active:text-white'>Subscribe</button>
            </form>
        </div>
    )
}

export default Header