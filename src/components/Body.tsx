import react from "react";
import './css/body.css'

const AboutUs = () => {
    return(
        <div className="container-sm body-content">
            
        </div>
    )
}

// Optional const that can be export
const BG_1 = () => {
    return(
        <div className="img-bg">
            <img className="img-fit img-fluid" src="/assets/restaurant-bg.png" alt="restaurant-bg"/>
        </div>
    );
};

// Optional export if needed
export {BG_1, AboutUs};