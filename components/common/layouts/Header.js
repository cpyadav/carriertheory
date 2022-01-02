import React, { useState } from "react";
import Link from 'next/link'
import { createPopup } from "@typeform/embed";
import "@typeform/embed/build/css/popup.css";
import $ from 'jquery';

const Header = () => {
    const openPopup = (event) => {
        createPopup("vLylSajO", {
         hidden: {
          value: event.currentTarget.value
         }
        }).open()
       }

    return (
      <React.Fragment>
            <head>
                <title>Educater - Online Courses  Education HTML Template</title>
                <meta name="keywords" content="Educater" />
                <meta name="description" content="Educater" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            </head>
            {/* <div className="loader-box">
                <div className="loader">
                    <div className="loader__figure"></div>
                    <p className="loader__label">Loading...</p>
                </div>
            </div> */}
            <header className="site-header">
                <div className="header-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="top-contact">
                                    <div className="top-location">
                                        <div className="top-location-icon">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        </div>
                                        <div className="top-location-content">
                                            <a href="javascript:void(0);" title="location"><p>12/7 Aabot, Poor Street, Mumbai</p></a>
                                        </div>
                                    </div>
                                    <div className="top-mail">
                                        <div className="top-mail-icon">
                                            <i className="fa fa-envelope" aria-hidden="true"></i>
                                        </div>
                                        <div className="top-mail-content">
                                            <a href="javascript:void(0);" title="mail"><p>info@gmail.com</p></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="Social-midea">
                                    <a href="javascript:void(0);" title="Facebook"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                    <a href="javascript:void(0);" title="Instagram"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                    <a href="javascript:void(0);" title="Twitter"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                    <a href="javascript:void(0);" title="Pinterest"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3">
                                <div className="site-branding">
                                    <a href="index.html" title="Educater">
                                        <img src="../../../static/images/logo.png" alt="Logo" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-9">
                                <div className="header-menu">
                                    <nav className="main-navigation">
                                        <button className="toggle-button">
                                            <span></span>
                                            <span className="toggle-width"></span>
                                            <span></span>
                                        </button>
                                        <ul className="menu">
                                            <li className="active"><a href="index.html">Home</a></li>
                                            <li><a href="about-us.html">About Us</a></li>
                                            <li className="sub-items">
                                                <a href="javascript:void(0);" title="Courses">Courses</a>
                                                <ul className="sub-menu">
                                                    <li><a href="courses.html" title="Courses">Courses List</a></li>
                                                    <li><a href="course-detail.html" title="Courses detail">Courses Detail</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-items">
                                                <a href="javascript:void(0);" title="Pages">Pages</a>
                                                <ul className="sub-menu">
                                                    <li><a href="event-detaill.html" title="Event Detail">Event Detail</a></li>
                                                    <li><a href="instructor.html" title="Instructor">Instructor</a></li>
                                                    <li><a href="instructor-detail.html" title="Instructor Detail">Instructor Detail</a></li>
                                                    <li><a href="pricing.html" title="Pricing">Pricing</a></li>
                                                    <li><a href="faq.html" title="FAQ">FAQ</a></li>
                                                </ul>
                                            </li>
                                            <li className="sub-items">
                                                <a href="javascript:void(0);" title="Blog">Blog</a>
                                                <ul className="sub-menu">
                                                    <li><a href="blog-list.html" title="Blog List">Blog List</a></li>
                                                    <li><a href="blog-detail.html" title="Blog Detail">Blog Detail</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact-us.html">Contact Us</a></li>
                                        </ul>
                                    </nav>
                                    <div className="black-shadow"></div>
                                    <div className="header-btn">
                                        <a href="#" className="sec-btn" value="popup" onClick={openPopup}  >Try For Free</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    </React.Fragment>  
    )
}
export default Header;