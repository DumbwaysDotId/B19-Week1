import List from './List';
import React, {Component} from 'react';

class ListData extends Component{
    render(){
        return(
            <div>
                <List Data="SEIGA" />
                <List Data="ILYAS" />
                <List Data="AMANUDIN" />
                <List Data="ARDIAN" />
                <List Data="RYDWAN" />
            </div>
        )
    }
}

export default ListData