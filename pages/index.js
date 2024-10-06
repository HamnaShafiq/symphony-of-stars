import Head from 'next/head';
import BackgroundMedia from '../components/BackgroundMedia';
import { Container } from '@mui/material';
import JWSTInfo from '../components/JWSTInfo';
import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import ButtonsComponent from "../components/ButtonsComponent";
import JWSTImages from "./JWSTImages";
import Galaxy from "./Galaxy";
import SpaceModel from "./SpaceModel";
import Navbar from "../components/NavBar";

export default function Home() {
    const [showJWST, setShowJWST] = useState(false);
    const [showJWSTImages, setShowJWSTImages] = useState(false);
    const [showGalaxy, setShowGalaxy] = useState(false);
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
                <meta name="description" content="Explore the universe with the James Webb Space Telescope" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <Container maxWidth="lg" sx={{ zIndex: 1, position: 'relative', color: 'white', textAlign: 'center', paddingTop: 8 }}>
                {showJWSTImages && <JWSTImages />}
                {showGalaxy && <Galaxy/>} {/* Add your Galaxy component here */}
                {showSolarSystem && <SpaceModel />} {/* Add your Solar System component here */}
                {!showJWSTImages && !showGalaxy && !showSolarSystem && !discover && !videoEnded && !showJWST &&(
                    <HeroSection setShowJWST={setShowJWST} />
                )}
                {showJWST && !discover && !videoEnded && (
                    <JWSTInfo setDiscover={setDiscover} />
                )}
                {discover && !videoEnded && (
                    <BackgroundMedia
                        src="/videos/ex.mp4"
                        onEnded={() => {
                            console.log('Video ended');
                            setDiscover(false);
                            setVideoEnded(true);
                        }}
                    />
                )}
                {!showJWSTImages && !showGalaxy && !showSolarSystem && !discover && videoEnded && (
                    <ButtonsComponent
                        setShowGalaxy={setShowGalaxy}
                        setShowSolarSystem={setShowSolarSystem}
                        setShowJWSTImages={setShowJWSTImages}
                    />
                )}
            </Container>
        </>
    );
}
