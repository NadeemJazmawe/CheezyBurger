import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
import logo from "../../images/logo.png"
import {BiMenu} from "react-icons/bi"

export default class navBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showLinks : false
        }
    }

    setshowLinks = () =>{
        this.setState({
            showLinks: !this.state.showLinks
        })
    }

    render() {
        return (
            <div className="navBar">
                <div className="leftSide">
                    <Link className="logo" to="/">
                        <img src={logo} />
                    </Link>
                </div>
                
                <div className="rightSide">
                    <div className="links" id={this.state.showLinks ? "hidden" : ""}>
                        <Link to="/">ראשי</Link>
                        <Link to= "/menu">תפריט</Link>
                        <Link to= "/contact">צור קשר</Link>
                        {/* <Link to= "/contact">פידפאק</Link>
                        <Link to= "/contact">תמונות</Link> */}
                    </div>
                    <button onClick= {this.setshowLinks}>
                        <BiMenu />
                    </button>
                </div>

            </div>
        )
    }
}
