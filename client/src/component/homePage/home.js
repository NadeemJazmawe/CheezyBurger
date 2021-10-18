import React, { Component } from 'react'
import './home.css'

import img1 from '../../images/frontImage.jpg'
import Contact from '../contact/contact.js'

export default class home extends Component {
    render() {
        return (
            <div className="homePage">
                <div className="frontImage">
                    <img src={img1} alt=""/>
                </div>

                <Contact />

                <div className="firstNote">
                    
                </div>
            </div>
        )
    }
}
