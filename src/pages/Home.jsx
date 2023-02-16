import React, { useState, useEffect } from 'react';
import video from './videos/John Video.mp4'

function Home() {
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        function handleResize() {
            if(window.innerWidth/1280 > (window.innerHeight - 140)/720) {
                setHeight(window.innerHeight - 140);
                setWidth((window.innerWidth - (window.innerHeight - 140) * 1280/720)/2);
            }
            else {
                setHeight(window.innerWidth * 720/1280 - 12);
                setWidth(0);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div className='content2' style={{ width: `${height * 1280/720}px`, marginLeft: `${width}px` }}>
            {/* <h1>In progress</h1> */}
            <h2>Welcome to my website! I'm John Campbell, a 16-year-old software developer.</h2>
            <h5>Note that the below video of me coding is only sped up a little bit. </h5>
            <video src={video} style={{ height: `${height}px` }} autoPlay muted loop/>
        </div>
    );
}

export default Home;