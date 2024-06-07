import Link from 'next/link'
import React from 'react'
import NavLink from './navLink/NavLink'

const Links = () => {
    const links = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Login",
            path: "/login"
        },
    ]
    return (
        <div className='links flex items-center gap-6'>
            {
                links.map((link) => (
                    <NavLink item={link} key={link.title}/>
                ))
            }
        </div>
    )
}

export default Links