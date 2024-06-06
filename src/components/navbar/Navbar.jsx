import Link from 'next/link'
import React from 'react'
import Links from './links/Links'

const Navbar = () => {
    return (
        <div>
            <div className="wrapper bg-slate-700 text-white flex items-center py-3 px-12 justify-between">
                <div className="logo text-[1.5rem] font-bold">LOGO</div>
                <div className="">
                    <Links />
                </div>
            </div>
        </div>
    )
}

export default Navbar