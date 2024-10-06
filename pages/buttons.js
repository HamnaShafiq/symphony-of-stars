import {Container, Button, Typography} from '@mui/material';
import {useRouter} from 'next/router';
import Head from "next/head";
import Navbar from "../components/NavBar";

const Buttons = () => {
    const router = useRouter();

    const showJWSTImages = () => {
        router.push('/jwst-images');
    };

    const showJWSTVideo = () => {
        router.push('/jwst-video');
    };

    const showSolarSystem = () => {
        router.push('/solar-system');
    };

    const showInfo = () => {
        router.push('/jwst-info');
    };

    return (
        <>
            <Head>
                <title>JWST Cosmic Exploration</title>
                <meta name="description" content="Explore the universe with the James Webb Space Telescope"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <Container maxWidth="lg" sx={{textAlign: 'center', marginTop: 4}}>
                <Typography variant="h4" gutterBottom>
                    Explore the Universe
                </Typography>
                <Button className="glow-button" onClick={showJWSTImages} sx={{margin: 2}}>
                    Show JWST Images
                </Button>
                <Button className="glow-button" onClick={showInfo} sx={{margin: 2}}>
                    Show JWST Information
                </Button>
                <Button className="glow-button" onClick={showJWSTVideo} sx={{margin: 2}}>
                    Show JWST Video
                </Button>
                <Button className="glow-button" onClick={showSolarSystem} sx={{margin: 2}}>
                    Show Solar System
                </Button>
            </Container>
        </>
    );
};

export default Buttons;
