import React from "react";
import "../WhyUs/WhyUs.css";

const WhyUs = props => (
    <div className="container">
        <div className="row">
            <div className="col-xs12 why-us-header">
                <h1>
                    Why We're Da Bestest
                 </h1>
            </div>
        </div>
        <div className="row">
            <div className="col-xs12-md4-lg4 why-us-item-div">
                <img src="" alt="" />
                <h4>
                    Expansive foot print
                </h4>
                <p>
                    With our storage options being user generated, every month hundreds of new options will become available
                </p>
            </div>
            <div className="col-xs12-md4-lg4 why-us-item-div">
                <img src="" alt="" />
                <h4>
                    No longterm contracts
                </h4>
                <p>
                    Very flexible month to month payment options. This gives you the best prices, at minimal risk.
                </p>
            </div>
            <div className="col-xs12-md4-lg4 why-us-item-div">
                <img src="" alt="" />
                <h4>
                    Let us do the talking
                </h4>
                <p>
                    We talk to the owners directly, because we value your time, and make sure you get the best deal.
                </p>
            </div>
        </div>
    </div>
);

export default WhyUs;