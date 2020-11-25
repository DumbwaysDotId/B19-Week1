import React, {Component} from 'react';
import '../App.css';

//Component Import
import Header from '../Components/Header';
import Content from '../Components/Content';
import ListData from '../Components/ListData';
import Inc from '../Components/Inc';
import Todo from './Todo';
import Css from './Css';

// class App extends Component{
//   render(){
//     return(
//       <div className="App">
//         <Header/>
//         <Content/>
//       </div>
//     )
//   }
// }


function PrivatePage(){
  return(
    <div className="App">
      <Header judul="Header With Props"/>
      <Content />
      <ListData />
      <Inc />
      <Todo />
      <Css />
    </div>
  )
}

export default PrivatePage;
