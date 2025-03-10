import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='px-2 sm:pl-14 py-3 border border-black'>
            <p className="text-4xl font-bold bg-gray-500 text-white px-4 py-2 rounded shadow-lg inline-block">
  Blogger
</p>
            </div>
            {/* navigation buttons*/}
            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
                <div className='absolute right-0 w-[50%] sm:w-[80%]'>
                    <Link href='/admin/addProduct' className='flex items-center border border-black gap-3 font-medium py-2 bg-white shadow-[-7px_0px_0px_#6b7280]'>
                        <Image src={assets.add_icon} width={28} alt='' /><p>Add blogs</p>
                    </Link>
                    <Link href='/admin/blogList' className='flex items-center border border-black gap-3 mt-5 font-medium py-2 bg-white shadow-[-7px_0px_0px_#6b7280]'>
                        <Image src={assets.blog_icon} width={28} alt='' /><p>Blog list</p>
                    </Link>
                    <Link href='/admin/subscriptions' className='flex items-center border border-black mt-5 gap-3 font-medium py-2 bg-white shadow-[-7px_0px_0px_#6b7280]'>
                        <Image src={assets.email_icon} width={28} alt='' /><p>Subsriptions</p>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Sidebar