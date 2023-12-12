'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import logo from '@/images/Header_logo.png'
import toggle_icon from '@/images/toggle-icon.png'
import './header.scss'

export const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const toggleSidebar = (): void => {
        setSidebarOpen(!isSidebarOpen);
        document.body.classList.add('navbar-active');
    }
    
    const closeSidebar = (): void => {
        setSidebarOpen(false);
        document.body.classList.remove('navbar-active');
    }

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    return (
        <>
            <div
                className={`navbar-1 fixed-top d-block ${
                    scrolled ? 'scrolled' : ''
                }`}
            >
                <nav className="navbar navbar-expand-lg bg-white">
                    <div className="container ">
                        <Image
                            src={logo}
                            alt="nav logo"
                            className="img-fluid"
                        />
                        <div className="signin-toggle d-flex align-items-center">
                            <button
                                type="button"
                                className="all-btn sign-btn mt-0 sidebar-margin d-none d-md-block d-lg-none"
                            >
                                {' '}
                                Sign In  &nbsp; | &nbsp; Sign Up
                            </button>
                            <button
                                className="navbar-toggler border-0"
                                type="button"
                                onClick={toggleSidebar}
                            >
                                <Image
                                    src={toggle_icon}
                                    alt="toggle-icon"
                                    className="navbar-toggler-img"
                                />
                            </button>
                        </div>
                        <div
                            className={`collapse navbar-collapse ${
                                isSidebarOpen ? 'show' : ''
                            }`}
                        >
                            {isSidebarOpen && (
                                <div className="collapse-header">
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={closeSidebar}
                                        aria-label="Close"
                                    ></button>
                                </div>
                            )}

                            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0 font-18">
                                <li className="nav-item">
                                    <a
                                        className="nav-link  px-4 fw-medium link-hover"
                                        aria-current="page"
                                        href="#"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link  px-4 fw-medium link-hover"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link  px-4 fw-medium link-hover"
                                        aria-current="page"
                                        href="#"
                                    >
                                        Policies
                                    </a>
                                </li>
                            </ul>
                            <button
                                type="button"
                                className="all-btn sign-btn-toggle mt-0 sidebar-margin "
                            >
                                Sign In &nbsp; | &nbsp;&nbsp; Sign Up 
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header
