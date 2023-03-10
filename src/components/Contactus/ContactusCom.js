import React from 'react'
import './ContactusCom.css'
import { BiUser, BiCurrentLocation, BiPhone } from 'react-icons/bi'
import { HiMail } from 'react-icons/hi'


function ContactusCom() {
    return (
        <section className="contact-area active" id="contact-area">
            <div className="main-section">
                <div className="container">

                    <div className="contact-content">
                        <div className="row page-bar">
                            <div className="col-12">
                                <div className="page-heading">
                                    <h2 className="section-title">Get I<span>n Touch</span></h2>
                                    <div className="animated-bar">
                                        <div className="animated-line"></div>
                                    </div>
                                </div>

                                <div className="contact-section single-section">
                                    <div className="row">

                                        <div className="col-12 col-lg-7">
                                            <form className="contact-form" id="contact-form">
                                                <h4 className="contact-form-title">
                                                    Message
                                                    <span>Me</span>
                                                </h4>
                                                <div className="row">
                                                    <div className="col-12 col-md-6 form-group">
                                                        <input className="form-control" id="contact-firstname" type="text" name="firstname" placeholder="Firstname" title="Firstname" required />
                                                    </div>
                                                    <div className="col-12 col-md-6 form-group">
                                                        <input className="form-control" id="contact-lastname" type="text" name="lastname" placeholder="Lastname" title="Lastname" required />
                                                    </div>
                                                    <div className="col-12 form-group">
                                                        <input className="form-control" id="contact-email" type="email" name="email" placeholder="Email" title="Email" required />
                                                    </div>
                                                    <div className="col-12 form-group">
                                                        <input className="form-control" id="contact-subject" type="text" name="subject" placeholder="Subject" title="Subject" required />
                                                    </div>
                                                    <div className="col-12 form-group form-message">
                                                        <textarea className="form-control" id="contact-message" name="message" placeholder="Message" rows="8" title="Message" required></textarea>
                                                    </div>
                                                    <div className="col-12 form-submit">
                                                        <button className="btn button-main button-scheme" id="contact-submit" type="submit" title="Submit">Send Message</button>
                                                        <p className="contact-feedback"></p>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                        <div className="col-12 col-lg-5">
                                            <div className="contact-information">
                                                <h4 className="contact-title">
                                                    Contact
                                                    <span>Info</span>
                                                </h4>
                                                <p className="contact-description">
                                                    Always available for freelance work if the right
                                                    project comes along,
                                                    Feel free to contact me!
                                                </p>
                                                <ul className="list-unstyled list-info">
                                                    <li>
                                                        <div className="user-icon align-items-center">
                                                            <span className="information-icon">
                                                                <BiUser className="icon" />
                                                            </span>
                                                            <div className="information-details">
                                                                <h6 className="information-type">Name</h6>
                                                                <span className="information-value">Parth Dhaduk</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="user-icon align-items-center">
                                                            <span className="information-icon">
                                                                <BiCurrentLocation className='icon' />
                                                            </span>
                                                            <div className="information-details">
                                                                <h6 className="information-type">Location</h6>
                                                                <span className="information-value">
                                                                    Patel Sosayti,
                                                                    Nandiya Road,
                                                                    Nakara - 362625.
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="user-icon align-items-center">
                                                            <span className="information-icon">
                                                                <BiPhone className="icon" />
                                                            </span>
                                                            <div className="information-details">
                                                                <h6 className="information-type">Call Me</h6>
                                                                <span className="information-value">
                                                                    <a href="tel:+919924927713">
                                                                        +91 99249 27713
                                                                    </a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="user-icon align-items-center">
                                                            <span className="information-icon">
                                                                <HiMail className='icon' />
                                                            </span>
                                                            <div className="information-details">
                                                                <h6 className="information-type">Email Me</h6>
                                                                <span className="information-value">
                                                                    <a href="mailto:ps359511@gmail.com">
                                                                        ps359511@gmail.com
                                                                    </a>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactusCom