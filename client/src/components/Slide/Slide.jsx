import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Slide.css"
import img1 from "./imgs/My project-1 (4).png";
import img2 from "./imgs/My project-1 (5).png";
import img3 from "./imgs/My project-1 (6).png";

function NoTransitionExample() {
    return (
        <div className='container'>
            <Carousel slide={false}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2>Lo ultimo en Moda!!</h2>
                        <h4>Dile adiós al “no tengo que ponerme”.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2>Construye tu mejor versión. </h2>
                        <h4>La sonrisa te queda con tu outfit y siempre está de moda.</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2>No digas quién eres, demuéstrales quién eres</h2>
                        <h4>
                            Sal de aquí usando tu nuevo estilo
                        </h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default NoTransitionExample;