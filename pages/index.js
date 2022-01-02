import React, {useState} from "react";
import HeaderLayout  from '../components/common/layouts/Header';
import FooterLayout  from '../components/common/layouts/Footer';
//import { Widget /* or Slider */ } from 'react-typeform-embed';
//import { ReactTypeformEmbed } from 'react-typeform-embed';
//import '@typeform/embed/build/css/widget.css'
import { createPopup } from "@typeform/embed";
import "@typeform/embed/build/css/popup.css";
import $ from 'jquery';

export default function Home() {

    const openPopup = (event) => {
        createPopup("vLylSajO", {
         hidden: {
          value: event.currentTarget.value
         }
        }).open()
       }

  return (
    <React.Fragment>
      <HeaderLayout />
       <section className="main-banner">
        <span className="shape-1 animate-this">
            <img src="../../static/images/shape-1.png" alt="shape" />
        </span>
        <span className="shape-2 animate-this">
            <img src="../../static/images/shape-2.png" alt="shape" />
        </span>
        <span className="shape-3 animate-this">
            <img src="../../static/images/shape-3.png" alt="shape"  />
        </span>
        <span className="shape-4 animate-this">
            <img src="../../static/images/shape-4.png" alt="shape" />
        </span>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="banner-content">
                        <h2 className="h2-subtitle wow fadeInUp animated" data-wow-delay=".4s">Welcome To Online Coaching</h2>
                        <h1 className="h1-title wow fadeInUp animated" data-wow-delay=".5s">Get className From Top <span>Instructor <img src="../../static/images/banner-line.png" alt="line" /></span></h1>
                        <p className="wow fadeInUp animated" data-wow-delay=".6s">Integer in magna in est ultrices bibendum eget enim et dui imperdiet faucibus. Fusce eu tristique felis.</p>
                        <div className="banner-btn wow fadeInUp animated" data-wow-delay=".7s">
                            <a href="#" value="popup" onClick={openPopup} className="sec-btn" >Explore Courses</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="banner-img-box wow fadeInRight animated" data-wow-delay=".4s">
                        <div className="aliment-1">
                            <div className="aliment-icon-red">
                                <img src="../../static/images/banner-aliment-icon-1.png" alt="icon" />
                            </div>
                            <div className="aliment-content">
                                <h3 className="h3-title">Congratulations</h3>
                                <p>Your admission completed</p>
                            </div>
                        </div>
                        <div className="aliment-2">
                            <div className="aliment-icon-purple">
                                <img src="../../static/images/banner-aliment-icon-2.png" alt="icon" />
                            </div>
                            <div className="aliment-content">
                                <h3 className="h3-title">User Experience className</h3>
                                <p>Tomorrow is our</p>
                            </div>
                        </div>
                        <div className="aliment-3">
                            <div className="aliment-icon-green">
                                <img src="../../static/images/banner-aliment-icon-3.png" alt="icon" />
                            </div>
                            <div className="aliment-content">
                                <h3 className="h3-title">578k</h3>
                                <p>Assisted Student</p>
                            </div>
                        </div>
                        <div className="aliment-4">
                            <img src="../../static/images/banner-aliment-icon-4.png" alt="icon" />
                        </div>
                        <div className="banner-img">
                            <img src="../../static/images/banner-img.png" alt="banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="main-course-category">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="course-category-title">
                        <h2 className="h2-subtitle">Course Category</h2>
                        <h2 className="h2-title">Explore Popular Courses</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="course-category-box">
                        <div className="course-category-icon">
                            <img className="dis-yes" src="../../static/images/course-category-icon-1.png" alt="icon" />
                            <img className="dis-no" src="../../static/images/course-category-icon-1-w.png" alt="icon" />
                        </div>
                        <div className="course-category-content">
                            <a href="courses.html"><h3 className="h3-title">Learn Data Science</h3></a>
                            <p>Data is Everything</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="course-category-box">
                        <div className="course-category-icon">
                            <img className="dis-yes" src="../../static/images/course-category-icon-2.png" alt="icon" />
                            <img className="dis-no" src="../../static/images/course-category-icon-2-w.png" alt="icon" />
                        </div>
                        <div className="course-category-content">
                            <a href="courses.html"><h3 className="h3-title">Business Strategy</h3></a>
                            <p>Improve your business</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="course-category-box">
                        <div className="course-category-icon">
                            <img className="dis-yes" src="../../static/images/course-category-icon-3.png" alt="icon" />
                            <img className="dis-no" src="../../static/images/course-category-icon-3-w.png" alt="icon" />
                        </div>
                        <div className="course-category-content">
                            <a href="courses.html"><h3 className="h3-title">Learn Art & Design</h3></a>
                            <p>Fun & Challenging</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    <section className="main-about-us">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="about-img-box wow fadeInLeft animated" data-wow-delay=".4s">
                        <div className="aliment-1">
                            <div className="aliment-icon-red">
                                <img src="../../static/images/banner-aliment-icon-1.png" alt="icon" />
                            </div>
                            <div className="aliment-content">
                                <h3 className="h3-title">Congratulations</h3>
                                <p>Your admission completed</p>
                            </div>
                        </div>
                        <div className="aliment-3">
                            <div className="aliment-icon-green">
                                <img src="../../static/images/banner-aliment-icon-3.png" alt="icon" />
                            </div>
                            <div className="aliment-content">
                                <h3 className="h3-title">578k</h3>
                                <p>Assisted Student</p>
                            </div>
                        </div>
                        <div className="about-img">
                            <img src="../../static/images/about-img.png" alt="about us" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-us-content">
                        <div className="about-us-title">
                            <h2 className="h2-subtitle">About Us</h2>
                            <h2 className="h2-title">We Have Best Online Education</h2>
                        </div>
                        <p>Morbi porttitor ligula id varius consectetur. Integer ipsum justo, congue sit amet massa vel, porttitor semper magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <ul>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i><p>Suspendisse nunc massa, pellentesque eu nibh eget.</p></li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i><p>Suspendisse nunc massa, pellentesque eu nibh eget.</p></li>
                            <li><i className="fa fa-check-circle" aria-hidden="true"></i><p>Suspendisse nunc massa, pellentesque eu nibh eget.</p></li>
                        </ul>
                        <a href="about-us.html" className="sec-btn">Explore More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="main-partner-logo">
        <div className="container">
            <div className="row partner-bg partner-slider">
                <div className="col-lg-3">
					<div className="partners-box">
						<img src="../../static/images/brand-1.png" alt="brand-1" />
					</div>
				</div>
                <div className="col-lg-3">
					<div className="partners-box">
						<img src="../../static/images/brand-2.png" alt="brand-2" />
					</div>
				</div>
                <div className="col-lg-3">
					<div className="partners-box">
						<img src="../../static/images/brand-3.png" alt="brand-3" />
					</div>
				</div>
                <div className="col-lg-3">
					<div className="partners-box">
						<img src="../../static/images/brand-4.png" alt="brand-4" />
					</div>
				</div>
                <div className="col-lg-3">
					<div className="partners-box">
						<img src="../../static/images/brand-5.png" alt="brand-5" />
					</div>
				</div>
                <div className="col-lg-3">
					<div className="partners-box">
						<img src="../../static/images/brand-6.png" alt="brand-5" />
					</div>
				</div>
            </div>
        </div>
    </div>
    
    <section className="main-core-features">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="core-features-content">
                        <div className="core-features-title">
                            <h2 className="h2-subtitle">Core Features</h2>
                            <h2 className="h2-title">See What Our Mission Are</h2>
                        </div>
                        <div className="core-features-box">
                            <div className="core-feature-icon feature-blue">
                                <img src="../../static/images/feature-icon-1.png" alt="icon" />
                            </div>
                            <div className="core-feature-text">
                                <h3 className="h3-title">Student Life</h3>
                                <p>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum.</p>
                            </div>
                        </div>
                        <div className="core-features-box">
                            <div className="core-feature-icon feature-pink">
                                <img src="../../static/images/feature-icon-2.png" alt="icon" />
                            </div>
                            <div className="core-feature-text">
                                <h3 className="h3-title">Best Online className</h3>
                                <p>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum.</p>
                            </div>
                        </div>
                        <div className="core-features-box mb-0">
                            <div className="core-feature-icon feature-purple">
                                <img src="../../static/images/feature-icon-3.png" alt="icon" />
                            </div>
                            <div className="core-feature-text">
                                <h3 className="h3-title">24x7 Program</h3>
                                <p>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="core-features-img" style={{backgroundImage: `url(../../static/images/coure-features-img.jpg)`}}></div>
    </section>
   
    <section className="main-instructor">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="instructor-title">
                        <h2 className="h2-subtitle">Best coach</h2>
                        <h2 className="h2-title">Our Expert Instructor</h2>
                    </div>
                </div>
            </div>
            <div className="row instructor-slider">
                <div className="col-lg-3">
                    <div className="instructor-box">
                        <div className="instructor-img">
                            <img src="../../static/images/instructor-1.jpg" alt="Instructor" />
                            <ul>
                                <li><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <a href="instructor-detail.html"><h3 className="h3-title">Kelly Franklin</h3></a>
                        <p>Instructor</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="instructor-box">
                        <div className="instructor-img">
                            <img src="../../static/images/instructor-2.jpg" alt="Instructor" />
                            <ul>
                                <li><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <a href="instructor-detail.html"><h3 className="h3-title">Indigo Violet</h3></a>
                        <p>Instructor</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="instructor-box">
                        <div className="instructor-img">
                            <img src="../../static/images/instructor-3.jpg" alt="Instructor" />
                            <ul>
                                <li><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <a href="instructor-detail.html"><h3 className="h3-title">Jason Response</h3></a>
                        <p>Instructor</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="instructor-box">
                        <div className="instructor-img">
                            <img src="../../static/images/instructor-4.jpg" alt="Instructor" />
                            <ul>
                                <li><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <a href="instructor-detail.html"><h3 className="h3-title">Jonquil Von</h3></a>
                        <p>Instructor</p>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="instructor-box">
                        <div className="instructor-img">
                            <img src="../../static/images/instructor-5.jpg" alt="Instructor" />
                            <ul>
                                <li><a href="javascript:void(0);"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <a href="instructor-detail.html"><h3 className="h3-title">Kelly Franklin</h3></a>
                        <p>Instructor</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="main-testimonial">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <div className="testimonial-title">
                        <h2 className="h2-subtitle">Testimonial</h2>
                        <h2 className="h2-title">What Our Client Says About Us</h2>
                        <p>Proin et lacus eu odio tempor porttitor id vel augue. Vivamus volutpat vehicula sem, et imperdiet enim tempor id. Phasellus lobortis efficitur nisl eget vehicula. Donec viverra blandit nunc, nec tempor ligula ullamcorper venenatis.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="testimonial-slider">
                        <div className="testimonial-box">
                            <p>&quot;Proin feugiat tortor non neque eleifend, at fermentum est elementum. Ut mollis leo odio vulputate rutrum. Nunc sagittis sit amet ligula ut eleifend. Mauris consequat mauris sit amet turpis commodo fermentum. Quisque consequat tortor ut nisl finibus&quot;.</p>
                            <div className="testimonial-client">
                                <div className="testimonial-client-img-box">
                                    <div className="testimonial-img">
                                        <img src="../../static/images/client-1.jpg" alt="client" />
                                    </div>
                                </div>
                                <div className="testimonial-client-name">
                                    <h3 className="h3-title">Christine Rose</h3>
                                    <span>Customer</span>
                                </div>
                            </div>
                            <div className="testimonial-quote">
                                <img src="../../static/images/quote.png" alt="quote" />
                            </div>
                        </div>
                        <div className="testimonial-box">
                            <p>&quot;Proin feugiat tortor non neque eleifend, at fermentum est elementum. Ut mollis leo odio vulputate rutrum. Nunc sagittis sit amet ligula ut eleifend. Mauris consequat mauris sit amet turpis commodo fermentum. Quisque consequat tortor ut nisl finibus&quot;.</p>
                            <div className="testimonial-client">
                                <div className="testimonial-client-img-box">
                                    <div className="testimonial-img">
                                        <img src="../../static/images/client-2.jpg" alt="client" />
                                    </div>
                                </div>
                                <div className="testimonial-client-name">
                                    <h3 className="h3-title">Christine Rose</h3>
                                    <span>Customer</span>
                                </div>
                            </div>
                            <div className="testimonial-quote">
                                <img src="../../static/images/quote.png" alt="quote" />
                            </div>
                        </div>
                        <div className="testimonial-box">
                            <p>&quot;Proin feugiat tortor non neque eleifend, at fermentum est elementum. Ut mollis leo odio vulputate rutrum. Nunc sagittis sit amet ligula ut eleifend. Mauris consequat mauris sit amet turpis commodo fermentum. Quisque consequat tortor ut nisl finibus&quot;.</p>
                            <div className="testimonial-client">
                                <div className="testimonial-client-img-box">
                                    <div className="testimonial-img">
                                        <img src="../../static/images/client-3.jpg" alt="client" />
                                    </div>
                                </div>
                                <div className="testimonial-client-name">
                                    <h3 className="h3-title">Christine Rose</h3>
                                    <span>Customer</span>
                                </div>
                            </div>
                            <div className="testimonial-quote">
                                <img src="../../static/images/quote.png" alt="quote" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="main-cta">
        <div className="container">
            <div className="row align-items-center cta-bg">
                <div className="cta-bg-img">
                    <img src="../../static/images/cta-bg-img.png" alt="bg" />
                </div>
                <div className="col-lg-6">
                    <div className="cta-title">
                        <h2 className="h2-title">Start Your Best Online classNamees With Us</h2>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="cta-btn">
                        <a href="contact-us.html" className="sec-btn">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <FooterLayout />
    </React.Fragment>
  )
}
