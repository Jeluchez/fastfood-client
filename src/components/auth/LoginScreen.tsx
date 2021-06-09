import React from 'react'
import logo from '../../media/images/logo.svg'
import bgHamburger from '../../media/images/hamburguer-bg.png'
import facbookIcon from '../../media/images/facebook_icon.png'
import { LoginForm } from './LoginForm';


export const LoginScreen = () => {
    return (
        <div className="login" style={{ backgroundImage: `url(${bgHamburger})` }}>
            <div className="login__container-outer">
                <div className="login__container">
                    {/* Header */}
                    <div className="login__header">
                        <div className="logo-wrapper">
                            <img src={logo} alt="logo spotify" />
                            <h2 className="title">Fast-food</h2>
                            <span>© By Xisart</span>
                        </div>
                        <div className="contact-us">
                            <a href="#/">
                                <span>¿Tienes problemas?</span>
                                <span>contáctanos</span>
                            </a>
                        </div>
                    </div>
                    {/* title */}
                    <h1 className="login__login-title">Login</h1>
                    {/* social */}
                    <div className="login__social">

                        <span className="social-find-us">
                            Encuentranos en Facebook
                    </span>
                        <button className="btn-f">
                            <img src={facbookIcon} alt="facebook-icon" />
                        </button>
                    </div>

                    {/* form-wrapper */}
                    <div className="login__form-wrapper">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
