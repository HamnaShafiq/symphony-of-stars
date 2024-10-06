// components/Navbar.js

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)'); // Change breakpoint as needed

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const drawerList = (
        <List>
            <ListItem button component={Link} href="/" passHref>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} href="/Galaxy" passHref>
                <ListItemText primary="Galaxy Simulation" />
            </ListItem>
            <ListItem button component={Link} href="/SpaceModel" passHref>
                <ListItemText primary="Solar System" />
            </ListItem>
            <ListItem button component={Link} href="/JWSTImages" passHref>
                <ListItemText primary="JWST Images" />
            </ListItem>
        </List>
    );

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    JWST Cosmic Exploration
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                            {drawerList}
                        </Drawer>
                    </>
                ) : (
                    <>
                        <Link href="/" passHref>
                            <Button color="inherit">Home</Button>
                        </Link>
                        <Link href="/Galaxy" passHref>
                            <Button color="inherit">Galaxy Simulation</Button>
                        </Link>
                        <Link href="/SpaceModel" passHref>
                            <Button color="inherit">Solar System</Button>
                        </Link>
                        <Link href="/JWSTImages" passHref>
                            <Button color="inherit">JWST Images</Button>
                        </Link>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
