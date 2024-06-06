import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div className="wrapper bg-slate-700 text-white flex items-center py-3 px-12 justify-between">
                <div className="logo text-[1.5rem] font-bold">LOGO</div>
                <div className="links flex items-center gap-6">
                    <Link href={"/"} className='cursor-pointer'>Home</Link>
                    <Link href={"/about"} className='cursor-pointer'>About</Link>
                    <Link href={"/contact"} className='cursor-pointer'>Contact</Link>
                    <Link href={"/blog"} className='cursor-pointer'>Blog</Link>
                    <Link href={"/admin"} className='cursor-pointer'>Admin</Link>
                    <Link href={"/login"}>
                        <button>
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar