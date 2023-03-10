import React from 'react'
import './ProjectCom.css'
import hotel from './Images/hotel.jpg'
import school from './Images/school.jpg'
import shopping from './Images/shopping.jpg'
import news from './Images/news.jpg'

function ProjectCom() {

    const projectData = [
        {
            id: 1,
            title: "hotel management",
            project_image: hotel,
            project_link: "",
            project_year: "2021 - 2022",
            description: "A hotel management application is a software system designed to assist hotel staff in managing various aspects of their daily operations, including reservations, check-ins, housekeeping, guest services, billing, and reporting.",
        },
        {
            id: 2,
            title: "school management",
            project_image: school,
            project_link: "",
            project_year: "2022 - 2023",
            description: "A school management application is a software system designed to assist school staff in managing various aspects of their daily operations, including student records, academic performance, attendance, scheduling, and communication. ",
        },
        {
            id: 3,
            title: "e - commerce",
            project_image: shopping,
            project_link: "",
            project_year: "2022 - 2023",
            description: "An e-commerce application is a software system designed to enable businesses to sell products or services online, and for customers to browse, purchase, and track their orders through a user-friendly interface.",
        },
        {
            id: 4,
            title: "News Application",
            project_image: news,
            project_link: "",
            project_year: "2023 - 2024",
            description: "A news application is a software system designed to provide users with up-to-date news and information from a range of sources, presented in a user-friendly interface. ",
        },
    ]
    return (
        <section className="project-area active" id="project-area">
            <div className="main-section">
                <div className="container">

                    <div className="project-content">
                        <div className="row page-bar">
                            <div className="col-12">

                                <div className="section-heading page-heading">
                                    <div className="page-title-box">
                                        <h2 className="section-title">
                                            <div>Pro<span>ject</span></div>
                                            <div className="animated-bar">
                                                <div className="animated-line"></div>
                                            </div>
                                        </h2>
                                    </div>
                                </div>

                                <div className="project-section single-section">
                                    <div className="row row-cols-sm-1 row-cols-md-2 row-cols-xl-3 project-container">

                                        {
                                            projectData.map((ele)=>{
                                                return(
                                                    <div className="col-12" key={ele.id}>
                                                        <div className="card single-project">
                                                            <figure className="project-image">
                                                                <img src={ele.project_image} alt="projects"/>
                                                                    <span className="content-year">{ele.project_year}</span>
                                                            </figure>
                                                            <div className="card-body single-project-content">
                                                                <a href={ele.project_link}>
                                                                    <h5 className="card-title project-title">{ele.title}</h5>
                                                                </a>
                                                                <p className="card-text project-description">
                                                                    {ele.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }

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

export default ProjectCom