import './App.css';

import axios from "axios";
import React from "react";
import TableList from "./TableList";
import SubmitComponent from "./SubmitComponent";


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.setState = this.setState.bind(this);
        this.state = {
            data: []
        }
    }

    componentDidMount() {

        axios.get(`http://localhost:8080/api/get_data`)
            .then(res => {
                const tables = res.data;
                this.setState({data: tables})
                console.log(tables)
            })
    }


    submitButton = () => {
        return (axios.post('http://localhost:8080/api/post_data',
            this.state.data
        ).then(console.log(this.state.data))
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            }))
    }


    render() {
        return (
            <div className="App">
                <TableList data={this.state.data} setState={this.setState}/>
                <SubmitComponent submit={this.submitButton}/>
            </div>
        );
    }

}


