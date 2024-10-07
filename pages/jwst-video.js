import React, {useEffect, useRef, useState} from 'react';
import BackgroundMedia from "../components/BackgroundMedia";
import Head from "next/head";
import Navbar from "../components/NavBar";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const JwstVideo = () => {
    return (
        <>
            <Head>
                <title>JWST Cosmic Exploration |Video</title>
                <meta name="description" content="Explore the universe with the James Webb Space Telescope"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Navbar/>
            <BackgroundMedia src={`{basePath}/videos/intro4th.mp4`}/>
        </>
    );
};

export default JwstVideo;
