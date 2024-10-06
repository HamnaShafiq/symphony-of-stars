import { Container, Button, Typography } from '@mui/material';

const ButtonsComponent = ({ setShowGalaxy, setShowSolarSystem, setShowJWSTImages }) => {
    return (
        <Container maxWidth="lg" sx={{ textAlign: 'center', marginTop: 4 }}>
            <Typography variant="h4" gutterBottom>
                Explore the Universe
            </Typography>
            <Button
                className="glow-button"
                onClick={() => {
                    setShowJWSTImages(true);
                    setShowGalaxy(false);
                    setShowSolarSystem(false);
                }}
                sx={{ margin: 2 }}
            >
                Show JWST Images
            </Button>
            <Button
                className="glow-button"
                onClick={() => {
                    setShowGalaxy(true);
                    setShowJWSTImages(false);
                    setShowSolarSystem(false);
                }}
                sx={{ margin: 2 }}
            >
                Show Galaxy Simulation
            </Button>
            <Button
                className="glow-button"
                onClick={() => {
                    setShowSolarSystem(true);
                    setShowJWSTImages(false);
                    setShowGalaxy(false);
                }}
                sx={{ margin: 2 }}
            >
                Show Solar System
            </Button>
        </Container>
    );
};

export default ButtonsComponent;
