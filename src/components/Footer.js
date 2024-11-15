import React from 'react';
import portfolio1 from '../assets/img/portfolio-1.jpg';
import portfolio2 from '../assets/img/portfolio-2.jpg';
import portfolio3 from '../assets/img/portfolio-3.jpg';
import portfolio4 from '../assets/img/portfolio-4.jpg';
import portfolio5 from '../assets/img/portfolio-5.jpg';
import portfolio6 from '../assets/img/portfolio-5.jpg';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5 px-lg-5">
                <div className="row g-5">
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Address<span></span></p>
                        <p><i className="fa fa-map-marker-alt me-3"></i>Compass Building, Al Shohada Road, AL Hamra Industrial Zone-FZ,Ras Al Khaimah, United Arab Emirates</p>
                        <p><i className="fa fa-w-alt me-3"></i>+91 9524181451</p>
                        <p><i className="fa fa-envelope me-3"></i>info@amtechdigital.co</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Quick Link<span></span></p>
                        <Link to={'/about'} className="btn btn-link">About Us</Link>
                        <Link to={'/contact'} className="btn btn-link">Contact</Link>
                        <a className="btn btn-link" href="">Privacy Policy</a>
                        <a className="btn btn-link" href="">Terms & Condition</a>
                        <a className="btn btn-link" href="">Career</a>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Gallery<span></span></p>
                        <div className="row g-2">
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio1} alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio2} alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio3} alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio4} alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio5} alt="Image" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid" src={portfolio6} alt="Image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <p className="section-title text-white h5 mb-4">Newsletter<span></span></p>
                        <p>Stay updated with our latest news, insights, and exclusive offers. Subscribe to our newsletter today!</p>
                        <div className="position-relative w-100 mt-3">
                            <input id="YourEmail" name='email' className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" autoComplete="email" />
                            <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-0 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-lg-5">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="">AmTechDigital.co</a>, All Right Reserved.


                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <Link to={"/"}>Home</Link>
                                <Link to={'/'}>Cookies</Link>
                                <Link to={'/'}>Help</Link>
                                <Link to={'/'}>FQAs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
