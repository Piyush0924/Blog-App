import React from 'react'
import Sidebar from '@/components/adminComponents/Sidebar'
import Image from 'next/image'
import { assets } from '@/Assets/assets'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
    return (
        <>
            <div className='flex'>
                <ToastContainer theme='dark' />
                <Sidebar />
                <div className='flex flex-col w-full'>
                    <div className='flex items-center justify-between w-full py-3 px-12 max-h-[60px] border-b border-gray-500'>
                        <h3 className='font-medium'>Admin Panel</h3>
                        <Image src={assets.profile_icon} width={40} alt='' />
                    </div>
                    {children}
                </div>
            </div>

        </>
    )
}