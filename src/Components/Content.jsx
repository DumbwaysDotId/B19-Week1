import React, {Component} from 'react';
import "../App.css";

// class Content extends Component{

//     getBatch(){
//         return 15+4;
//     }

//     clickMe() {
//         window.alert("Hallo Batch 19 With Class")
//     }

//     render(){
//         const companyName = "Dumbways.id";
//         return(
//             <div className="App-content">
//                 <p>This Is Content and Wellcome {this.getBatch()} Bootcamp {companyName}</p>

//                 <button onClick={this.clickMe}>Hit Me</button>
//             </div>
//         )
//     }
// }


function Content(){

    function getBatch(){
        return 16+3;
    }

    function clickMe(){
        window.alert("Hello Batch 19 With Function");
    }

    const companyName = "DumbWays.id";

    return(
        <div className="App-content">
            <p>This Is Content and Wellcome {getBatch()} Bootcamp {companyName}</p>

            <button onClick={clickMe}>Hit Me</button>
        </div>
    )
}

export default Content;