import React, { useState } from "react";
import Head from 'next/head';
import $ from 'jquery';

const Header = () => {

    return (
      <React.Fragment>
            <section className="main-footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="footer-logo-content">
                        <a href="index.html"><img src="../../../static/images/logo-footer.png" alt="Educater" /></a>
                        <p>Duis a tempor magna. Maecenas ligula felis, imperdiet quis arcu eget, blandit ultricies risus. Vivamus fringilla urna vel risus congue accumsan.</p>
                        <ul>
                            <li><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li><a href="javascript:void(0);"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="footer-our-link">
                        <h3 className="h3-title">Our Link</h3>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about-us.html">About Us</a></li>
                            <li><a href="courses.html">Courses</a></li>
                            <li><a href="blog-list.html">Blog</a></li>
                            <li><a href="contact-us.html">Contact Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="footer-other-link">
                        <h3 className="h3-title">Other Link</h3>
                        <ul>
                            <li><a href="instructor.html">Instructor</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="event-detaill.html">Event</a></li>
                            <li><a href="about-us.html">Privacy Policy</a></li>
                            <li><a href="about-us.html">Term & Condition</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="footer-subscribe">
                        <h3 className="h3-title">Subscribe Now</h3>
                        <div className="footer-subscribe-form">
                            <input type="email" name="email" className="form-input subscribe-input" placeholder="Email Address" required="" />
                            <button type="submit" className="sec-btn"><i className="fa fa-paper-plane" aria-hidden="true" ></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright-bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <span className="copyright-text">Copyright &copy; 2021 <a href="index.html">ShivaayThemes.</a> All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <a href="#main-banner" className="scroll-top" id="scroll-to-top">
		<i className="fa fa-arrow-up" aria-hidden="true"></i>
	</a>
	<div className="bubbles_wrap">
		<div className="bubble x1"></div>
		<div className="bubble x2"></div>
		<div className="bubble x3"></div>
		<div className="bubble x4"></div>
		<div className="bubble x5"></div>
		<div className="bubble x6"></div>
		<div className="bubble x7"></div>
		<div className="bubble x8"></div>
		<div className="bubble x9"></div>
		<div className="bubble x10"></div>
	</div>   
            <Head>
                <script src="../../../static/js/bootstrap.min.js"></script>
                <script src="../../../static/js/popper.min.js"></script>
                <script src="../../../static/js/custom.js"></script>
                <script src="../../../static/js/slick.min.js"></script>
                <script src="../../../static/js/wow.min.js"></script>
                <script src="../../../static/js/bg-moving.js"></script>
                <script src="../../../static/js/magnific-popup.js"></script>
                <script src="../../../static/js/custom-magnific-popup.js"></script>
                <script src="../../../static/js/jquery1.min.js" ></script>
            </Head>
    </React.Fragment>  
    )
}
export default Header;