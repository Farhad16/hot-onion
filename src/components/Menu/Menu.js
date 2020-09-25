import React from 'react';
import { Card } from 'react-bootstrap';
import './Menu.css'


const Menu = (props) => {
    const { img, name, title, price } = props.food
    return (
        <Card style={{ width: '22rem', height: '26rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {title}
                </Card.Text>
                <Card.Text className="price">
                    ${price}
                </Card.Text>
            </Card.Body>
        </Card >
    );
};

export default Menu;