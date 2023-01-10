import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import GamesApps from './gamesApps';
import Nav from '../componets/nav';

class Page extends Component {
    state = { 
        page: 2,
    } 
    render() { 
        if(this.state.page == 0) {
            return (
                <React.Fragment>
                    {Home()}
                </React.Fragment>
            );
        }
        else if(this.state.page == 1) {
            return (
                <React.Fragment>
                    {About()}
                </React.Fragment>
            );
        }
        else {
            return (
                <React.Fragment>
                    {GamesApps()}
                </React.Fragment>
            );
        }
    }

}
 
export default Page;



