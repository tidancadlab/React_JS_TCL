import React from "react";
import '../CSS/About.css'
import image from '../Images/avtar_Rahul.JPG'

class AboutUs extends React.Component {
    state = {}
    render() {
        return (
            <>
                <div className="bootom bg-dark noprint">
                    <div className="card mb-3 bg-dark">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={image} className="img-fluid imgWidth rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body text-light">
                                    <h5 className="card-title">Contact us</h5>
                                    <p className="card-text">
                                        TIDAN CAD LAB
                                    </p>
                                    <p className="card-text">
                                        The Tidan Group
                                    </p>
                                    <li className="card-text">Contact No. +91 70169 47328</li>
                                    <li className="card-text">Mail us on tidancadlab@gmail.com</li>
                                    <p className="card-text">121/3, New Ahir wara, Old faridabad (HR) -121002</p>
                                    <p className="card-text">
                                        <small className="text-muted">Last updated 3 mins ago</small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>      

            </>
        );
    }
}

export default AboutUs;