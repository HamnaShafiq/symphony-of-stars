import {useEffect, useRef} from 'react';

const Discover = ({src}) => {


    return (
        <>
            <video className="background-video" autoPlay loop muted>
                <source src={src} type="video/mp4"/>
                Your browser does not support the video tag.
            </video>

            {/*<audio ref={audioRef} loop autoPlay>*/}
            {/*    <source src="/audios/1st.m4a" type="audio/mpeg"/>*/}
            {/*    Your browser does not support the audio element.*/}
            {/*</audio>*/}
        </>
    );
};

export default Discover;
