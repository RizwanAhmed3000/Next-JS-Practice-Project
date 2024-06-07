"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ item }) => {
    const path = usePathname();
    // console.log(path)
    return (
        <Link href={item.path} className={`min-w-[100px] p-[10px] rounded font-bold text-center ${path === item.path && "bg-white text-black"} duration-300 ease-out`}>
            {item.title}
        </Link>
    )
}

export default NavLink