import React, {Component} from 'react';
import "../App.css";

class Content extends Component{

    getBatch(){
        return 15+4;
    }

    render(){
        const companyName = "Dumbways.id";
        return(
            <div className="App-content">
                <p>This Is Content and Wellcome {this.getBatch()} Bootcamp {companyName}</p>
            </div>
        )
    }
}


// function Content(){
//     return(
//         <div className="App-content">
//             <p>This Is Content with Functional</p>
//         </div>
//     )
// }

export default Content;