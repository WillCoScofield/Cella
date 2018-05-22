import React from "react";
import { Container, Row, Col, } from "reactstrap";
import "../WhyUs/WhyUs.css";

export default class WHyUs extends React.Component {

    render() {
        return (
            <Container fluid className="why-us-section">
                <Row>
                    <Col xs="12">
                        <div>
                            <h1 className="why-us-header">
                                Why Choose Us
                            </h1>
                        </div>
                    </Col>
                </Row>
                <Row className="why-us-item-row">
                    <Col xs="12" md="3" lg="4">
                        <div className="why-us-item-div">
                            <div id="pic-one">

                            </div>
                            <h3>Expansive foot print</h3>
                            <p>With our storage options being user generated, every month hundreds of new options will become available</p>
                        </div>
                    </Col>
                    <Col xs="12" md="3" lg="4">
                        <div className="why-us-item-div">
                            <div id="pic-two">

                            </div>
                            <h3>Flexible Options</h3>
                            <p>Very flexible month to month payment options. This gives you the best prices, at minimal risk.</p>
                        </div>
                    </Col>
                    <Col xs="12" md="3" lg="4">
                        <div className="why-us-item-div">
                            <i id="message-box" className="material-icons">call</i>
                            <h3>Let us do the talking</h3>
                            <p>We talk to the owners directly, because we value your time, and make sure you get the best deal.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}





// const WhyUs = props => (
//     <div className="container">
//         <div className="row">
//             <div className="col-xs12 why-us-header">
//                 <h1>
//                     Why We're Da Bestest
//                  </h1>
//             </div>
//         </div>
//         <div className="row">
//             <div className="col-xs12-md4-lg4 why-us-item-div">
//                 <img src="" alt="" />
//                 <h4>
//                     Expansive foot print
//                 </h4>
//                 <p>
//                     With our storage options being user generated, every month hundreds of new options will become available
//                 </p>
//             </div>
//             <div className="col-xs12-md4-lg4 why-us-item-div">
//                 <img src="" alt="" />
//                 <h4>
//                     No longterm contracts
//                 </h4>
//                 <p>
//                     Very flexible month to month payment options. This gives you the best prices, at minimal risk.
//                 </p>
//             </div>
//             <div className="col-xs12-md4-lg4 why-us-item-div">
//                 <img src="" alt="" />
//                 <h4>
//                     Let us do the talking
//                 </h4>
//                 <p>
//                     We talk to the owners directly, because we value your time, and make sure you get the best deal.
//                 </p>
//             </div>
//         </div>
//     </div>
// );

// export default WhyUs;