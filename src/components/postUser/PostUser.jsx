import Image from "next/image"

const PostUser = () => {
    return (
        <div className="flex items-center gap-5">
            <Image
                className="object-cover rounded-full"
                src={"/noavatar.png"}
                alt=""
                width={50}
                height={50}
            />
            <div className="flex flex-col">
                <span className="text-gray-500 font-bold">Author</span>
                <span className="font-[500]">{"user.username"}</span>
            </div>
        </div>
    )
}

export default PostUser