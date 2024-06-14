import PostUser from '@/components/postUser/PostUser'
import Image from 'next/image'
import React from 'react'

const SingleBlog = () => {
    return (
        <div className='px-[100px] flex gap-14'>
            <div className="left relative w-[300px] h-[500px] bg-red-300">
                <Image src={"/post.jpg"} fill className='object-cover' />
            </div>
            <div className="right flex flex-col gap-8">
                <div className="title">
                    <h1 className='text-[38px] font-bold'>Title</h1>
                </div>
                <div className="user">
                    <PostUser />
                </div>
                <div className="desc">
                    Description
                </div>
            </div>
        </div>
    )
}

export default SingleBlog