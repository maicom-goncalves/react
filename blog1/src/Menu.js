import React, { Component } from 'react';
import facebook from '../src/img/facebook.jpg';
import youtube from '../src/img/youtube.jpg';
import twitter from '../src/img/twitter.jpeg';
import google from '../src/img/google.jpeg';

class Menu extends Component {
    render() {
        return (
            <div>
                
                    <div id="imagens">
                    <img src={facebook}/>
                    <img src={youtube} />
                    <img src={twitter} />
                    <img src={google}  />
                    </div>
                
            </div>
        );
    }

}
export default Menu;