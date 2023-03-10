import React from 'react'
import './AboutCom.css'
import myimg from './MyPhoto.png'
import { BsWhatsapp, BsFacebook, BsLinkedin, BsGithub, BsInstagram, BsCardImage, BsWordpress, BsFillRocketTakeoffFill } from 'react-icons/bs'
import { DiCss3 } from 'react-icons/di'
import { BiMove, BiUser } from 'react-icons/bi'

function AboutCom() {
    return (
        <section className="about-area active" id="about-area">
            <div className="main-section">
                <div className="container">

                    <div className="about-content">
                        <div className="row page-bar">
                            <div className="col-12">
                                <div className="section-heading page-heading">
                                    <div className="page-title-box">
                                        <h2 className="section-title">
                                            <div>About <span>Me</span></div>
                                            <div className="animated-bar">
                                                <div className="animated-line"></div>
                                            </div>
                                        </h2>
                                    </div>
                                </div>

                                <div className="about-info-section">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="row align-items-center about-box">
                                                <div className="col-12 col-lg-5 about-image">
                                                    <img src={myimg} alt="Dhaduk Parth" />
                                                </div>
                                                <div className="col-12 col-lg-7 about-information">
                                                    <div className="content-block">
                                                        <h2 className="content-subtitle">Who am i?</h2>
                                                        <h6 className="content-title">
                                                            I'm Dhaduk <span>Parth</span>, and I'm a web designer and developer
                                                        </h6>
                                                        <div className="content-description">
                                                            <p>
                                                                I am parth dhaduk from India.
                                                                I have a Bachelor's degree in Junagadh and a Master's degree in Rajkot.
                                                                I'm a web developer with over no experience in designing and building web applications.
                                                                I specialize in HTML, CSS, JavaScript, Python, and Django.
                                                                I'm a self-motivated, hardworking, and detail-oriented professional who enjoys problem-solving and learning new technologies.
                                                                I'm passionate about developing web applications that are visually appealing and user-friendly.
                                                                I am a hardworking individual who loves to learn and take on new challenges.
                                                                I enjoy engaging in physical activities such as jogging and playing chess, etc.
                                                                I also enjoy traveling and watching Movies, etc.
                                                                I love studying new technology.
                                                            </p>
                                                        </div>
                                                        <div className="content-info">
                                                            <div className="row">
                                                                <div className="col-12 col-md-6 single-info">
                                                                    <span>Name :</span>
                                                                    <p>Dhaduk Parth</p>
                                                                </div>
                                                                <div className="col-12 col-md-6 single-info">
                                                                    <span>Email :</span>
                                                                    <p>
                                                                        <a href="mailto:ps359511@gmail.com">ps359511@gmail.com</a>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12 col-md-6 single-info">
                                                                    <span>Age :</span>
                                                                    <p>21</p>
                                                                </div>
                                                                <div className="col-12 col-md-6 single-info">
                                                                    <span>From :</span>
                                                                    <p>Junagadh, India</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="content-follow-section">
                                                            <a href="assets/files/ParthDhadukResume.pdf" className="cv-btn content-download button-main button-scheme" role="button">
                                                                <span>Download</span>
                                                            </a>
                                                            <ul className="list-unstyled list-inline content-follow">
                                                                <li className="list-inline-item">
                                                                    <a href="https://wa.me/9924927713" rel="noreferrer" target="_blank">
                                                                        <BsWhatsapp />
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="https://www.facebook.com/parth.patel24.549" rel="noreferrer" target="_blank">
                                                                        <i className='bx bxl-facebook-circle' ></i>
                                                                        <BsFacebook />
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="https://www.linkedin.com/in/parth-patel-657487215/" rel="noreferrer" target="_blank">
                                                                        <BsLinkedin />
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="https://github.com/Dhadukparth" rel="noreferrer" target="_blank">
                                                                        <BsGithub />
                                                                    </a>
                                                                </li>
                                                                <li className="list-inline-item">
                                                                    <a href="https://www.instagram.com/_parth_dhaduk/" rel="noreferrer" target="_blank">
                                                                        <BsInstagram />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="services-section single-section">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="services-main-heading">
                                                <h2 className="services-main-title">My <span>Services</span></h2>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 rows-gap-2">

                                        <div className="col-12">
                                            <div className="service-box">
                                                <DiCss3 className="icon" />
                                                <h6 className="service-title">Web Design</h6>
                                                <p className="service-description">
                                                    I have a create many design the templates and web
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="service-box">
                                                <BsCardImage className="icon" />
                                                <h6 className="service-title">PSD Design</h6>
                                                <p className="service-description">
                                                    PSD to HTML is a common design-to-code process, converting a Photoshop Document into an HTML file.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="service-box">
                                                <BiUser className="icon" />
                                                <h6 className="service-title">Customer Support</h6>
                                                <p className="service-description">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="service-box">
                                                <BsWordpress className="icon" />
                                                <h6 className="service-title">Web Development</h6>
                                                <p className="service-description">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="service-box">
                                                <BiMove className="icon" />
                                                <h6 className="service-title">Fully Responsive</h6>
                                                <p className="service-description">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <div className="service-box">
                                                <BsFillRocketTakeoffFill className="icon" />
                                                <h6 className="service-title">Branding</h6>
                                                <p className="service-description">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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

export default AboutCom