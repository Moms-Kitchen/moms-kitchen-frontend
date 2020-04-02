import React from 'react';
import { useTrail, animated } from "react-spring";
import './orderForm.css'


const OrderForm = () => {   

    const PRODUCTS = [
        {
            id: 1,
            title: "Orden 1",
            price: 11000
        },
        {
            id: 2,
            title: "Orden 2",
            price: 12000
        },
        {
            id: 3,
            title: "Orden 3",
            price: 11000
        },
        {
            id: 4,
            title: "Orden 4",
            price: 10000
        },
        {
            id: 5,
            title: "Orden 5",
            price: 11000
        },
        {
            id: 6,
            title: "Orden 6",
            price: 12000
        },
        {
            id: 7,
            title: "Orden 7",
            price: 10000
        },
        {
            id: 8,
            title: "Orden 8",
            price: 11000
        },
        {
            id: 9,
            title: "Orden 9",
            price: 12000
        },
        {
            id: 10,
            title: "Orden 10",
            price: 13000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        },{
            id: 9,
            title: "Orden 9",
            price: 12000
        }
    ];

    const config = { tension: 280, friction: 60 };

    const trail = useTrail(PRODUCTS.length, {
        config,
        opacity: 1,
        width: 200,
        background: "#4099ff",
        from: { opacity: 0, width: 175 }
    });

    return (
        <div className="orderFormClass">
            <div className="container">
                {trail.map((props, index) => (
                    <animated.div
                        className="grid-item"
                        style={props}
                        key={PRODUCTS[index].id}
                    >
                        <h3>{PRODUCTS[index].title}</h3>
                        <p>RS. {PRODUCTS[index].price}</p>
                        {console.log(props)}
                    </animated.div>
                ))}
            </div>
        </div>
    )

}
export default OrderForm