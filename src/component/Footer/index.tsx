'use client'
import Image from 'next/image'
import footer_img_1 from '@/images/footer_img_1.png'
import footer_img_2 from '@/svg/footer_img_2.svg'
import facebook_icon from '@/svg/facebook_icon.svg'
import facebook_icon_hover from '@/svg/facebook_icon_hover.svg'
import linkedin_icon from '@/svg/linkedin_icon.svg'
import linkedin_icon_hover from '@/svg/linkedin_icon_hover.svg'
import youtube_icon from '@/svg/youtube_icon.svg'
import youtube_icon_hover from '@/svg/youtube_icon_hover.svg'
import mail_icon from '@/svg/mail_icon.svg'
import './footer.scss'

export const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-logo-social d-flex flex-wrap align-items-center justify-content-between">
                        <div className="footer-logo">
                            <Image
                                src={footer_img_1}
                                className="img-fluid footer-logo-image"
                                alt="footer-logo"
                            />
                        </div>
                        <div className="footer-social d-none d-sm-none d-md-block d-lg-block">
                            <div className="footer-social-icon d-flex align-items-center justify-content-end">
                                <span className="white-color">
                                    Follow Us :{' '}
                                </span>
                                <ul className="d-flex align-items-center footer-ul">
                                    <li>
                                        <a
                                            href="https://www.facebook.com/Dufther"
                                            target="_blank"
                                        >
                                            <Image
                                                src={facebook_icon}
                                                alt="no image"
                                                className="img-fluid social-svg"
                                            />
                                            <Image
                                                src={facebook_icon_hover}
                                                alt="no image"
                                                className="img-fluid social-hover-svg"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.linkedin.com/company/dufther"
                                            target="_blank"
                                        >
                                            <Image
                                                src={linkedin_icon}
                                                alt="no image"
                                                className="img-fluid social-svg"
                                            />
                                            <Image
                                                src={linkedin_icon_hover}
                                                alt="no image"
                                                className="img-fluid social-hover-svg"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.youtube.com/channel/UCkMtaYSgsNNlD5V2gpF5wQg/?guided_help_flow=5"
                                            target="_blank"
                                        >
                                            <Image
                                                src={youtube_icon}
                                                alt="no image"
                                                className="img-fluid social-svg"
                                            />
                                            <Image
                                                src={youtube_icon_hover}
                                                alt="no image"
                                                className="img-fluid social-hover-svg"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-menu-email justify-content-between align-items-center">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-4">
                            <div className="footer-first-link footer-link">
                                <ul className="d-flex align-items-center flex-wrap">
                                    <li className="fotter-li">
                                        <a href="https://dufther.com/about-us">
                                            About Us
                                        </a>
                                    </li>
                                    <li className="fotter-li">
                                        <a href="https://dufther.com/pricing">
                                            Pricing
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
                            <div className="footer-second-link footer-link">
                                <ul className="d-flex align-items-center justify-content-center flex-wrap">
                                    <li>
                                        <a href="https://dufther.com/about-us">
                                            Company
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://portal.dufther.com/user-agreement/terms"
                                            target="_blank"
                                        >
                                            Policies
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSc85VXvUCjl68ZJH0wIZhqvo5AhotFmhtFjKfoGsGooIzvbFg/viewform?embedded=true"
                                            target="_blank"
                                        >
                                            Partner Us
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-4">
                            <div className="footer-mail d-flex align-items-center justify-content-end">
                                <div className="footer-social d-block d-md-none">
                                    <div className="footer-social-icon d-flex align-items-center justify-content-end">
                                        <span className="white-color">
                                            Follow Us :{' '}
                                        </span>
                                        <ul className="d-flex align-items-center ">
                                            <li>
                                                <a
                                                    href="https://www.facebook.com/Dufther"
                                                    target="_blank"
                                                >
                                                    <Image
                                                        src={facebook_icon}
                                                        alt="no image"
                                                        className="img-fluid social-svg"
                                                    />
                                                    <Image
                                                        src={
                                                            facebook_icon_hover
                                                        }
                                                        alt="no image"
                                                        className="img-fluid social-hover-svg"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.linkedin.com/company/dufther"
                                                    target="_blank"
                                                >
                                                    <Image
                                                        src={linkedin_icon}
                                                        alt="no image"
                                                        className="img-fluid social-svg"
                                                    />
                                                    <Image
                                                        src={
                                                            linkedin_icon_hover
                                                        }
                                                        alt="no image"
                                                        className="img-fluid social-hover-svg"
                                                    />
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="https://www.youtube.com/channel/UCkMtaYSgsNNlD5V2gpF5wQg/?guided_help_flow=5"
                                                    target="_blank"
                                                >
                                                    <Image
                                                        src={youtube_icon}
                                                        alt="no image"
                                                        className="img-fluid social-svg"
                                                    />
                                                    <Image
                                                        src={youtube_icon_hover}
                                                        alt="no image"
                                                        className="img-fluid social-hover-svg"
                                                    />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="mailto:support@dufther.com">
                                    <Image
                                        src={mail_icon}
                                        alt="no image"
                                        className="img-fluid"
                                    />
                                    <span className="white-color">
                                        support@dufther.com
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="d-flex flex-wrap align-items-center justify-content-between  ul-flex">
                            <div className="footer-copyright-logo footer-mb-3-first">
                                <Image
                                    src={footer_img_2}
                                    style={{ width: '213px', height: '54px' }}
                                    className="img-fluid"
                                    alt="footer-startup"
                                />
                            </div>
                            <span className="footer-mb-3-sec">
                                © 2023 Version 2.3
                            </span>
                            <a
                                href="https://bluesparx.in/"
                                className="footer-mb-3-third"
                                target="_blank"
                            >
                                BluesparX Technologies
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
