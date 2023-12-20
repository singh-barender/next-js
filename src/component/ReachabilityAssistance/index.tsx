'use client'
import React, { memo } from 'react'
import Image from 'next/image'
import { ErrorMessage, Field, Formik, Form } from 'formik'
import * as Yup from 'yup'
import india_map from '@/svg/contact_map_india_map.svg'
import axios from 'axios'
import { RecaptchaComponent } from '@/component/recaptcha'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { ToastContainer, toast } from 'react-toastify'
import './reachabilityAssistance.scss'

interface FormValues {
    name: string
    email: string
    mobileNumber: number | string
    message: string
    recaptchaToken: string
}

export const ReachabilityAssistance = () => {
    // =============** Formik form **=================
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .max(50, 'Name not be more than 50 characters')
            .required('Name is required'),
        email: Yup.string()
            .email('Invalid email address')
            .required('Email Address is required'),
        mobileNumber: Yup.string()
            .min(10, 'Mobile number must be at least 10 characters')
            .max(10, 'Mobile number must be at most 10 characters')
            .required('A phone number is required'),
        message: Yup.string()
            .max(100, 'Message not be more than 100 characters')
            .required('Message is required'),
    })
    const { executeRecaptcha } = useGoogleReCaptcha()

    const initialValues: FormValues = {
        name: '',
        email: '',
        mobileNumber: '',
        message: '',
        recaptchaToken: '',
    }

    const handleSubmit = async (
        values: FormValues,
        {
            setSubmitting,
            resetForm,
        }: {
            setSubmitting: (isSubmitting: boolean) => void
            resetForm: () => void
        }
    ) => {
        try {
            if (!executeRecaptcha) {
                return
            }

            const token = await executeRecaptcha('referContact')
            const apiResponse = await axios.post(
                process.env.NEXT_PUBLIC_API_DOMAIN + '/referContacts',
                { ...values, recaptchaToken: token }
            )
            toast(
                'Thanks for your message! Our team will be in touch with you shortly.'
            )
            resetForm()
        } catch (error: any) {
             toast(
                 'This contact has already been registered or referred before!'
             )
        }

        setSubmitting(false)
    }
    return (
        <>
            <div>
                <ToastContainer />
                <div className="contact-map-form padd-btm-100 padd-top-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                                <div className="main-title align-items-start">
                                    <h2 className="main-border-none">
                                        We Serve Across <br />{' '}
                                        <span className="ornage-color">
                                            Industries
                                        </span>
                                    </h2>
                                    <p>
                                        Our Services are presently limited to
                                        India
                                    </p>
                                </div>
                                <div className="center-image">
                                    <Image
                                        src={india_map}
                                        alt="india map"
                                        className="img-fluid contact-map-form-img"
                                        priority={true}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 contact-form">
                                <div className="main-title align-items-start">
                                    <h2 className="main-border-none">
                                        Reachability{' '}
                                        <span className="ornage-color">
                                            Assistance
                                        </span>
                                    </h2>
                                    <p>Help Us Connect with You</p>
                                </div>
                                <div className="contact-form-width">
                                    <Formik
                                        initialValues={initialValues}
                                        validationSchema={validationSchema}
                                        onSubmit={handleSubmit}
                                    >
                                        {({ values }) => (
                                            <Form className="contact-map-form">
                                                <div className="contact-input">
                                                    <label
                                                        htmlFor="name"
                                                        className="form-label form-label-font"
                                                    >
                                                        Full Name
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        id="name"
                                                        name="name"
                                                        values={values?.name}
                                                        required
                                                    />
                                                    <ErrorMessage
                                                        name="name"
                                                        component="div"
                                                        className="error-message"
                                                    />
                                                </div>
                                                <div className="contact-input">
                                                    <label
                                                        htmlFor="email"
                                                        className="form-label form-label-font"
                                                    >
                                                        Email Address
                                                    </label>
                                                    <Field
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        name="email"
                                                        values={values?.email}
                                                        required
                                                    />
                                                    <ErrorMessage
                                                        name="email"
                                                        component="div"
                                                        className="error-message"
                                                    />
                                                </div>
                                                <div className="contact-input">
                                                    <label
                                                        htmlFor="mobile-number"
                                                        className="form-label form-label-font"
                                                    >
                                                        Mobile Number
                                                    </label>
                                                    <Field
                                                        type="tel"
                                                        className="form-control"
                                                        id="mobile-number"
                                                        name="mobileNumber"
                                                        values={
                                                            values?.mobileNumber
                                                        }
                                                    />
                                                    <ErrorMessage
                                                        name="mobileNumber"
                                                        component="div"
                                                        className="error-message"
                                                    />
                                                </div>
                                                <div className="contact-input">
                                                    <label
                                                        htmlFor="message"
                                                        className="form-label form-label-font"
                                                    >
                                                        Message
                                                    </label>
                                                    <Field
                                                        as="textarea"
                                                        className="form-control"
                                                        id="message"
                                                        name="message"
                                                        rows="4"
                                                        required
                                                        values={values?.message}
                                                    ></Field>
                                                    <ErrorMessage
                                                        name="message"
                                                        component="div"
                                                        className="error-message"
                                                    />
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center">
                                                    <button
                                                        type="submit"
                                                        className="all-btn"
                                                    >
                                                        submit
                                                    </button>
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                                <p className="contact-rules text-center">
                                    I consent to receiving communication from
                                    dufther
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecaptchaComponent(memo(ReachabilityAssistance))
