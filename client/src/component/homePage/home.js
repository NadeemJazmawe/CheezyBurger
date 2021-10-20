// import React, { Component } from 'react'
// import { browserHistory } from "react-router"
import React from 'react'
import { useHistory } from "react-router-dom";
import './home.css'

import img1 from '../../images/frontImage.jpg'
import Contact from '../contact/contact.js'
import FirstNote from '../notes/firstNote.js'
import SecondNote from '../notes/secondNote.js'


function Home() {

    const history = useHistory();

    function handleClick() {
      history.push("/menu");
    }

    return (
        <div className="homePage">
                <div className="frontImage">
                    <img src={img1} alt=""/>
                </div>

                <Contact />

                <FirstNote />

                <SecondNote />
                {/* <Menu /> */}

                <div className="menuButton">
                    <button type="button" onClick={handleClick}>
                        לתפריט
                    </button>
                </div>
            
            </div>
    )
}

export default Home;



// export default class home extends Component {

//     onNavigateMenu(){
//         browserHistory.push("/menu");
//     }

//     render() {
//         return (
//             <div className="homePage">
//                 <div className="frontImage">
//                     <img src={img1} alt=""/>
//                 </div>

//                 <Contact />

//                 <FirstNote />

//                 <SecondNote />
//                 {/* <Menu /> */}

//                 <div className="menuButton">
//                     <button type="button" onClick={this.onNavigateMenu}>
//                         לתפריט
//                     </button>
//                 </div>
            
//             </div>
//         )
//     }
// }
