
import Link from 'next/link'
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className='bg-[#011627] top-0 sticky w-full z-50'>
            <nav className='flex max-w-screen-xl h-[60px] mx-auto text-[#cecfd0] justify-between items-center px-6 lg:px-0'>
                {/* Logo */}
                <div className='text-2xl font-semibold cursor-pointer border-b-0 hover:border-b-2 hover:border-[#6fffe9] transition-all pb-1.5'>
                    PORTFOLIO <span className='text-[#6fffe9]'>.</span>
                </div>

                {/* Desktop Menu */}
                <ul className='hidden lg:flex gap-7 text-sm cursor-pointer'>
                    {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((item) => (
                        <li key={item} className='border-b-0 hover:border-b-2 hover:border-[#6fffe9] transition-all pb-1.5'>
                            <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                        </li>
                    ))}
                </ul>

                {/* Hamburger Icon */}
                <div className="lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 w-[50%] h-full bg-[#011627]/50  flex flex-col items-center pt-14 gap-6 text-xl font-semibold transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-[100%]"}`}>
                <button className="absolute top-5 right-6 text-[#6fffe9] text-3xl" onClick={() => setIsOpen(false)}>
                    <IoClose />
                </button>
                {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((item) => (
                    <Link key={item} href={`/${item.toLowerCase()}`} className="hover:text-[#6fffe9] text-sm transition-all text-[#cecfd0]" onClick={() => setIsOpen(false)}>
                        {item}
                    </Link>
                ))}
            </div>
        </header>
    )
}

export default Navbar
