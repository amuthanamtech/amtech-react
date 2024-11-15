import React from 'react';
// import bannerImage from '../assets/img/hero.png';
import { Link } from 'react-router-dom';

const bannerImage = process.env.PUBLIC_URL + '/assets/img/hero.png';
const HeroBanner = () => {
    return (
        <div className="container-xxl position-relative p-0">
            <div className="container-xxl bg-primary hero-header">
                <div className="container px-lg-5">
                    <div className="row g-5 align-items-end">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="text-white mb-4 animated slideInDown">Transforming Digital Experiences with Innovation and Precision</h1>
                            <p className="text-white pb-3 animated slideInDown">Leveraging the power of Sitecore, we create dynamic, personalized digital experiences that drive engagement and growth. Our team of skilled architects and developers bring creativity and intelligence to every project, ensuring top-notch solutions tailored to your unique needs.</p>
                            <a href="/" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Read More</a>
                            <Link to={'/contact'} className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</Link>
                        </div>
                        <div className="col-lg-6 text-center text-lg-start">
                            <img className="img-fluid animated zoomIn" src={bannerImage} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default HeroBanner;



