import { Grid, Typography, Card, CardContent, CardMedia, Box } from '@mui/material';

const JWSTInfo = () => {
    return (
        <Grid container spacing={4} alignItems="center">
            {/* JWST Image */}
            <Grid item xs={12} md={6}>
                <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
                    <CardMedia
                        component="img"
                        alt="James Webb Space Telescope"
                        height="400"
                        image="/jwst.png"
                        sx={{ borderRadius: 4 }}
                    />
                </Card>
            </Grid>

            {/* JWST Info Text */}
            <Grid item xs={12} md={6}>
                <Card sx={{ backgroundColor: 'transparent', boxShadow: 'none', color: 'white' }}>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            James Webb Space Telescope (JWST)
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The JWST is the largest and most powerful space telescope ever launched. With its infrared capabilities, it
                            will help us discover new galaxies, study star formation, and explore exoplanets. JWST is a game-changer in
                            our understanding of the cosmos.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Launched in 2021, JWST is positioned over a million miles from Earth, providing unprecedented views of the
                            universe, revealing details that have never been seen before.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default JWSTInfo;
