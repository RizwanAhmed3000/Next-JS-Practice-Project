import Link from 'next/link'
import React from 'react'

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
                    <Link href={link.path} key={link.title}>{link.title}</Link>
                ))
            }
        </div>
    )
}

export default Links