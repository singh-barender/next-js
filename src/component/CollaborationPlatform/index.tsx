'use client'
import Image from 'next/image'
import img1 from '@/svg/colaboration-platform-image.svg'
import carrer_hub from '@/svg/carrer_hub_image.svg'
import page3_img from '@/svg/hiring_zone_image.svg'
import './collaborationPlatform.scss'

export const CollaborationPlatform = () => {
    return (
        <>
            {/* Collabration Section */}
            <div>
                <div className="colaboration-platform padd-btm-100 padd-top-100 mrn-top-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-6 category-2 content-center">
                                <Image
                                    src={img1}
                                    alt="no image"
                                    className="image-1 img-fluid"
                                    priority={true}
                                />
                                <div className="content-center d-block d-md-none">
                                    <a href="#" className="all-btn">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-6">
                                <div className="career-content career-content-left">
                                    <div className="content-center category-1 ">
                                        <div className="main-title">
                                            <h1>
                                                Collaborative <br /> Platform{' '}
                                                <br /> for{' '}
                                                <span className="ornage-color">
                                                    Recruitment
                                                </span>
                                            </h1>
                                            <p>An Ecosystem for Hiring</p>
                                        </div>
                                    </div>
                                    <div className="content-center d-none d-sm-none d-md-block d-lg-block">
                                        <a href="#" className="all-btn">
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Career Hub */}
            <div>
                <div className="career-hub-sec  padd-btm-100 padd-top-100 ">
                    <div className="container">
                        <div className="main-title">
                            <h2 className="white-color">Career Hub</h2>
                            <h3 className="white-color">For Job Aspirants</h3>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 content-center  order-category-2">
                                <Image
                                    src={carrer_hub}
                                    alt="no image"
                                    className=" img-fluid"
                                />
                            </div>
                            <div className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7">
                                <div className="career-content career-content-left order-category-1">
                                    <h2 className="white-color">
                                        Discover a World of Opportunities <br />{' '}
                                        <span>Unlock your Potential</span>
                                    </h2>
                                    <div className="career-desc">
                                        <p className="white-color">
                                            Our commitment is to lead you
                                            towards a purposeful career, not
                                            just any job. <br />
                                            We endorse positions geared toward
                                            honing industry-specific skills.
                                            <br />
                                            Ready to embark on this journey?
                                            Discover our innovative approach.
                                        </p>
                                    </div>
                                    <div className="mx-auto mrg-bottom content-center">
                                        <a href="#" className="all-btn">
                                            Sign Up
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hiring Section */}
            <div>
                <div className="hiring-zone-sec padd-btm-100 padd-top-100">
                    <div className="container">
                        <div className="main-title">
                            <h2 className="border-orange-color">
                                Hiring{' '}
                                <span className="ornage-color">Zone</span>
                            </h2>
                            <h3>For Employers</h3>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7">
                                <div className="career-content career-content-right hiring-zone-p">
                                    <h2 className="black-color">
                                        Focus on what matters the most <br />{' '}
                                        <span className="ornage-color">
                                            “Building your Team”
                                        </span>
                                    </h2>
                                    <div className="career-desc">
                                        <p className="">
                                            Whether you are an MSME or a Large
                                            Corporate, our platform expands your
                                            hiring options and provides you with
                                            greater flexibility
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 content-center d-flex justify-content-end">
                                <Image
                                    src={page3_img}
                                    alt="no image"
                                    className="img-fluid hiring-zone-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CollaborationPlatform
