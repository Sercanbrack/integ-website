import { useState } from 'react';
import Link from "next/link"

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex items-center flex-row-reverse'>
            <div
             className="hamburger lg:hidden cursor-pointer text-2xl p-3 justify-end"
             onClick={toggleMenu}
            >
            <span className="hamburger-bar block w-10 h-1 bg-teal-700 mb-2"></span>
            <span className="hamburger-bar block w-10 h-1 bg-teal-700 mb-2"></span>
            <span className="hamburger-bar block w-10 h-1 bg-teal-700"></span>
        </div>
        <ul
            className={`nav-menu ${isOpen ? 'block' : 'hidden'} lg:flex flex-row lg:flex-row`}
        >
            <li className="nav-menu-item">
                <Link href="about" className="nav-menu-link block mt-4 lg:inline-block lg:mt-0 text-teal-200 sm:text-3xl sm:pr-2 lg:text-5xl lg:pr-4 hover:text-white mr-4">
                    About
                </Link>
            </li>
            <li className="nav-menu-item">
                <Link href="previous-work" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 sm:text-3xl sm:pr-2 lg:text-5xl lg:pr-4 hover:text-white mr-4">
                    Previous Work
                </Link>
            </li>
            <li className="nav-menu-item">
                <Link href="contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 sm:text-3xl sm:pr-2 lg:text-5xl lg:pr-4 hover:text-white mr-4">
                    Contact
                </Link>
            </li>

        </ul>
        </div>
    )
}

export default HamburgerMenu;