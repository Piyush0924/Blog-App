import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = ({ title, description, image, category, id }) => {
    return (
        <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-gray-500 hover:shadow-[-7px_0px_0px_#6b7280] '>
            <Link href={`/blogs/${id}`}>
                <Image src={image} alt='' width={400} height={400} className='border border-gray-500 ' />
            </Link>
            <p className='ml-5 mt-5 px-1 inline-block  border-gray-500  text-white text-sm'>{category}</p>
            <div className='p-5'>
                <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-500'>{title}</h5>
                <p className='mb-3 text-sm tracking-tight text-gray-500' dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}></p>
                <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center'>
                    Read more <Image src={assets.arrow} alt='' width={12} className='ml-4' />
                </Link>
            </div>
        </div >
    )
}

export default BlogCard