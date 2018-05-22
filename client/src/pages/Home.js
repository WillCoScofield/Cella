import React from "react";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Navbar";
import HomeImage from "../components/HomeImage";
import HomeText from "../components/HomeText";
import BodyContainer from "../components/BodyContainer/BodyContainer";
import WhyUs from "../components/WhyUs/WhyUs";




const Home = () => (
    <BodyContainer id="home-page">
        <div>
            <div className="row">
                <div className="col-sm-6">
                    <HomeText />
                </div>

                <div className="col-sm-6">
                    <HomeImage />
                </div>
            </div>
            <div>
                <WhyUs />
            </div>
        </div>
    </BodyContainer>

);

export default Home;


