'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import logo from '@/images/Header_logo.png'
import './header.scss'
import { useRouter } from 'next/navigation'

export const Header = ({
    scrolled,
    isSidebarOpen,
    setScrolled,
    closeSidebar,
}: any) => {
    const router = useRouter()
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0
            setScrolled(isScrolled)
        }

        const handleOutsideClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement
            if (isSidebarOpen && !target.closest('.navbar-collapse')) {
                // If the click is outside of the sidebar, close it
                closeSidebar()
            }
        }

        window.addEventListener('scroll', handleScroll)
        document.addEventListener('click', handleOutsideClick)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('click', handleOutsideClick)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isSidebarOpen])

    return (
        <>
            <div
                className={`navbar-1 fixed-top d-block ${
                    scrolled ? 'scrolled' : ''
                }`}
            >
                <nav className="navbar navbar-expand-lg bg-white">
                    <div className="container logo-wrapper">
                        <Image
                            src={logo}
                            alt="nav logo"
                            className="img-fluid"
                        />
                        <div className="signin-toggle d-flex align-items-center">
                            <button
                                type="button"
                                className="all-btn sign-btn mt-0 sidebar-margin d-none d-md-block d-lg-none"
                                onClick={() =>
                                    router.push(
                                        'https://portal.dufther.com/login'
                                    )
                                }
                            >
                                {' '}
                                Sign In &nbsp; | &nbsp; Sign Up
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
                                        href="https://dufther.com/about-us"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link  px-4 fw-medium link-hover"
                                        aria-current="page"
                                        href="https://dufther.com/pricing"
                                    >
                                        Pricing
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link  px-4 fw-medium link-hover"
                                        aria-current="page"
                                        href="https://portal.dufther.com/user-agreement/terms"
                                    >
                                        Policies
                                    </a>
                                </li>
                            </ul>
                            <button
                                type="button"
                                className="all-btn sign-btn-toggle mt-0 sidebar-margin "
                                onClick={() =>
                                    router.push(
                                        'https://portal.dufther.com/login'
                                    )
                                }
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
