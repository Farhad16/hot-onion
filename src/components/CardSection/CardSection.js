import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import img1 from '../../assests/Images/architecture-building-city-2047397.png'
import img2 from '../../assests/Images/chef-cook-food-33614.png'
import img3 from '../../assests/Images/adult-blur-blurred-background-687824.png'

import icon1 from '../../assests/ICON/Group 1133.png'
import icon2 from '../../assests/ICON/Group 204.png'
import icon3 from '../../assests/ICON/Group 245.png'

import './CardSection.css'
import { Link } from 'react-router-dom';


const CardSection = () => {
    return (
        <Container>
            <div className="heading">
                <h2>Why you choose us</h2>
                <h6>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Qui sapiente eaque repellendus asperiores nisi! Architecto,
                    praesentium eligendi consequatur inventore fuga eius totam
                    officia adipisci. Nostrum quia soluta vel distinctio delectus!
                </h6>
            </div>
            <Row>
                <Col md={4}>
                    <div className="staticCard">
                        <div className="staticCardImg">
                            <img src={img1} alt="" />
                        </div>
                        <div className="staticCardDetails">
                            <div>
                                <img src={icon1} alt="" />
                            </div>
                            <div className="cardDescription">
                                <h5>Card Title</h5>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <Link to="">See More</Link>
                    </div>
                </Col>
                <Col md={4}>
                    <div className="staticCard">
                        <div className="staticCardImg">
                            <img src={img2} alt="" />
                        </div>
                        <div className="staticCardDetails">
                            <div>
                                <img src={icon2} alt="" />
                            </div>
                            <div className="cardDescription">
                                <h5>Card Title</h5>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <Link to="">See More</Link>

                    </div>
                </Col>
                <Col md={4}>
                    <div className="staticCard">
                        <div className="staticCardImg">
                            <img src={img3} alt="" />
                        </div>
                        <div className="staticCardDetails">
                            <div>
                                <img src={icon3} alt="" />
                            </div>
                            <div className="cardDescription">
                                <h5>Card Title</h5>
                                <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <Link to="">See More</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CardSection;