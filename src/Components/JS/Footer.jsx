import React from "react";
import '../CSS/Footer.css'



class Footer extends React.Component {
    state = {}
    render() {
        return (
            <>
                <footer>
                    <div className="link-container">
                        <div className="use-links">
                            <h4 className="link-head">Use full links</h4>
                            <ul>
                                <li>
                                    <a href="http://www.tidancadlab.xyz" target="_blank" rel="noopener">HDD Calculation</a>
                                </li>
                            </ul>
                        </div>
                        <div className="aboutUs">
                            <h4>About us</h4>
                            <h3>Tidan Projects</h3>
                            <p>25 ward no 05, Mehara jatoowas. khetri, Jhunjhunu, Rajasthan - 333036</p>
                            <p>Contact us on +91 7016947328</p>
                            <p>Mail us on tidancadlab@gmail.com</p>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;