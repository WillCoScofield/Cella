import React from "react";
import "../BodyContainer/BodyContainer.css"


const BodyContainer = ({ children, ...props }) => (
    <div {...props}>
        {children}
    </div>
);

export default BodyContainer;




