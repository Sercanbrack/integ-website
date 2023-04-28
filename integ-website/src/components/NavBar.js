import react, {useState} from "react"
import Link from "next/link"
import React from "react"

export default function NavBar() {

    return (
            <nav className="max-w-screen-xl flex items-center justify-between flex-wrap bg-teal-600 p-6">
                <a href="#"className="flex items-center flex-shrink-0 text-white mr-6">
                    <span className='font-semibolt text-xl tracking-tight'>Integ Detailing</span>
                </a>
                <div className="block lg:hidden">
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-whtie hover:border-white" aria-controls="navbar-default" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg: items-center lg: w-auto">
                    <div className="text-sm lg:flex-grow">
                        <Link href="" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            About
                        </Link>
                        <Link href="" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Previous Work
                        </Link>
                        <Link href="" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Contact
                        </Link>
                    </div>
                </div>
            </nav>
        )
}

