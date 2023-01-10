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
// var imgs2 = './gameImg';

class GamesApps extends Component {
    state = {
        games: game.getGames()
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
                    this.state.games.map(game => 
                    <div className='game' key={game.name}>
                        <a href={game.link}>
                        <div className='name'>
                            {game.name} 
                            <img src={game.img} width="100px" className='gameimg'/>
                            <div className='date'>Finshed {game.date}</div>
                            <div className='lag'>Languages: {game.lag}</div>
                        </div>
                        <div className='descript'>{game.description} </div>
                        </a>
                    </div>)
                }
            </React.Fragment>
        );
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
    }
    static getGames() {
        var games = []
        games.push(new game("Car Game", "https://johntheguy.tk/Car%20Game/", cargame, "2022", "HTML, CSS, JavaScript", "Car simulation game with skidding and crashing."));
        games.push(new game("Minesweeper", "https://johntheguy.tk/minesweeper/", minesweeper, "2022", "HTML, CSS, JavaScript", "Minesweeper game that uses the JavaScript localStorage Property to store high scores and other information."));
        games.push(new game("Elevator Game", "https://johntheguy.tk/elevator%20game/", elevatorgame, "2020", "HTML, CSS, JavaScript", "blach"));
        games.push(new game("Chess", "https://johntheguy.tk/Chess2/", chess, "2021", "JavaScript", "blach"));
        games.push(new game("Checkers", "https://johntheguy.tk/checkers/", checkers, "2022", "JavaScript", "blach"));
        games.push(new game("Crossy road", "https://johntheguy.tk/Crossey%20Road/don't%20get%20hit.html", crosseyroad, "2018", "HTML, CSS, JavaScript", "blach"));
        games.push(new game("Deal or no deal", "https://johntheguy.tk/Deal%20or%20No%20deal/dealono.html", dealorno, "2018", "HTML, CSS, JavaScript", "blach"));
        games.push(new game("Farm Game", "https://johntheguy.tk/Farm%20game/tractorGame.html", farmgame, "2020", "HTML, CSS, JavaScript", "blach"));
        games.push(new game("Flappy Bird", "https://johntheguy.tk/flappy%20bird/fb.html", flappybird, "2021", "HTML, CSS, JavaScript", "blach"));
        games.push(new game("Math Game", "https://johntheguy.tk/Math%20game/math.html", Mathgame, "2017", "HTML, CSS, JavaScript", "blach"));
        games.push(new game("Laser Platformer", "https://johntheguy.tk/Particle/", laserplatfom, "2022", "JavaScript", "blach"));
        games.push(new game("Pong", "https://johntheguy.tk/pong/pong.html", pong, "2021", "JavaScript", "Pong game"));
        games.push(new game("Projectile motion", "https://johntheguy.tk/physics/", projectilesimulation, "2022", "HTML, CSS, JavaScript", "Projectile motion simulation"));
        games.push(new game("Python Webscraper", "https://john.johntheguy.tk/", null, "2022", "HTML, Python + Flask", "Webscraper that gets the information that I usually have to go to different websites to see."));
        games.push(new game("Drone website", "https://cameraonabigstick.tk/", jamesws, "2022", "HTML, CSS, JavaScript", "Website that I made form my brothers drone business, that I host on my server."));
        games.push(new game("Youtwitface", "https://youtwitface.tk/", ytf, "2022", "HTML, CSS, JavaScript, PHP, SQL", "Social media site that I made that I host on my server"));
        games.push(new game("sdfsd", "https://youtwitface.tk/", ytf, "2022", "HTML, CSS, JavaScript, PHP, SQL", "Social media site that I made that I host on my server"));
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