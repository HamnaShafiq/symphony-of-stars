import { useEffect, useRef } from 'react';

const BackgroundMedia = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, []);

    return (
        <>
            <video className="background-video" autoPlay loop muted>
                <source src="/videos/1st.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/*<audio ref={audioRef} loop autoPlay>*/}
            {/*    <source src="/audios/1st.m4a" type="audio/mpeg" />*/}
            {/*    Your browser does not support the audio element.*/}
            {/*</audio>*/}
        </>
    );
};

export default BackgroundMedia;
