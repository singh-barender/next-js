import Image from 'next/image'
import become_shap from '@/images/become-shape.png'
import flag_icon from '@/svg/become_solution_flag_icon.svg'
import './becomeSolution.scss'

export const BecomeSolution = () => {
    return (
        <>
            <div>
                <div className="become-solution-sec padd-btm-100 padd-top-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-12 col-md-7 col-lg-8 col-xl-8">
                                <div className="career-content career-content-right">
                                    <p>
                                        By 2030, When most Countries around the
                                        world will have middle aged or elderly
                                        Workforces, India will still be young.
                                    </p>
                                    <p>
                                        Be Part of a Services Sector-led
                                        Transformation that can harness
                                        Technology with Skilled Human Capital.
                                    </p>
                                    <h4>
                                        As we brace for the{' '}
                                        <span className="ornage-color ft-20">
                                            Fourth Industrial Revolution,
                                        </span>{' '}
                                        where new technologies merge the
                                        physical, digital, and biological
                                        worlds, acquiring the right skills makes
                                        firms more productive and competitive.
                                    </h4>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4">
                                <div className="become-shape">
                                    <Image
                                        src={become_shap}
                                        alt="become-shape-img"
                                        className="img-fluid"
                                        priority={true}
                                    />
                                </div>
                                <div className="become-solution-content d-flex flex-column justify-content-end">
                                    <div className="become-solution-ind-main d-flex align-items-center">
                                        <div className="become-solution-ind d-flex align-items-center justify-content-center">
                                            <Image
                                                src={flag_icon}
                                                alt="india-icon"
                                                className="flag-icon"
                                            />
                                            <span>INDIA</span>
                                        </div>
                                    </div>
                                    <h2 className="white-color">
                                        Become a <br />{' '}
                                        <span className="become-solution-content-span">
                                            Solutions Provider{' '}
                                        </span>{' '}
                                        to the World
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BecomeSolution
