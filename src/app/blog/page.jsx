import PostCard from '@/components/postCard/PostCard'
import React from 'react'

const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {next: {revalidate: 3600}});
    if (!res.ok) {
        throw new Error("Something went wrong")
    }

    return res.json();
}

const BlogPage = async () => {

    const posts = await getData()
    // console.log(posts)

    return (
        <div className='flex px-[100px] gap-[50px] flex-wrap py-[30px]'>
            {
                posts.splice(0, 10).map((post) => (
                    <div className='w-[30%]'>
                        <PostCard post={post}/>
                    </div>
                ))
            }
        </div>
    )
}

export default BlogPage