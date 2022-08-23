import React from "react";
import '../CSS/Home.css'

class Home extends React.Component {
    state = {  } 
    render() { 
        return (
            <div className="divclass"><div className="card text-bg-dark mb-3" style={{maxWidth: '18rem'}}>
        <div className="card-header">Header</div>
        <div className="card-body">
          <h5 className="card-title">Dark card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

            </div>

        );
    }
}
 
export default Home;