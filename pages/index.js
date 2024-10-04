import Head from 'next/head';
import BackgroundMedia from '../components/BackgroundMedia';
import {Container, Typography, Box, Grid} from '@mui/material';
import JWSTInfo from '../components/JWSTInfo';

export default function Home() {
    return (
        <>
            <Head>
                <title>JWST Cosmic Exploration</title>
                <meta name="description" content="Explore the universe with the James Webb Space Telescope"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <BackgroundMedia/>

            <Container maxWidth="lg"
                       sx={{zIndex: 1, position: 'relative', color: 'white', textAlign: 'center', paddingTop: 8}}>
                ] <Typography variant="h1" component="h1" gutterBottom>
                Explore the Universe
            </Typography>

                <Typography variant="h5" component="p" gutterBottom>
                    With the James Webb Space Telescope
                </Typography>
                <button className="glow-button">
                    Let's dive into it!
                </button>

                <Box sx={{mt: 5}}>
                    <JWSTInfo/>
                </Box>
            </Container>
        </>
    );
}
