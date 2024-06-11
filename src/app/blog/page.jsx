import PostCard from '@/components/postCard/PostCard'
import React from 'react'

const BlogPage = () => {
    return (
        <div className='flex px-[100px] gap-[50px] flex-wrap py-[30px]'>
            <div className='w-[30%]'>
                <PostCard />
            </div>
            <div className='w-[30%]'>
                <PostCard />
            </div>
            <div className='w-[30%]'>
                <PostCard />
            </div>
            <div className='w-[30%]'>
                <PostCard />
            </div>
        </div>
    )
}

export default BlogPage