import React from 'react'
import './secondNote.css'

import img1 from '../../images/kai-pilger-tL92LY152Sk-unsplash.jpg'

export default function secondNote() {
    return (
        <div className="secondNoteBody">
       
            <div className="wraper"> 
                <div className="container">

                    <div className="box b">
                        <div className="asd">
                            <div className="title">
                                <b>משלוחים עד הבית</b>
                            </div>
                        </div>

                        <div className="body">
                            <p>אפשרות להזמין עד הבית!!<br />
                                יש לנו שירות משלוחים הדואג לקבלת<br />
                                האוכל בצורה הטובה ביותר.<br />
                                 רק לבחור המנות האהובות ולהזמין</p>
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
