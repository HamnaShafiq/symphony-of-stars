// components/Navbar.js

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useMediaQuery } from '@mui/material';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const drawerList = (
        <List>
            <ListItem button component={Link} href="/" passHref>
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} href="/buttons" passHref>
                <ListItemText primary="all options" />
            </ListItem>
            <ListItem button component={Link} href="/jwst-info" passHref>
                <ListItemText primary="JWST Information" />
            </ListItem>
            <ListItem button component={Link} href="/jwst-video" passHref>
                <ListItemText primary="JWST video" />
            </ListItem>
            <ListItem button component={Link} href="/jwst-images" passHref>
                <ListItemText primary="JWST Images" />
            </ListItem>
            <ListItem button component={Link} href="/solar-system" passHref>
                <ListItemText primary="Solar System" />
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
                        <Link href="/buttons" passHref>
                            <Button color="inherit">all options</Button>
                        </Link>
                        <Link href="/jwst-video" passHref>
                            <Button color="inherit">JWST video</Button>
                        </Link>
                        <Link href="/jwst-info" passHref>
                            <Button color="inherit">JWST Images</Button>
                        </Link>
                        <Link href="/solar-system" passHref>
                            <Button color="inherit">Solar System</Button>
                        </Link>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
