import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-gray-500 py-5 items-center'>
            <p className="text-4xl font-bold bg-gray-500 text-white px-4 py-2 rounded shadow-lg inline-block">
  Blogger
</p>
            <p className='text-sm text-white'>All rights reserved. Copyright @blogger</p>
            <div className='flex'>
                <Image src={assets.facebook_icon} alt='' width={40} />
                <Image src={assets.twitter_icon} alt='' width={40} />
                <Image src={assets.googleplus_icon} alt='' width={40} />
            </div>
        </div>
    )
}

export default Footer