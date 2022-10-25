import './App.css';

import axios from "axios";
import React from "react";
import TableList from "./tabele-list/TableList";
import SubmitComponent from "./submit-component/SubmitComponent";
import AppInfo from "./app-info/AppInfo";


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
        )
            .then(function (response) {
                console.log(response);
                alert("success")
            })
            .catch(function (error) {
                console.log(error);
                alert(error)
            }))
    }


    render() {
        return (
            <div className="App">
                <AppInfo tableCounter={this.state.data.length} />
                <TableList data={this.state.data} setState={this.setState}/>
                <SubmitComponent submit={this.submitButton}/>
            </div>
        );
    }

}


