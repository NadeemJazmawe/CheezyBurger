import React, { Component } from 'react'
import './menu.css'

import img1 from '../../images/menu.png'
import img2 from '../../images/mobileMenu.png'

export default class menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="menuPicWeb">
                    <img src={img1} alt=""/>
                </div>

                
                <div className="menuPicMobile">
                    <img src={img2} alt=""/>
                </div>
            </div>
        )
    }
}
