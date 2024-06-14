import PostUser from '@/components/postUser/PostUser'
import Image from 'next/image'
import React from 'react'

const getData = async (slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, { next: { revalidate: 3600 } });
    if (!res.ok) {
        throw new Error("Something went wrong")
    }

    return res.json();
}

const SingleBlog = async ({ params }) => {
    // console.log(params)
    const { slug } = params

    const data = await getData(slug)
    // console.log(data)

    return (
        <div className='px-[100px] flex gap-14'>
            <div className="left relative w-[300px] h-[500px] bg-red-300">
                <Image src={"/post.jpg"} fill className='object-cover' />
            </div>
            <div className="right flex flex-col gap-8">
                <div className="title">
                    <h1 className='text-[38px] font-bold'>{data?.title}</h1>
                </div>
                <div className="user flex gap-6">
                    <PostUser userId={data.userId} />
                    <div className="flex flex-col">
                        <span className="text-gray-500 font-bold">Published </span>
                        <span className="font-[500]">
                            10-5-2024
                        </span>
                    </div>
                </div>
                <div className="desc">
                    {data?.body}
                </div>
            </div>
        </div>
    )
}

export default SingleBlog