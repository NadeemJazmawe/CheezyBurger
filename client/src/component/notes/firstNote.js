import React from 'react'
import './firstNote.css'

import img1 from '../../images/image00002.jpeg'


export default function firstNote() {
    return (
        <div className="firstNoteBody" >
            
            <div className="wraper">
                <div className="container">
                    
                    <div className="box b">
                    <div className="asd">
                            <div className="title">
                                <b>בואו לחגוג איתנו</b>
                            </div>
                        </div>

                        <div className="body">
                            <p>מזמנים אותכם לחגוג איתנו<br />
                                אוירה נעימה ושמחה <br />
                                תפריט עשיר<br />
                                אירועים משפחתיים / עיסקיים</p>
                        </div>
                    </div>
                    
                    <div className="box a">
                        <img src={img1} alt=""/>
                    </div>


                </div>
            </div>
            
        </div>
    )
}
