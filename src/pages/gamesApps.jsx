import React, { Component } from 'react';
import cargame from './gameImg/cargame.png';
import checkers from './gameImg/checkers.png';
import chess from './gameImg/chess.png';
import crosseyroad from './gameImg/crosseyroad.png';
import dealorno from './gameImg/dealorno.png';
import elevatorgame from './gameImg/elevatorgame.png';
import farmgame from './gameImg/farmgame.png';
import flappybird from './gameImg/flappybird.png';
import laserplatfom from './gameImg/laserplatfom.png';
import Mathgame from './gameImg/Mathgame.png';
import minesweeper from './gameImg/minesweeper.png';
import pong from './gameImg/pong.png';
import projectilesimulation from './gameImg/projectsimulation.png';
import jamesws from './gameImg/camreaonabigone.png';
import ytf from './gameImg/ytf.png';

class GamesApps extends Component {
    state = {
        games: game.getGames(),
        allLoaded: false,
    }
    render() { 
        return (
            <div className='content'>
            <h1>Games And Apps</h1>

            {this.renderGames()}
            </div>
        );
    }
    renderGames() {
        return (
            <React.Fragment>
                {
                    this.state.games.map(g => 
                    <div className='game' key={g.name} style={g.style}>
                        <a href={g.link}>
                        <div className='name'>
                            {g.name} 
                            <img src={g.img} width="100px" className='gameimg'/>
                            <div className='date'>Finshed {g.date}</div>
                            <div className='lag'>Languages: {g.lag}</div>
                        </div>
                        <div className='descript'><p>{g.description}</p> </div>
                        </a>
                    </div>)
                }
            </React.Fragment>
        );
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    }
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
        if(!this.state.allLoaded) {
            var games = document.querySelectorAll(".game");
            for (let i = 0; i < games.length; i++) {
                const game = games[i];
                var scrollrelative = game.getBoundingClientRect().y;
                if(scrollrelative - window.innerHeight - 20 < 0 && this.state.games[i].loaded == false) {
                    console.log(this.state.games[i]);
                    this.setState((prevState) => {
                        const updatedArray = [...prevState.games];
                        var updatedObject = {...prevState.games[i]};
                        updatedObject.loaded = true;
                        updatedObject.style = {
                            opacity: 1,
                            top: "0px",
                        };
                        updatedArray.splice(i, 1, updatedObject);
                        return {games: updatedArray };
                    });
                }
            }
            if(this.state.games[this.state.games.length - 1].loaded == true) {
                this.setState({allLoaded: true})
            }
        }
    }
    //----------------setting up
}


class game {
    constructor(name, link, img, date, lag, description) {
        this.name = name;
        this.link = link;
        this.img = img;
        this.date = date;
        this.lag = lag;
        this.description = description;
        this.style = {
            opacity: "0",
            top: "20px",
        };
        this.loaded = false;
    }
    static getGames() {
        var games = []
        var baseDomain = "https://games.johntheguy.tk";
        games.push(new game("Car Game", baseDomain + "/Car%20Game/", cargame, "2022", "HTML, CSS, JavaScript", "Car simulation game with skidding and crashing."));
        games.push(new game("iOS + Android App", "https://github.com/buzzinJohnnyBoi/Convert-App", null, "2022", "C# and Xaml", "Just a cross-platform xamrin app that I tried to get on the iOS app store, and I managed to get it all the way to the review process, but it was shot down because 'Your app is similar to other apps on the app store, it just varies in content and language.'"));
        games.push(new game("Minesweeper", baseDomain + "/minesweeper/", minesweeper, "2022", "HTML, CSS, JavaScript", "Minesweeper game that uses the JavaScript localStorage Property to store high scores and other information."));
        games.push(new game("Elevator Game", baseDomain + "/elevator%20game/", elevatorgame, "2020", "HTML, CSS, JavaScript", "Game where a guy is trapped in the elevator shaft and tries not to get smushed"));
        games.push(new game("Chess", baseDomain + "/Chess2/", chess, "2021", "JavaScript", "2-player chess game, with all rules (including En passent and Castling). Drag and drop the pieces, once a piece is selected, it will show all possible moves. You might have to zoom out for the game to work properly."));
        games.push(new game("Checkers AI", baseDomain + "/checkers/", checkers, "2022", "JavaScript", "1 person checkers game with AI that I created to look 6 moves in the future."));
        games.push(new game("Crossy road", baseDomain + "/Crossey%20Road/don't%20get%20hit.html", crosseyroad, "2019", "HTML, CSS, JavaScript", "Crossy road game with an emoji character"));
        games.push(new game("Deal or no deal", baseDomain + "/Deal%20or%20No%20deal/dealono.html", dealorno, "2019", "HTML, CSS, JavaScript", "Deal or no deal game where you try to win as much money as possible. Based on the TV show."));
        games.push(new game("Farm Game", baseDomain + "/Farm%20game/tractorGame.html", farmgame, "2020", "HTML, CSS, JavaScript", "Farm game that you can plant and harvest and get money. Don't crash the tractor into the combine."));
        games.push(new game("Flappy Bird", baseDomain + "/flappy%20bird/fb.html", flappybird, "2021", "HTML, CSS, JavaScript", "Flappy bird game where you can buy hats."));
        games.push(new game("Math Game", baseDomain + "/Math%20game/math.html", Mathgame, "2018", "HTML, CSS, JavaScript", "First game that I made, you have to answer math questions in a certin period of time."));
        games.push(new game("Laser Platformer", baseDomain + "/Particle/", laserplatfom, "2022", "JavaScript", "Platformer Laser game that me and my friend made."));
        games.push(new game("Pong", baseDomain + "/pong/pong.html", pong, "2021", "JavaScript", "Pong game"));
        games.push(new game("Projectile motion", baseDomain + "/physics/", projectilesimulation, "2022", "HTML, CSS, JavaScript", "Projectile motion simulation"));
        games.push(new game("Python Webscraper", "https://scraper.johntheguy.tk/", null, "2023", "HTML, Python + Flask", "Webscraper that gets the information that I usually have to go to different websites to see."));
        games.push(new game("Drone website", "https://cameraonabigstick.tk/", jamesws, "2022", "HTML, CSS, JavaScript", "Website that I made form my brothers drone business, that I host on my server."));
        games.push(new game("Youtwitface", "https://youtwitface.tk/", ytf, "2023", "HTML, CSS, JavaScript, PHP, SQL", "Social media site that I made that I host on my server"));
        games.push(new game("Hearts + AI", "https://buzzinjohnnyboi.github.io/Hearts-Game/", null, "2021", "HTML, CSS, JavaScript", "Hearts Card Game and AI. There is also a console that trash talks you. The reason that I am not hosing it myself is because for some reason it won't display the suits correctly on the apache server I'm using"));
        var bool = false;
        while(!bool) {
            bool = true;
            for (let i = 1; i < games.length; i++) {
                if(parseInt(games[i - 1].date) < parseInt(games[i].date)) {
                    let temp = games[i - 1];
                    games[i - 1] = games[i];
                    games[i] = temp;
                    bool = false;
                }                
            }
        }
        console.log(games);
        return games;
    }
}

export default GamesApps;