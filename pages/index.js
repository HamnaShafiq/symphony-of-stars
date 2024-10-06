import Head from 'next/head';
import BackgroundMedia from '../components/BackgroundMedia';
import {Container} from '@mui/material';
import {useEffect, useState} from "react";
import HeroSection from "../components/HeroSection";
import JWSTImages from "./jwst-images";
import SolarSystem from "./solar-system";
import Navbar from "../components/NavBar";
import Buttons from "./buttons";

export default function Home() {
    const [showJWST, setShowJWST] = useState(false);
    const [showJWSTImages, setShowJWSTImages] = useState(false);
    const [showJWSTVideo, setShowJWSTVideo] = useState(false);
    const [showSolarSystem, setShowSolarSystem] = useState(false);
    const [discover, setDiscover] = useState(false);
    const [videoEnded, setVideoEnded] = useState(false);

    useEffect(() => {
        console.log('showJWSTImages', showJWSTImages);
    }, [showJWSTImages]);

    return (
        <>
            <Head>
                <title>JWST Cosmic Exploration</title>
                <meta name="description" content="Explore the universe with the James Webb Space Telescope"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <Container maxWidth="lg"
                       sx={{zIndex: 1, position: 'relative', color: 'white', textAlign: 'center', paddingTop: 8}}>
                <HeroSection/>
            </Container>
        </>
    );
}
