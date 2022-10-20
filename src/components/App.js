import './App.css';

import axios from "axios";
import React from "react";
import TableList from "./TableList";

export default class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

    }

    componentDidMount() {
        axios.get(`http://localhost:8080/api/get_data`)
            .then(res => {
                const tables = res.data;
                this.setState({data: tables})
            })

    }


render() {
    return (
        <div className="App">
            <TableList data = {this.state.data}/>
        </div>
    );
}

}


