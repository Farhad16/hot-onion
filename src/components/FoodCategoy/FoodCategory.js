
import React, { useEffect, useState } from 'react';
import { Col, Form, Nav, Navbar, Row } from 'react-bootstrap';
import './FoodCategory.css'
import lunch from './lunch'
import breakfast from './breakfast'
import dinner from './dinner'
import Menu from '../Menu/Menu';

const FoodCategory = () => {
    const [menu, setMenu] = useState(lunch)
    const [category, setCategory] = useState("lunch");

    const handleMenu = (foods) => {
        setMenu(foods)
    }
    return (
        <div className="container">
            <Navbar className="navber d-flex justify-content-center">
                <Form inline>
                    <Nav>
                        <p className={category === "breakfast" ? "navLinkFood active" : "navLinkFood"} onClick={() => { handleMenu(breakfast); setCategory("breakfast") }}>Breakfast</p>
                        <p className={category === "lunch" ? "navLinkFood active" : "navLinkFood"} onClick={() => { handleMenu(lunch); setCategory("lunch") }}>Lunch</p>
                        <p className={category === "dinner" ? "navLinkFood active" : "navLinkFood"} onClick={() => { handleMenu(dinner); setCategory("dinner") }} >Dinner</p>
                    </Nav>
                </Form>
            </Navbar>

            <Row className="foodSection">
                {
                    menu.map(food => <Col md={4} key={food.id}>
                        <Menu food={food}></Menu>
                    </Col>)
                }

            </Row>

        </div>
    );
};

export default FoodCategory;