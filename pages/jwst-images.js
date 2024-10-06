import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "../components/NavBar";
import Head from "next/head";

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
        slidesToShow: 1, // Show 1 image at a time
        slidesToScroll: 1,
        arrows: false, // Optionally remove arrows for a cleaner look
        autoplay: true, // Automatically play the slider
        autoplaySpeed: 3000, // 3 seconds per slide
        fade: true, // Enable fade transition for smoother slides
        responsive: [
            {
                breakpoint: 900, // For tablets
                settings: {
                    slidesToShow: 1, // Still show 1 image on smaller screens
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
            <Head>
                <title>JWST Cosmic Exploration | Info</title>
                <meta name="description" content="Explore the universe with the James Webb Space Telescope" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Box sx={{
                height: '100vh',
                width: '100%',
                backgroundColor: '#0e0e0e', // Darker background for better contrast
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
            }}>
                <Typography variant="h3" align="center" sx={{ color: '#fff', marginBottom: 3, fontFamily: 'Roboto, sans-serif', letterSpacing: 2 }}>
                    Explore the Universe
                </Typography>
                <Box sx={{ width: '80%' }}> {/* Box to control width of the slider */}
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index}>
                                <Card sx={{
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                    position: 'relative',
                                    overflow: 'hidden', // Ensure content doesn't overflow
                                    borderRadius: 4,
                                }}>
                                    <CardMedia
                                        component="img"
                                        alt={image.title}
                                        image={image.src}
                                        sx={{
                                            borderRadius: 4,
                                            width: '100%',
                                            height: '70vh', // Larger height for a more immersive feel
                                            objectFit: 'cover', // Cover the entire space
                                            transition: 'transform 0.5s ease-in-out', // Smooth zoom effect
                                            '&:hover': {
                                                transform: 'scale(1.08)', // Slight zoom on hover
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
                                            backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker overlay
                                            padding: 2,
                                            textAlign: 'center',
                                            fontSize: '1.2rem', // Larger font size for titles
                                            fontWeight: 'bold', // Make the text bolder
                                            letterSpacing: 1.5,
                                            textTransform: 'uppercase', // Title case
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
            </Box>
        </>
    );
};

export default ImageSlider;
