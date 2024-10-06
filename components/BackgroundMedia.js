import React, { useEffect, useRef, useState } from 'react';

const BackgroundMedia = ({ src, onEnded }) => {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, []);


    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <>
            <video
                className="background-video"
                autoPlay
                muted={isMuted}  // Mute if isMuted is true
                ref={videoRef}   // Reference to video element
                onEnded={onEnded}  // Trigger onEnded prop when video ends
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <button onClick={toggleMute} className="glow-button">
                {isMuted ? "Unmute" : "Mute"}
            </button>
            {/*<audio ref={audioRef} loop autoPlay>*/}
            {/*    <source src="/audios/1st.m4a" type="audio/mpeg"/>*/}
            {/*    Your browser does not support the audio element.*/}
            {/*</audio>*/}

        </>
    );
};

export default BackgroundMedia;
