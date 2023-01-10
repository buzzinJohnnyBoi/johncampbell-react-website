import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

class Nav extends Component {
    state = {
        links: [
            {
                name: "Home", 
                link: "/"
            }, 
            {
                name: "About", 
                link: "/About"
            }, 
            {
                name: "Games/Apps", 
                link: "/gamesApps"
            },
        ],
        top: true,
        paddTop: "30px",
        mobileMode: this.ismobile(),
        menuOpen: false,
        navMobileLeft: "-300px",
    }
    ismobile() {
        if(window.innerWidth < 700) {
            return true;
        }
        else if(window.innerWidth > 700) {
            return false;
        }
    }
    render() { 
        if(this.state.mobileMode) {
            return (
                <React.Fragment>
                    <div className='cover' onClick={this.changeMenu}></div>
                    <div className='navMobile' style={{left: this.state.navMobileLeft}}>{this.renderLinks()}</div>
                    <header style={{paddingTop: this.state.paddTop, paddingBottom: this.state.paddTop,}}><ul>{this.renderMenubtn()}</ul></header>
                </React.Fragment>
            );
        }
        else {
            return (
                <React.Fragment>
                    <header style={{paddingTop: this.state.paddTop, paddingBottom: this.state.paddTop,}}>{this.renderLinks()}</header>
                </React.Fragment>
            );
        }
    }
    renderLinks() {
        return (
            <ul>
                {this.state.links.map(link => <li key={link.name}><Link to={link.link} key={link.name} onClick={this.changeMenu}>{link.name}</Link></li>)}
            </ul>
        );
    }
    renderMenubtn = () => {
        if(this.state.menuOpen) {
            return (
	            <div className='menubtn' onClick={this.changeMenu}>
	                <div className='lineClose' id='mbtnl1'></div>
	                <div className='lineClose' id='mbtnl2'></div>
	            </div>
	        );
        }
        else {
	        return (
	            <div className='menubtn' onClick={this.changeMenu}>
	                <div className='line'></div>
	                <div className='line'></div>
	                <div className='line'></div>
	            </div>
	        );
        }
    }
    changeMenu = () => {
        if(this.state.mobileMode) {
            if(this.state.menuOpen) {
                this.setState({menuOpen: false});
                this.setState({navMobileLeft: "-300px"});
                document.querySelector(".cover").style.display = "none";
            }
            else {
                this.setState({navMobileLeft: "0px"});
                this.setState({menuOpen: true});
                document.querySelector(".cover").style.display = "block";
            }
        }
        else {
            this.setState({menuOpen: false});
            this.setState({navMobileLeft: "-300px"});
            document.querySelector(".cover").style.display = "none";
        }
    }
    componentDidMount = () => {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }
    handleScroll = (event) => {
        let scrollTop = document.documentElement.scrollTop;
        if(scrollTop == 0 && !this.state.top) {
            this.setState({ top: true });
            this.foldDown();
        }
        else if(this.state.top && scrollTop != 0) {
            this.setState({ top: false });
            this.foldUp();
        }
    }
    handleResize = (event) => {
        if(window.innerWidth < 700 && !this.state.mobileMode) {
            this.setState({mobileMode: true});
        }
        else if(window.innerWidth > 700 && this.state.mobileMode) {
            this.setState({mobileMode: false});
        }
    }
    foldUp = () => {
        this.setState({paddTop: "10px"});
    }
    foldDown = () => {
        this.setState({paddTop: "30px"});
    }
}
 
// // addEventListener('scroll', Nav.onscroll);



export default Nav;
