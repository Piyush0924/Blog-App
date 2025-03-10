'use client';

import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { assets } from '@/Assets/assets'; // Assuming you have these assets imported

const Page = ({ params }) => {
    const [data, setData] = useState(null); // State to store fetched blog data
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(null); // State to handle errors

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`/api/blog?id=${params.id}`); // Fetch blog data by ID
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchBlogData();
        }
    }, [params.id]); // Re-run effect when `params.id` changes

    if (loading) {
        return <p className='text-center text-3xl mt-10'>Loading...</p>;
    }

    if (error) {
        return <p className='text-center text-red-500 mt-10'>Error: {error}</p>;
    }

    if (!data) {
        return <p className='text-center text-3xl mt-10'>No blog found.</p>;
    }

    return (
        <div>
            <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
                <div className="flex justify-between items-center">
                    <Link href='/'>
                    <p class="text-4xl font-bold bg-gray-500 text-white px-4 py-2 rounded shadow-lg inline-block">
  Blogger
</p>
                    </Link>
                    
                    
                </div>
                <div className="text-center my-24">
                    <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                    <Image src={data.author_img} width={60} height={60} alt='author_img' className='mx-auto mt-6 border border-white rounded-full' />
                    <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
                </div>
            </div>
            <div className='mx-5 md:mx-auto max-w-[800px] mt-[-100px] mb-10'>
                <Image src={data.image} width={1280} height={720} alt='Blog image' priority className='border-8 border-white' />
                {/* limitting decsription */}
                <div className='blog-content' dangerouslySetInnerHTML={{ __html: data.description }}>
                </div>

                <div className='my-24'>
                    <p className='text-balance font-semibold my-4'>Share this article on social media</p>
                    <div className='flex'>
                        <Image src={assets.facebook_icon} alt='' />
                        <Image src={assets.twitter_icon} alt='' />
                        <Image src={assets.googleplus_icon} alt='' />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Page;
