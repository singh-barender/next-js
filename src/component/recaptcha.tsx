import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha,
} from 'react-google-recaptcha-v3'
import React from 'react'

const RecaptchaComponent = (Component: any) => {
    const Recaptcha = ({ children, handleVerify }: any) => {
        return (
            <GoogleReCaptchaProvider
                reCaptchaKey={
                    process.env.NEXT_PUBLIC_GOOGLE_RECAPTCH_V3 as string
                }
            >
                <GoogleReCaptcha onVerify={handleVerify} />
                {children}
            </GoogleReCaptchaProvider>
        )
    }
    return class Higher extends React.Component {
        render() {
            return (
                <Recaptcha>
                    <Component {...this.props} />
                </Recaptcha>
            )
        }
    }
}

export { RecaptchaComponent }
