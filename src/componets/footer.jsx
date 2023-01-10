import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

class Footer extends Component {
    render() { 
        return (
            <div className='footer'>
                <p>Web Development by John Campbell</p>
                <div className='line'></div>
                <p>Web Hosting by John Campbell</p>
            </div>
        );
    }
}
 
export default Footer;