import Image from "next/image"

const getUser = async (slug) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${slug}`, {cache: "no-store"});
    if (!res.ok) {
        throw new Error("Something went wrong")
    }

    return res.json();
}

const PostUser = async ({ userId }) => {
    
    const user = await getUser(userId)

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
                <span className="font-[500]">{user.username}</span>
            </div>
        </div>
    )
}

export default PostUser