import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <>
    <header id="header" className="header d-flex align-items-center">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

            <Link href="/" className="logo d-flex align-items-center">
                <h1>UpConstruction<span>.</span></h1>
            </Link>

            <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
            <nav id="navbar" className="navbar">
                <ul>
                <li><Link href="/" className="active">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li className="dropdown"><a href="#"><span>Dropdown</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                    <ul>
                    <li><Link href="#">Dropdown 1</Link></li>
                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                        <ul>
                        <li><Link href="#">Deep Dropdown 1</Link></li>
                        <li><Link href="#">Deep Dropdown 2</Link></li>
                        <li><Link href="#">Deep Dropdown 3</Link></li>
                        <li><Link href="#">Deep Dropdown 4</Link></li>
                        <li><Link href="#">Deep Dropdown 5</Link></li>
                        </ul>
                    </li>
                    <li><Link href="#">Dropdown 2</Link></li>
                    <li><Link href="#">Dropdown 3</Link></li>
                    <li><Link href="#">Dropdown 4</Link></li>
                    </ul>
                </li>
                <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>

        </div>
    </header>
    </>
  )
}

export default Header