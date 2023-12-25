import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { HomeContainer } from "./style";

export default function Section3() {
    const customStyles = {
        prevArrow: {
            left: '10px', // Ajuste conforme necessário
        },
        nextArrow: {
            right: '10px', // Ajuste conforme necessário
        },
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        prevArrow: <div className="slick-prev" style={customStyles.prevArrow}></div>,
        nextArrow: <div className="slick-next" style={customStyles.nextArrow}></div>,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <HomeContainer id='section3'>
        <Slider {...settings}>
            <div>
                <p>Slide 1</p>
            </div>
            <div>
                <p>Slide 2</p>
            </div>
            <div>
                <p>Slide 3</p>
            </div>
            <div>
                <p>Slide 1</p>
            </div>
            <div>
                <p>Slide 2</p>
            </div>
            <div>
                <p>Slide 3</p>
            </div>
            {/* Adicione mais slides conforme necessário */}
        </Slider> </HomeContainer>
    );
};
