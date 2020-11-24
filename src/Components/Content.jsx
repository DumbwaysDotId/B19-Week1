import React, {Component} from 'react';
import "../App.css";

// class Content extends Component{

//     getBatch(){
//         return 15+4;
//     }

//     render(){
//         const companyName = "Dumbways.id";
//         return(
//             <div className="App-content">
//                 <p>This Is Content and Wellcome {this.getBatch()} Bootcamp {companyName}</p>
//             </div>
//         )
//     }
// }


function Content(){

    function getBatch(){
        return 16+3;
    }

    const companyName = "DumbWays.id";

    return(
        <div className="App-content">
            <p>This Is Content and Wellcome {getBatch()} Bootcamp {companyName}</p>
        </div>
    )
}

export default Content;