import React, {useState} from "react";
import HeaderLayout  from '../components/common/layouts/Header';
import FooterLayout  from '../components/common/layouts/Footer';
//import { Widget /* or Slider */ } from 'react-typeform-embed';
//import { ReactTypeformEmbed } from 'react-typeform-embed';
//import '@typeform/embed/build/css/widget.css'

export default function Home() {

    const handleTypeForm = () => {
       alert("tettst");
    };

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
                            <a href="#" className="sec-btn" onClick={handleTypeForm}>Explore Courses</a>
                            <a href="contact-us.html" className="sec-btn btn-2">Contact Us</a>
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
    <section class="main-course-category">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="course-category-title">
                        <h2 class="h2-subtitle">Course Category</h2>
                        <h2 class="h2-title">Explore Popular Courses</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="course-category-box">
                        <div class="course-category-icon">
                            <img class="dis-yes" src="../../static/images/course-category-icon-1.png" alt="icon" />
                            <img class="dis-no" src="../../static/images/course-category-icon-1-w.png" alt="icon" />
                        </div>
                        <div class="course-category-content">
                            <a href="courses.html"><h3 class="h3-title">Learn Data Science</h3></a>
                            <p>Data is Everything</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="course-category-box">
                        <div class="course-category-icon">
                            <img class="dis-yes" src="../../static/images/course-category-icon-2.png" alt="icon" />
                            <img class="dis-no" src="../../static/images/course-category-icon-2-w.png" alt="icon" />
                        </div>
                        <div class="course-category-content">
                            <a href="courses.html"><h3 class="h3-title">Business Strategy</h3></a>
                            <p>Improve your business</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="course-category-box">
                        <div class="course-category-icon">
                            <img class="dis-yes" src="../../static/images/course-category-icon-3.png" alt="icon" />
                            <img class="dis-no" src="../../static/images/course-category-icon-3-w.png" alt="icon" />
                        </div>
                        <div class="course-category-content">
                            <a href="courses.html"><h3 class="h3-title">Learn Art & Design</h3></a>
                            <p>Fun & Challenging</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="course-category-box">
                        <div class="course-category-icon">
                            <img class="dis-yes" src="../../static/images/course-category-icon-4.png" alt="icon" />
                            <img class="dis-no" src="../../static/images/course-category-icon-4-w.png" alt="icon" />
                        </div>
                        <div class="course-category-content">
                            <a href="courses.html"><h3 class="h3-title">Learn Lifestyle</h3></a>
                            <p>New Skills, New You</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="course-category-box">
                        <div class="course-category-icon">
                            <img class="dis-yes" src="../../static/images/course-category-icon-5.png" alt="icon" /> 
                            <img class="dis-no" src="../../static/images/course-category-icon-5-w.png" alt="icon" />
                        </div>
                        <div class="course-category-content">
                            <a href="courses.html"><h3 class="h3-title">Learn Marketing</h3></a>
                            <p>Improve your business</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="course-category-box">
                        <div class="course-category-icon">
                            <img class="dis-yes" src="../../static/images/course-category-icon-6.png" alt="icon" />
                            <img class="dis-no" src="../../static/images/course-category-icon-6-w.png" alt="icon" />
                        </div>
                        <div class="course-category-content">
                            <a href="courses.html"><h3 class="h3-title">Learn Finance</h3></a>
                            <p>Fun & Challenging</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="main-about-us">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="about-img-box wow fadeInLeft animated" data-wow-delay=".4s">
                        <div class="aliment-1">
                            <div class="aliment-icon-red">
                                <img src="../../static/images/banner-aliment-icon-1.png" alt="icon" />
                            </div>
                            <div class="aliment-content">
                                <h3 class="h3-title">Congratulations</h3>
                                <p>Your admission completed</p>
                            </div>
                        </div>
                        <div class="aliment-3">
                            <div class="aliment-icon-green">
                                <img src="../../static/images/banner-aliment-icon-3.png" alt="icon" />
                            </div>
                            <div class="aliment-content">
                                <h3 class="h3-title">578k</h3>
                                <p>Assisted Student</p>
                            </div>
                        </div>
                        <div class="about-img">
                            <img src="../../static/images/about-img.png" alt="about us" />
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="about-us-content">
                        <div class="about-us-title">
                            <h2 class="h2-subtitle">About Us</h2>
                            <h2 class="h2-title">We Have Best Online Education</h2>
                        </div>
                        <p>Morbi porttitor ligula id varius consectetur. Integer ipsum justo, congue sit amet massa vel, porttitor semper magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <ul>
                            <li><i class="fa fa-check-circle" aria-hidden="true"></i><p>Suspendisse nunc massa, pellentesque eu nibh eget.</p></li>
                            <li><i class="fa fa-check-circle" aria-hidden="true"></i><p>Suspendisse nunc massa, pellentesque eu nibh eget.</p></li>
                            <li><i class="fa fa-check-circle" aria-hidden="true"></i><p>Suspendisse nunc massa, pellentesque eu nibh eget.</p></li>
                        </ul>
                        <a href="about-us.html" class="sec-btn">Explore More</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div class="main-partner-logo">
        <div class="container">
            <div class="row partner-bg partner-slider">
                <div class="col-lg-3">
					<div class="partners-box">
						<img src="../../static/images/brand-1.png" alt="brand-1" />
					</div>
				</div>
                <div class="col-lg-3">
					<div class="partners-box">
						<img src="../../static/images/brand-2.png" alt="brand-2" />
					</div>
				</div>
                <div class="col-lg-3">
					<div class="partners-box">
						<img src="../../static/images/brand-3.png" alt="brand-3" />
					</div>
				</div>
                <div class="col-lg-3">
					<div class="partners-box">
						<img src="../../static/images/brand-4.png" alt="brand-4" />
					</div>
				</div>
                <div class="col-lg-3">
					<div class="partners-box">
						<img src="../../static/images/brand-5.png" alt="brand-5" />
					</div>
				</div>
                <div class="col-lg-3">
					<div class="partners-box">
						<img src="../../static/images/brand-6.png" alt="brand-5" />
					</div>
				</div>
            </div>
        </div>
    </div>
    <section class="main-online-courses">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8">
                    <div class="online-courses-title">
                        <h2 class="h2-subtitle">Our Online Courses</h2>
                        <h2 class="h2-title">Find The Right Online Course For You</h2>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="online-courses-title-btn">
                        <a href="courses.html" class="sec-btn">View All Course</a>
                    </div>
                </div>
            </div>
            <div class="row courses-slider">
                <div class="col-lg-4">
                    <div class="course-box">
                        <div class="course-img">
                            <img src="../../static/images/course-1.jpg" alt="course" />
                            <ul>
                                <li><a href="javascript:void(0);" class="course-tag-orange">Business</a></li>
                                <li><a href="javascript:void(0);" class="course-tag-blue">Marketing</a></li>
                            </ul>
                        </div>
                        <div class="course-content">
                            <a href="course-detail.html">
                                <h3 class="h3-title">Become product manager learn skills.</h3>
                            </a>
                            <div class="course-instructor-review">
                                <div class="course-instructor-box">
                                    <div class="course-instructor-img">
                                        <img src="../../static/images/course-instructor-img.jpg" class="rounded-circle" alt="instructor" />
                                    </div>
                                    <a href="instructor-detail.html">Lillian Wals</a>
                                </div>
                                <div class="course-review-box">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <p>5.0 (2k)</p>
                                </div>
                            </div>
                            <div class="course-line"></div>
                            <div class="course-price-student-box">
                                <div class="course-price-box">
                                    <span>$50.00</span>
                                </div>
                                <div class="course-student-box">
                                    <div class="course-student-icon">
                                        <img src="../../static/images/student-icon.png" alt="icon" />
                                    </div>
                                    <p>600k</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="course-box">
                        <div class="course-img">
                            <img src="../../static/images/course-2.jpg" alt="course" />
                            <ul>
                                <li><a href="javascript:void(0);" class="course-tag-orange">Business</a></li>
                                <li><a href="javascript:void(0);" class="course-tag-blue">Marketing</a></li>
                            </ul>
                        </div>
                        <div class="course-content">
                            <a href="course-detail.html">
                                <h3 class="h3-title">Fashion and luxury fashion in a changing.</h3>
                            </a>
                            <div class="course-instructor-review">
                                <div class="course-instructor-box">
                                    <div class="course-instructor-img">
                                        <img src="../../static/images/course-instructor-img.jpg" class="rounded-circle" alt="instructor" />
                                    </div>
                                    <a href="instructor-detail.html">Lillian Wals</a>
                                </div>
                                <div class="course-review-box">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <p>5.0 (2k)</p>
                                </div>
                            </div>
                            <div class="course-line"></div>
                            <div class="course-price-student-box">
                                <div class="course-price-box">
                                    <span>$50.00</span>
                                </div>
                                <div class="course-student-box">
                                    <div class="course-student-icon">
                                        <img src="../../static/images/student-icon.png" alt="icon" />
                                    </div>
                                    <p>600k</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="course-box">
                        <div class="course-img">
                            <img src="../../static/images/course-3.jpg" alt="course" />
                            <ul>
                                <li><a href="javascript:void(0);" class="course-tag-orange">Business</a></li>
                                <li><a href="javascript:void(0);" class="course-tag-blue">Marketing</a></li>
                            </ul>
                        </div>
                        <div class="course-content">
                            <a href="course-detail.html">
                                <h3 class="h3-title">Learning to write as a professional.</h3>
                            </a>
                            <div class="course-instructor-review">
                                <div class="course-instructor-box">
                                    <div class="course-instructor-img">
                                        <img src="../../static/images/course-instructor-img.jpg" class="rounded-circle" alt="instructor" />
                                    </div>
                                    <a href="instructor-detail.html">Lillian Wals</a>
                                </div>
                                <div class="course-review-box">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <p>5.0 (2k)</p>
                                </div>
                            </div>
                            <div class="course-line"></div>
                            <div class="course-price-student-box">
                                <div class="course-price-box">
                                    <span>$50.00</span>
                                </div>
                                <div class="course-student-box">
                                    <div class="course-student-icon">
                                        <img src="../../static/images/student-icon.png" alt="icon" />
                                    </div>
                                    <p>600k</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="course-box">
                        <div class="course-img">
                            <img src="../../static/images/course-4.jpg" alt="course" />
                            <ul>
                                <li><a href="javascript:void(0);" class="course-tag-orange">Business</a></li>
                                <li><a href="javascript:void(0);" class="course-tag-blue">Marketing</a></li>
                            </ul>
                        </div>
                        <div class="course-content">
                            <a href="course-detail.html">
                                <h3 class="h3-title">Improving accessibility of Your markdown.</h3>
                            </a>
                            <div class="course-instructor-review">
                                <div class="course-instructor-box">
                                    <div class="course-instructor-img">
                                        <img src="../../static/images/course-instructor-img.jpg" class="rounded-circle" alt="instructor" />
                                    </div>
                                    <a href="instructor-detail.html">Lillian Wals</a>
                                </div>
                                <div class="course-review-box">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <p>5.0 (2k)</p>
                                </div>
                            </div>
                            <div class="course-line"></div>
                            <div class="course-price-student-box">
                                <div class="course-price-box">
                                    <span>$50.00</span>
                                </div>
                                <div class="course-student-box">
                                    <div class="course-student-icon">
                                        <img src="../../static/images/student-icon.png" alt="icon" />
                                    </div>
                                    <p>600k</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="course-box">
                        <div class="course-img">
                            <img src="../../static/images/course-5.jpg" alt="course" />
                            <ul>
                                <li><a href="javascript:void(0);" class="course-tag-orange">Business</a></li>
                                <li><a href="javascript:void(0);" class="course-tag-blue">Marketing</a></li>
                            </ul>
                        </div>
                        <div class="course-content">
                            <a href="course-detail.html">
                                <h3 class="h3-title">Master query in a short period of time.</h3>
                            </a>
                            <div class="course-instructor-review">
                                <div class="course-instructor-box">
                                    <div class="course-instructor-img">
                                        <img src="../../static/images/course-instructor-img.jpg" class="rounded-circle" alt="instructor" />
                                    </div>
                                    <a href="instructor-detail.html">Lillian Wals</a>
                                </div>
                                <div class="course-review-box">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <p>5.0 (2k)</p>
                                </div>
                            </div>
                            <div class="course-line"></div>
                            <div class="course-price-student-box">
                                <div class="course-price-box">
                                    <span>$50.00</span>
                                </div>
                                <div class="course-student-box">
                                    <div class="course-student-icon">
                                        <img src="../../static/images/student-icon.png" alt="icon" />
                                    </div>
                                    <p>600k</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="course-box">
                        <div class="course-img">
                            <img src="../../static/images/course-6.jpg" alt="course" />
                            <ul>
                                <li><a href="javascript:void(0);" class="course-tag-orange">Business</a></li>
                                <li><a href="javascript:void(0);" class="course-tag-blue">Marketing</a></li>
                            </ul>
                        </div>
                        <div class="course-content">
                            <a href="course-detail.html">
                                <h3 class="h3-title">Business Intelligence analyst Course 2022.</h3>
                            </a>
                            <div class="course-instructor-review">
                                <div class="course-instructor-box">
                                    <div class="course-instructor-img">
                                        <img src="../../static/images/course-instructor-img.jpg" class="rounded-circle" alt="instructor" />
                                    </div>
                                    <a href="instructor-detail.html">Lillian Wals</a>
                                </div>
                                <div class="course-review-box">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <p>5.0 (2k)</p>
                                </div>
                            </div>
                            <div class="course-line"></div>
                            <div class="course-price-student-box">
                                <div class="course-price-box">
                                    <span>$50.00</span>
                                </div>
                                <div class="course-student-box">
                                    <div class="course-student-icon">
                                        <img src="../../static/images/student-icon.png" alt="icon" />
                                    </div>
                                    <p>600k</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="main-event">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-xl-6 col-lg-5">
                    <div class="event-img-box wow fadeInLeft animated" data-wow-delay=".4s">
                        <div class="event-img">
                            <img src="../../static/images/event-img.jpg" alt="event" />
                        </div>
                        <div class="event-video-play-box">
                            <div class="event-play-btn">
                                <a href="https://www.youtube.com/watch?v=-lQ1dNicM3k" class="event-play-icon popup-youtube" title="Play Video"><span><i class="fa fa-play" aria-hidden="true"></i></span></a>
                            </div>
                            <div class="event-video-content">
                                <h3 class="h3-title">Watch Us !</h3>
                            </div>  
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-7">
                    <div class="event-content-box">
                        <div class="event-title">
                            <h2 class="h2-subtitle">Our Events</h2>
                            <h2 class="h2-title">Join Our Upcoming Events</h2>
                        </div>
                        <div class="event-box">
                            <div class="event-date-day">
                                <div class="event-date">
                                    <p>30</p>
                                </div>
                                <div class="event-day">
                                    <p>Dec, 2021</p>
                                </div>
                            </div>
                            <div class="event-text-line"></div>
                            <div class="event-content-text">
                                <div class="event-time-place">
                                    <div class="event-time">
                                        <p>10:30am To 2:30pm</p>
                                    </div>
                                    <div class="event-text-line"></div>
                                    <div class="event-place">
                                        <p>Poland</p>
                                    </div>
                                </div>
                                <a href="event-detaill.html"><h3 class="h3-title">Business creativity workshops</h3></a>
                            </div>
                        </div>
                        <div class="event-box">
                            <div class="event-date-day">
                                <div class="event-date">
                                    <p>15</p>
                                </div>
                                <div class="event-day">
                                    <p>Jan, 2022</p>
                                </div>
                            </div>
                            <div class="event-text-line"></div>
                            <div class="event-content-text">
                                <div class="event-time-place">
                                    <div class="event-time">
                                        <p>10:30am To 2:30pm</p>
                                    </div>
                                    <div class="event-text-line"></div>
                                    <div class="event-place">
                                        <p>Poland</p>
                                    </div>
                                </div>
                                <a href="event-detaill.html"><h3 class="h3-title">Street Performance: Call for Art.</h3></a>
                            </div>
                        </div>
                        <div class="event-box mb-0">
                            <div class="event-date-day">
                                <div class="event-date">
                                    <p>28</p>
                                </div>
                                <div class="event-day">
                                    <p>Fab, 2022</p>
                                </div>
                            </div>
                            <div class="event-text-line"></div>
                            <div class="event-content-text">
                                <div class="event-time-place">
                                    <div class="event-time">
                                        <p>10:30am To 2:30pm</p>
                                    </div>
                                    <div class="event-text-line"></div>
                                    <div class="event-place">
                                        <p>Poland</p>
                                    </div>
                                </div>
                                <a href="event-detaill.html"><h3 class="h3-title">Digital transformation conference</h3></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
   
    <section class="main-pricing">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="pricing-title">
                        <h2 class="h2-subtitle">Pricing Table</h2>
                        <h2 class="h2-title">All Inclusive Pricing</h2>
                    </div>
                </div>
            </div>
            <div class="row pricing-slider">
                <div class="col-lg-4">
                    <div class="pricing-box">
                        <h3 class="h3-title">Sliver Plan</h3>
                        <p>Perfect for small marketing teams</p>
                        <h2 class="h2-title">$59<span>/Month</span></h2>
                        <div class="pricing-box-line"></div>
                        <ul>
                            <li><i class="fa fa-check" aria-hidden="true"></i><p>Course Discussions</p></li>
                            <li><i class="fa fa-check" aria-hidden="true"></i><p>Content Librar</p></li>
                            <li><i class="fa fa-check" aria-hidden="true"></i><p>1-hour Mentorship</p></li>
                            <li><i class="fa fa-check" aria-hidden="true"></i><p>Online Course</p></li>
                            <li><i class="fa fa-check" aria-hidden="true"></i><p>Support 24x7</p></li>
                        </ul>
                        <a href="contact-us.html" class="sec-btn">Choose Plan</a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="pricing-box">
                        <div class="pricing-popular-tag">
                            <p>Popular</p>
                        </div>
                        <h3 class="h3-title">Gold Plan</h3>
                        <p>Perfect for small marketing teams</p>
                        <h2 class="h2-title">$69<span>/Month</span></h2>
                        <div class="pricing-box-line"></div>
                        <ul>
                            <li><i class="fa fa-check" aria-hidden="true"></i><p>Course Discussions</p></li>
                            <li><i class="fa fa-check" aria-hidden="true"></i><p>Content Librar</p></li>
                            <li><i class="fa fa-check" aria-hidden="true"></i><p>1-hour Mentorship</p></li>
                            <li><i class="fa fa-check" aria-hidden="true"></i><p>Online Course</p></li>
                            <li><i class="fa fa-check" aria-hidden="true"></i><p>Support 24x7</p></li>
                        </ul>
                        <a href="contact-us.html" class="sec-btn">Choose Plan</a>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="pricing-box">
                        <h3 class="h3-title">Diamond Plan</h3>
                        <p>Perfect for small marketing teams</p>
                        <h2 class="h2-title">$79<span>/Month</span></h2>
                        <div class="pricing-box-line"></div>
                        <ul>
                            <li><i class="fa fa-check" aria-hidden="true"></i><p>Course Discussions</p></li>
                            <li><i class="fa fa-check" aria-hidden="true"></i><p>Content Librar</p></li>
                            <li><i class="fa fa-check" aria-hidden="true"></i><p>1-hour Mentorship</p></li>
                            <li><i class="fa fa-check" aria-hidden="true"></i><p>Online Course</p></li>
                            <li><i class="fa fa-check" aria-hidden="true"></i><p>Support 24x7</p></li>
                        </ul>
                        <a href="contact-us.html" class="sec-btn">Choose Plan</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="main-core-features">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="core-features-content">
                        <div class="core-features-title">
                            <h2 class="h2-subtitle">Core Features</h2>
                            <h2 class="h2-title">See What Our Mission Are</h2>
                        </div>
                        <div class="core-features-box">
                            <div class="core-feature-icon feature-blue">
                                <img src="../../static/images/feature-icon-1.png" alt="icon" />
                            </div>
                            <div class="core-feature-text">
                                <h3 class="h3-title">Student Life</h3>
                                <p>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum.</p>
                            </div>
                        </div>
                        <div class="core-features-box">
                            <div class="core-feature-icon feature-pink">
                                <img src="../../static/images/feature-icon-2.png" alt="icon" />
                            </div>
                            <div class="core-feature-text">
                                <h3 class="h3-title">Best Online Class</h3>
                                <p>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum.</p>
                            </div>
                        </div>
                        <div class="core-features-box mb-0">
                            <div class="core-feature-icon feature-purple">
                                <img src="../../static/images/feature-icon-3.png" alt="icon" />
                            </div>
                            <div class="core-feature-text">
                                <h3 class="h3-title">24x7 Program</h3>
                                <p>Nulla vestibulum pretium nibh at dignissim. Aliquam vehicula consectetur dignissim dictum.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="core-features-img" style={{backgroundImage: `url(../../static/images/coure-features-img.jpg)`}}></div>
    </section>
   
    <section class="main-instructor">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="instructor-title">
                        <h2 class="h2-subtitle">Best coach</h2>
                        <h2 class="h2-title">Our Expert Instructor</h2>
                    </div>
                </div>
            </div>
            <div class="row instructor-slider">
                <div class="col-lg-3">
                    <div class="instructor-box">
                        <div class="instructor-img">
                            <img src="../../static/images/instructor-1.jpg" alt="Instructor" />
                            <ul>
                                <li><a href="javascript:void(0);"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <a href="instructor-detail.html"><h3 class="h3-title">Kelly Franklin</h3></a>
                        <p>Instructor</p>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="instructor-box">
                        <div class="instructor-img">
                            <img src="../../static/images/instructor-2.jpg" alt="Instructor" />
                            <ul>
                                <li><a href="javascript:void(0);"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <a href="instructor-detail.html"><h3 class="h3-title">Indigo Violet</h3></a>
                        <p>Instructor</p>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="instructor-box">
                        <div class="instructor-img">
                            <img src="../../static/images/instructor-3.jpg" alt="Instructor" />
                            <ul>
                                <li><a href="javascript:void(0);"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <a href="instructor-detail.html"><h3 class="h3-title">Jason Response</h3></a>
                        <p>Instructor</p>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="instructor-box">
                        <div class="instructor-img">
                            <img src="../../static/images/instructor-4.jpg" alt="Instructor" />
                            <ul>
                                <li><a href="javascript:void(0);"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <a href="instructor-detail.html"><h3 class="h3-title">Jonquil Von</h3></a>
                        <p>Instructor</p>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="instructor-box">
                        <div class="instructor-img">
                            <img src="../../static/images/instructor-5.jpg" alt="Instructor" />
                            <ul>
                                <li><a href="javascript:void(0);"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="javascript:void(0);"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <a href="instructor-detail.html"><h3 class="h3-title">Kelly Franklin</h3></a>
                        <p>Instructor</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="main-testimonial">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="testimonial-title">
                        <h2 class="h2-subtitle">Testimonial</h2>
                        <h2 class="h2-title">What Our Client Says About Us</h2>
                        <p>Proin et lacus eu odio tempor porttitor id vel augue. Vivamus volutpat vehicula sem, et imperdiet enim tempor id. Phasellus lobortis efficitur nisl eget vehicula. Donec viverra blandit nunc, nec tempor ligula ullamcorper venenatis.</p>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="testimonial-slider">
                        <div class="testimonial-box">
                            <p>&quot;Proin feugiat tortor non neque eleifend, at fermentum est elementum. Ut mollis leo odio vulputate rutrum. Nunc sagittis sit amet ligula ut eleifend. Mauris consequat mauris sit amet turpis commodo fermentum. Quisque consequat tortor ut nisl finibus&quot;.</p>
                            <div class="testimonial-client">
                                <div class="testimonial-client-img-box">
                                    <div class="testimonial-img">
                                        <img src="../../static/images/client-1.jpg" alt="client" />
                                    </div>
                                </div>
                                <div class="testimonial-client-name">
                                    <h3 class="h3-title">Christine Rose</h3>
                                    <span>Customer</span>
                                </div>
                            </div>
                            <div class="testimonial-quote">
                                <img src="../../static/images/quote.png" alt="quote" />
                            </div>
                        </div>
                        <div class="testimonial-box">
                            <p>&quot;Proin feugiat tortor non neque eleifend, at fermentum est elementum. Ut mollis leo odio vulputate rutrum. Nunc sagittis sit amet ligula ut eleifend. Mauris consequat mauris sit amet turpis commodo fermentum. Quisque consequat tortor ut nisl finibus&quot;.</p>
                            <div class="testimonial-client">
                                <div class="testimonial-client-img-box">
                                    <div class="testimonial-img">
                                        <img src="../../static/images/client-2.jpg" alt="client" />
                                    </div>
                                </div>
                                <div class="testimonial-client-name">
                                    <h3 class="h3-title">Christine Rose</h3>
                                    <span>Customer</span>
                                </div>
                            </div>
                            <div class="testimonial-quote">
                                <img src="../../static/images/quote.png" alt="quote" />
                            </div>
                        </div>
                        <div class="testimonial-box">
                            <p>&quot;Proin feugiat tortor non neque eleifend, at fermentum est elementum. Ut mollis leo odio vulputate rutrum. Nunc sagittis sit amet ligula ut eleifend. Mauris consequat mauris sit amet turpis commodo fermentum. Quisque consequat tortor ut nisl finibus&quot;.</p>
                            <div class="testimonial-client">
                                <div class="testimonial-client-img-box">
                                    <div class="testimonial-img">
                                        <img src="../../static/images/client-3.jpg" alt="client" />
                                    </div>
                                </div>
                                <div class="testimonial-client-name">
                                    <h3 class="h3-title">Christine Rose</h3>
                                    <span>Customer</span>
                                </div>
                            </div>
                            <div class="testimonial-quote">
                                <img src="../../static/images/quote.png" alt="quote" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="main-blog">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="blog-title">
                        <h2 class="h2-subtitle">Our Blog</h2>
                        <h2 class="h2-title">Latest Blog & News</h2>
                    </div>
                </div>
            </div>
            <div class="row blog-slider">
                <div class="col-lg-4">
                    <div class="blog-box">
                        <div class="blog-img">
                            <img src="../../static/images/blog-1.jpg" alt="blog" />
                        </div>
                        <div class="blog-content">
                            <a href="blog-detail.html"><h3 class="h3-title">Proin feugiat tortor non neque eleifend.</h3></a>
                            <div class="blog-box-line"></div>
                            <div class="blog-date-comment">
                                <div class="blog-date">
                                    <div class="blog-date-icon">
                                        <img src="../../static/images/calendar.png" alt="icon" />
                                    </div>
                                    <a href="javascript:void(0);"><p>07 Jan, 2022</p></a>
                                </div>
                                <div class="blog-box-line"></div>
                                <div class="blog-comment">
                                    <div class="blog-comment-icon">
                                        <img src="../../static/images/comment.png" alt="icon" />
                                    </div>
                                    <a href="javascript:void(0);"><p>3 Comments</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog-box">
                        <div class="blog-img">
                            <img src="../../static/images/blog-2.jpg" alt="blog" />
                        </div>
                        <div class="blog-content">
                            <a href="blog-detail.html"><h3 class="h3-title">Proin feugiat tortor non neque eleifend.</h3></a>
                            <div class="blog-box-line"></div>
                            <div class="blog-date-comment">
                                <div class="blog-date">
                                    <div class="blog-date-icon">
                                        <img src="../../static/images/calendar.png" alt="icon" />
                                    </div>
                                    <a href="javascript:void(0);"><p>07 Jan, 2022</p></a>
                                </div>
                                <div class="blog-box-line"></div>
                                <div class="blog-comment">
                                    <div class="blog-comment-icon">
                                        <img src="../../static/images/comment.png" alt="icon" />
                                    </div>
                                    <a href="javascript:void(0);"><p>3 Comments</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="blog-box">
                        <div class="blog-img">
                            <img src="../../static/images/blog-3.jpg" alt="blog" />
                        </div>
                        <div class="blog-content">
                            <a href="blog-detail.html"><h3 class="h3-title">Proin feugiat tortor non neque eleifend.</h3></a>
                            <div class="blog-box-line"></div>
                            <div class="blog-date-comment">
                                <div class="blog-date">
                                    <div class="blog-date-icon">
                                        <img src="../../static/images/calendar.png" alt="icon" />
                                    </div>
                                    <a href="javascript:void(0);"><p>07 Jan, 2022</p></a>
                                </div>
                                <div class="blog-box-line"></div>
                                <div class="blog-comment">
                                    <div class="blog-comment-icon">
                                        <img src="../../static/images/comment.png" alt="icon" />
                                    </div>
                                    <a href="javascript:void(0);"><p>3 Comments</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="main-cta">
        <div class="container">
            <div class="row align-items-center cta-bg">
                <div class="cta-bg-img">
                    <img src="../../static/images/cta-bg-img.png" alt="bg" />
                </div>
                <div class="col-lg-6">
                    <div class="cta-title">
                        <h2 class="h2-title">Start Your Best Online Classes With Us</h2>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="cta-btn">
                        <a href="contact-us.html" class="sec-btn">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </React.Fragment>
  )
}
