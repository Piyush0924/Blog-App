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
                    <div className='flex items-center justify-between w-full py-3 px-12 max-h-[60px] border-b border-black'>
                        <h3 className='font-medium'>Admin Panel</h3>
                        
                    </div>
                    {children}
                </div>
            </div>

        </>
    )
}