import { useState } from "react"
import HamburgerMenu from "./HamburgerMenu"


export default function NavBar() {

    return (
            <nav className="w-screen flex justify-between items-center flex-wrap bg-teal-600 sm:p-6 sm:pb-14 sm:pt-14 lg:p-10 lg:pb-16 lg:pt-16">
                <a href="/"className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className='font-semibolt sm:text-6xl lg:pb-4 lg:pt-4 lg:text-7xl tracking-tight'>Integ Detailing</span>
                </a>
                <HamburgerMenu />
            </nav>
        )
}

