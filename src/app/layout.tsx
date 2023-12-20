'use client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'
import Footer from '@/component/Footer'
import Header from '@/component/Header'
import Image from 'next/image'
import toggle_icon from '@/svg/humbarg-menu.svg'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter()

    const [isSidebarOpen, setSidebarOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const toggleSidebar = (): void => {
        setSidebarOpen(!isSidebarOpen)
        document.body.classList.add('navbar-active')
    }

    const closeSidebar = (): void => {
        setSidebarOpen(false)
        document.body.classList.remove('navbar-active')
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            require('bootstrap/dist/js/bootstrap.js')
            require('bootstrap/dist/js/bootstrap.bundle.min.js')
        }
    }, [])

    return (
        <html lang="en">
            <title>
                Hiring Marketplace | Recruitment Solutions | Placements
                Management
            </title>
            <body className={inter.className}>
                <Header
                    scrolled={scrolled}
                    isSidebarOpen={isSidebarOpen}
                    setScrolled={setScrolled}
                    setSidebarOpen={setSidebarOpen}
                    closeSidebar={closeSidebar}
                />
                {children}
                <div className="mweb-toggler">
                    {' '}
                    <button
                        className="navbar-toggler toggle-button border-0"
                        type="button"
                        onClick={toggleSidebar}
                    >
                        <Image
                            src={toggle_icon}
                            alt="toggle-icon"
                            height={20}
                            width={20}
                        />
                    </button>
                    <button
                        type="button"
                        className="all-btn sign-btn auth-footer-btn mt-0 sidebar-margin"
                        onClick={() =>
                            router.push('https://portal.dufther.com/login')
                        }
                    >
                        {' '}
                        Login &nbsp; | &nbsp; Register
                    </button>
                </div>
                <Footer />
            </body>
        </html>
    )
}
