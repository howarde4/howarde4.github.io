import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselCaption({ title, text }) {
    return (

        <Carousel.Caption>
            <h3>{title}</h3>
            <p>{text}</p>
        </Carousel.Caption>

    )
}