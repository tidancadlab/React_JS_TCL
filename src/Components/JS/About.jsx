import React from "react";
import '../CSS/About.css'
import image from '../Images/avtar_Rahul.JPG'

class AboutUs extends React.Component {
    state = {}
    render() {
        return (
                <>
                <div className="margin">
                    
                <div className="bg-dark margin d-flex">
                    <div className="bg-dark">
                        <img src={image} alt="" srcset="" />
                    </div>
                    <div className="ms-4 text-light">
                        <h4 className="mb-0">About US</h4>
                        <h3 className="mb-0">Tidan Cad Lab</h3>
                        <h4 className="mb-0">The Tidan Group</h4>
                        <address className="mb-0" >121/03, NewAhir Wara Old Faridabad - 121002</address>
                        <p>Contact us on +91 70169 47328</p>
            
                    </div>

                </div>

                </div>
                </>


        );
    }
}

export default AboutUs;