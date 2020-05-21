import React, { Component } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Container, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

import './Footer.css';
import LogoImage from '../img/logo/Logo.png';

class Footer extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <MDBFooter>
                    <div className="connected">

                        <Row className="">
                            <Col md="8" lg="7" className="">
                                <h6 className="mb-0 text-white">
                                    Conectate con nosotros!
                                </h6>
                            </Col>
                            <Col md="4" lg="5" className="">
                                <a className="">
                                    <i className="">Facebook</i>
                                </a>
                            </Col>
                        </Row>

                    </div>
                    <MDBContainer fluid className="text-center text-md-left content">
                        <MDBRow>
                            <MDBCol md="4" lg="4" xl="4" className="dark-grey-text">
                                <h5 className="text-uppercase font-weight-bold h5Text">
                                    <strong>Mom's Kitchen</strong>
                                </h5>
                                <p>
                                    Aplicación de domicilios de comida caseros
                                </p>
                                <img
                                    alt=""
                                    src={LogoImage}
                                    width="80"
                                    height="80"
                                    className="align-content-center"
                                />
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3" className="dark-grey-text">
                                <h5 className="text-uppercase font-weight-bold h5Text">
                                    <strong>Enlaces</strong>
                                </h5>
                                <ul>
                                    <li className="list-unstyled">
                                        <a href="#!">Link 1</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="#!">Link 2</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="#!">Link 3</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="#!">Link 4</a>
                                    </li>
                                </ul>
                            </MDBCol>
                            <MDBCol md="5" lg="4" xl="3" className="dark-grey-text">
                                <h5 className="text-uppercase font-weight-bold h5Text">
                                    <strong>Contacto</strong>
                                </h5>
                                <p>
                                    <i className="fa fa-home mr-3" /> Bogotá, D.C. 10012, CO
                                </p>
                                <p>
                                    <i className="fa fa-envelope mr-3" /> momskitchen@gmail.com
                                </p>
                                <p>
                                    <i className="fa fa-phone mr-3" /> (+57) 301 3664994
                                </p>
                                <p>
                                    <i className="fa fa-print mr-3" /> (+57) 300 5703407
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <div className="copyrightFooter footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MomsKitchen.com"> MomsKitchen.com </a>
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </div>
        )
    }

}

export default Footer;