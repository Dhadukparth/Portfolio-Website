import React from 'react'
import './PortfolioCom.css'
import $ from 'jquery';

import img1 from './Images/item_one.jpg'
import img2 from './Images/item_two.jpg'
import img3 from './Images/item_three.jpg'
import img4 from './Images/item_four.jpg'
import img5 from './Images/item_five.jpg'
import img6 from './Images/item_six.jpg'


function PortfolioCom() {

    const portfolioData = [
        {
            id: 1,
            title: "Label Tag Mockup",
            image: img1,
            filterValue: 'design'
        },
        {
            id: 2,
            title: "3D Bag Mockup",
            image: img2,
            filterValue: 'brand'
        },
        {
            id: 3,
            title: "Modern Bag Design",
            image: img3,
            filterValue: 'photos'
        },
        {
            id: 4,
            title: "Coffee Cup Design",
            image: img4,
            filterValue: 'photos'
        },
        {
            id: 5,
            title: "T-Shirt Design",
            image: img5,
            filterValue: 'design'
        },
        {
            id: 6,
            title: "Packaging Box Mockup",
            image: img6,
            filterValue: 'brand'
        },
    ]

    $(document).ready(function () {
        $('.filter-list').on('click', function () {
            const filte_value = $(this).attr('data-filter');

            $('.filter-list').removeClass('tab-active');
            $(this).addClass('tab-active');

            if(filte_value === 'all'){
                $('.portfolio-grid .single-item').show('1000');
            }
            else{
                $('.portfolio-grid .single-item').not('.'+filte_value).hide('1000');
                $('.portfolio-grid .single-item').filter('.'+filte_value).show('1000');
            }
        });
    });


    return (
        <section className="portfolio-area active" id="portfolio-area">
            <div className="main-section">
                <div className="container">

                    <div className="portfolio-content">
                        <div className="row page-bar">
                            <div className="col-12">
                                <div className="section-heading page-heading">
                                    <div className="page-title-box">
                                        <h2 className="section-title">
                                            <div>Port<span>folio</span></div>
                                            <div className="animated-bar">
                                                <div className="animated-line"></div>
                                            </div>
                                        </h2>
                                    </div>
                                </div>

                                <div className="portfolio-section single-section">
                                    <div className="row">
                                        <div className="col-12">
                                            <ul className="list-inline filter-control" role="group" aria-label="Filter Control">
                                                <li className="filter-list list-inline-item tab-active" data-filter="all">All</li>
                                                <li className="filter-list list-inline-item" data-filter="brand">Brand</li>
                                                <li className="filter-list list-inline-item" data-filter="design">Design</li>
                                                <li className="filter-list list-inline-item" data-filter="photos">Photos</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="portfolio-grid row row-cols-md-1 row-cols-lg-2 row-cols-xxl-3">

                                        {
                                            portfolioData.map((ele) => {
                                                return(
                                                    <div className={`single-item col-12 ${ele.filterValue}`} key={ele.id}>
                                                        <div className="portfolio-wrapper">
                                                            <figure>
                                                                <img className="img-fluid" alt="Item" src={ele.image} />
                                                            </figure>
                                                            <div className="item-content">
                                                                <h6 className="content-title">{ele.title}</h6>
                                                                <span className="content-more" data-image={ele.image}>More Info</span>
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

export default PortfolioCom