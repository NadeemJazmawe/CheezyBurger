import React from 'react'
import './socialMedia.css'
import {Link} from 'react-router-dom'

import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai'

export default function socialMedia() {
    return (
        <div className="socialMediaPage">
            
            <div className="packground">
                <div className="image">
                    <div className="message">
                        חיפשו אותנו ב-
                        <Link to={{ pathname: "https://www.facebook.com/profile.php?id=100020901374371" }} target="_blank">
                            <AiFillFacebook color="#e9c147"/>
                        </Link>
                        <Link to={{pathname:"https://www.facebook.com/profile.php?id=100020901374371"}} target="_blank" >
                            <AiOutlineInstagram color="#e9c147"/>
                        </Link>
                    </div>

                    <div className="photos">
                        
                    </div>
                </div>
            </div>

           
        
        </div>
    )
}
