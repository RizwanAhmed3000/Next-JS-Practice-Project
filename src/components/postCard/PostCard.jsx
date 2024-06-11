import Image from "next/image"
import Link from "next/link"

const PostCard = ({ post }) => {
    return (
        <div className="flex flex-col gap-[20px] mb-[10px]">
            <div className="flex">
                {/* {post.img && <div className="w-[90%] h-[400px] relative">
                    <Image src={post.img} alt="" fill className="object-cover" />
                </div>} */}
                <div className="w-[100%] h-[400px] relative">
                    <Image src="/post.jpg" alt="" fill className="object-cover" />
                </div>
                <span className="text-[12px] rotate-[270deg] m-auto">{`post.createdAt?.toString().slice(4, 16)`}</span>
            </div>
            <div className="">
                <h1 className="w-[90%] mb-[10px] text-[20px]">{`post.title`}</h1>
                <p className="w-[90%] mb-[10px] font-[300] text-gray-500">{`post.body`}</p>
                <Link className="underline" href={`/blog/${`post.slug`}`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard