'use client'
import Image from 'next/image'
import telent_bridge_image from '@/svg/telent_bridge_image.svg'
import data_privacy_img from '@/svg/data_privacy_img.svg'
import mobile_view from '@/images/download-app-mobile.png'
import mobile_view_Backgorund from '@/svg/download_app_mobile_view_Backgorund.svg'
import google_play from '@/svg/download_app_google_play.svg'
import qr_code from '@/svg/download_app_qr_code.svg'
// import ".//page.scss"
import '../../app/page.scss'
import './talentBridge.scss'

export const TalentBridge = () => {
    return (
        <>
            <div>
                <div className="talent-bridge-sec padd-btm-100 padd-top-100">
                    <div className="container">
                        <div className="main-title">
                            <h2 className="white-color">Talent Bridge</h2>
                            <h3 className="white-color">
                                Empowering Service Providers
                            </h3>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 order-category-2 content-center">
                                <Image
                                    src={telent_bridge_image}
                                    alt="no image"
                                    className="img-fluid"
                                    priority={true}
                                />
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7 order-category-1">
                                <div className="career-content career-content-left">
                                    <h2 className="white-color">
                                        Power your Business with <br />{' '}
                                        <span>
                                            Simple and Cost Effective Solutions
                                        </span>
                                    </h2>
                                    <div className="career-desc">
                                        <p className="white-color">
                                            Improve the Efficiency of Daily
                                            Operations for Staffing and Skill
                                            Development Organizations with Deep
                                            Solutions
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Data Privacy */}
            <div>
                <div className="data-privacy-sec padd-btm-100 padd-top-100">
                    <div className="container">
                        <div className="data-privacy-content d-flex align-items-center justify-content-center flex-column text-center">
                            <Image
                                src={data_privacy_img}
                                alt="no image"
                                className="img-fluid"
                            />
                            <div className="main-title mb-0">
                                <h2 className="main-border-none main-border-none">
                                    Data Privacy and{' '}
                                    <span className="ornage-color">
                                        Security Measures
                                    </span>
                                </h2>
                                <p className="main-title-p">
                                    We prioritize your data security and privacy
                                    with stringent controls. As a Recruitment
                                    Solution Provider it is our duty to ensure
                                    that your data is kept Confidential without
                                    any Unauthorized access.
                                </p>
                                <p className="main-title-p">
                                    To ensure this we have limited the
                                    integrations with Third Party applications
                                    and have employed various industry best
                                    practices to safeguard against Data
                                    breaches.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Download App */}
            <div>
                <div className="download-app-sec  padd-btm-100 padd-top-100">
                    <div className="download-app-svg">
                        <Image
                            src={mobile_view_Backgorund}
                            alt="no image"
                            className="img-fluid"
                            priority={true}
                        />
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
                                <div className="main-title d-block d-md-none">
                                    <p className="text-start">
                                        Access Anytime, Anywhere!
                                    </p>
                                    <h2 className="main-border-none border-bottom-0  ">
                                        Download Our App{' '}
                                        <span className="ornage-color">
                                            Today
                                        </span>
                                    </h2>
                                    <div className="career-desc mb-0">
                                        <p>
                                            Make the most of web and app
                                            capabilities for an enhanced
                                            experience.
                                        </p>
                                    </div>
                                </div>
                                <div className="download-app-img text-center">
                                    <Image
                                        src={mobile_view}
                                        alt="download-app-imges"
                                        className="img-fluid m-auto"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-9">
                                <div className="career-content career-content-left">
                                    <div className="main-title d-none d-sm-none d-md-block d-lg-block d-block ">
                                        <p className="text-start">
                                            Access Anytime, Anywhere!
                                        </p>
                                        <h2 className="main-border-none border-bottom-0  ">
                                            Download Our App{' '}
                                            <span className="ornage-color">
                                                Today
                                            </span>
                                        </h2>
                                        <div className="career-desc mb-0">
                                            <p>
                                                Make the most of web and app
                                                capabilities for an enhanced
                                                experience.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="download-app-scan download-content-center d-flex align-items-center justify-content-between">
                                        <a
                                            href="#"
                                            target="_blank"
                                            className="content-center"
                                        >
                                            <Image
                                                src={google_play}
                                                alt="no image"
                                                className="img-fluid"
                                            />
                                        </a>
                                        <h4 className="text-center">
                                            Or Scan QR to download <br /> the
                                            Dufther App
                                        </h4>
                                        <div className="download-scan content-center">
                                            <Image
                                                src={qr_code}
                                                alt="qr-code"
                                                className="img-fluid download-scan-img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TalentBridge
