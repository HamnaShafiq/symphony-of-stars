import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "../components/NavBar";

const images = [
    {
        src: '/images/galaxy.png',
        title: 'Galaxy',
    },
    {
        src: '/images/galaxy2.png',
        title: 'Galaxy 2',
    },
    {
        src: '/images/nebula.png',
        title: 'Nebula',
    },
    {
        src: '/images/nebula2.jpg',
        title: 'Nebula 2',
    },
    // Add more images as needed
];

const ImageSlider = () => {
    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 900, // Adjusted for tablets
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600, // For small screens
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <Navbar />
            <Box sx={{
                padding: 4,
                backgroundColor: '#1A1A1A', // Dark background for contrast
                borderRadius: 2,
                boxShadow: '0 4px 20px rgba(0,0,0,0.5)', // Shadow for depth
            }}>
                <Typography variant="h4" align="center" sx={{ color: 'white', marginBottom: 3 }}>
                    Explore the Universe
                </Typography>
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index}>
                            <Card sx={{
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                                position: 'relative',
                                overflow: 'hidden', // Ensure content doesn't overflow
                                borderRadius: 2,
                            }}>
                                <CardMedia
                                    component="img"
                                    alt={image.title}
                                    image={image.src}
                                    sx={{
                                        borderRadius: 2,
                                        transition: 'transform 0.5s ease', // Smooth zoom effect
                                        '&:hover': {
                                            transform: 'scale(1.05)', // Zoom on hover
                                        },
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        color: 'white',
                                        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slightly darker overlay
                                        padding: 1,
                                        textAlign: 'center',
                                        borderRadius: '0 0 4px 4px', // Rounded bottom corners
                                    }}
                                >
                                    {image.title}
                                </Typography>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </Box>
        </>
    );
};

export default ImageSlider;
