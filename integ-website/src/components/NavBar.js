import { useState } from "react"
import HamburgerMenu from "./HamburgerMenu"


export default function NavBar() {

    return (
            <nav className="w-screen flex justify-between items-center flex-wrap bg-teal-600 p-6">
                <a href="#"className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className='font-semibolt text-xl tracking-tight'>Integ Detailing</span>
                </a>
                <HamburgerMenu />
            </nav>
        )
}

