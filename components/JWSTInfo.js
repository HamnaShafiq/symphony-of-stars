import {Grid, Typography, Card, CardContent, CardMedia, List, ListItem, ListItemText} from '@mui/material';

export default function JWSTInfo({setDiscover}) {
    return (
        <Grid container spacing={4} alignItems="center">

            <Grid item xs={12} md={6}>
                <Card sx={{backgroundColor: 'transparent', boxShadow: 'none'}}>
                    <CardMedia
                        component="img"
                        alt="James Webb Space Telescope"
                        height="400"
                        image="/jwst.png"
                        sx={{borderRadius: 4}}
                    />
                </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card sx={{backgroundColor: 'transparent', boxShadow: 'none', color: 'white'}}>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            James Webb Space Telescope (JWST)
                        </Typography>

                        {/* Styled Bullet List */}
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="The largest and most powerful space telescope ever launched."
                                    primaryTypographyProps={{variant: 'body1', paragraph: true}}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Infrared capabilities that allow us to discover new galaxies, study star formation, and explore exoplanets."
                                    primaryTypographyProps={{variant: 'body1', paragraph: true}}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Positioned over a million miles from Earth for unprecedented views of the universe."
                                    primaryTypographyProps={{variant: 'body1', paragraph: true}}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Launched in 2021, it reveals details of the cosmos never seen before."
                                    primaryTypographyProps={{variant: 'body1', paragraph: true}}
                                />
                            </ListItem>
                        </List>
                        <button className="glow-button" onClick={() => setDiscover(true)}>
                            Let's dive into it!
                        </button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

