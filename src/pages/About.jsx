import React, { Component } from 'react';

function About() {
    return (
        <div className='content'>
            <div className='about'>
                <div className='name'>
                    <h1>About</h1>
                </div>
                <div className='descript' id='JC'>
                <h2>John Campbell</h2>
                <div className='line'></div>
                    <div className='text'>
                    I'm John Campbell, a 16-year-old full stack developer with a passion for coding. 
                    I started coding since I was 11, and I have decided to pursue a career as a software developer.<br></br>
                    I made this website with React JS and am currently hosting it on my server.
                    </div>
                </div>
                <br></br>
                <div className='descript'>
                <h2>Programming languages</h2>
                <div className='line'></div>
                    <div className='text'>
                        JavaScript / React Js / Node Js <br></br>
                        Python<br></br>
                        C#<br></br>
                        PHP<br></br>
                        SQL<br></br>
                        HTML <br></br>
                        CSS<br></br>
                        Vba<br></br>
                        C++<br></br>
                    </div>
                </div>
                <div className='descript'>
                <h2>Skills</h2>
                <div className='line'></div>
                <div className='text'>
                    Hosting Websites on my server in the basement<br></br>
                    Setting up virtual machines and containers<br></br>
                    GitHub <a href='https://github.com/buzzinJohnnyBoi'>My GitHub Account</a> <br></br>
                    Full stack Website Development<br></br>
                    Mobile Development<br></br>
                </div>
                </div>
            </div>
            {/* <div className='about'>
            <div className='name'>
                <h2>This Website</h2>
            </div>
            <div className='descript'>
                This Website is made with React js, and hosted in my server in the basement, 
                just like my other websites, <a href="https://youtwitface.tk/"> youtwitface</a> and <a href="https://cameraonabigstick.tk/">cameraonabigstick</a>
                </div>
            </div> */}
            {/* John Campbell is currently 16 years old and loves to code  */}
        </div>
    );
}

export default About;