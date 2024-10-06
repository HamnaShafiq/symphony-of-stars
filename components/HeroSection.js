import Head from 'next/head';
import BackgroundMedia from '../components/BackgroundMedia';
import {Container, Typography} from '@mui/material';
import Navbar from "./NavBar";
import {useRouter} from 'next/router';

export default function HeroSection({setShowJWST}) {
    const router = useRouter();

    const handleHeroButtonClick = () => {
        // This function will now be called only when the button is clicked (client-side)
        router.push('/buttons');
    };

    return (
        <>
            <Head>
                <title>JWST Cosmic Exploration</title>
                <meta name="description" content="Explore the universe with the James Webb Space Telescope"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <BackgroundMedia src={"/videos/1st.mp4"}/>

            <Container
                maxWidth="lg"
                sx={{zIndex: 1, position: 'relative', color: 'white', textAlign: 'center', paddingTop: 8}}
            >
                <Typography variant="h1" component="h1" gutterBottom>
                    Explore the Universe
                </Typography>

                <Typography variant="h5" component="p" gutterBottom>
                    With the James Webb Space Telescope
                </Typography>
                {/* Fix: Pass the function reference without invoking it */}
                <button className="glow-button" onClick={handleHeroButtonClick}>
                    JWST, What's that?
                </button>
            </Container>
        </>
    )
}
