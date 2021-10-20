import React, { Component } from 'react'
import './menu.css'

import img1 from '../../images/menu.png'


export default class menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="menuPic">
                    <img src={img1} alt=""/>
                </div>
            </div>
        )
    }
}
