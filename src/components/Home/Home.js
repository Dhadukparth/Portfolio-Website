import React from 'react'
import './Home.css'
import TypeIt from "typeit-react";
import { BsWhatsapp, BsFacebook, BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

function HomeCom() {

    return (
        <section className="home-area" id="home-area">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center">
                    <div className="col-12 col-lg-8 home-content text-center">
                        <h1 className="home-name">Parth <span>Dhaduk</span></h1>
                        <h4 className="home-headline">I'm a
                            <span className="single-headline ps-2"> 
                                <TypeIt
                                    options={{ 
                                        speed: 100,
                                        waitUntilVisible: true,
                                        loop: true,
                                    }}
                                    getBeforeInit={(instance) => {
                                        instance
                                            .type("Developer ", { delay: 500 })
                                            .delete(8)
                                            .type("Designer ", {delay: 500})
                                            .delete(9)
                                            .type("Freelancer ", {delay: 500})
                                            .delete(11)
                                            .go();
                                    
                                        return instance;
                                    }}
                                />
                            </span>
                        </h4>
                    </div>
                </div>
            </div>

            <div className="social-media" id="social-media">
                <div className="social-icons">
                    <ul>
                        <li>
                            <a href="https://wa.me/9924927713" rel="noreferrer" target="_blank">
                                <BsWhatsapp className='whatsapp-icon' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/parth.patel24.549" rel="noreferrer" target="_blank">
                                <BsFacebook className='facebook-icon' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/parth-patel-657487215/" rel="noreferrer" target="_blank">
                                <BsLinkedin className='linkedin-icon' />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Dhadukparth" rel="noreferrer" target="_blank">
                                <BsGithub className='github-icon' />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/_parth_dhaduk/" rel="noreferrer" target="_blank">
                                <BsInstagram className='instagram-icon' />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default HomeCom