import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import MyFeature from "./MyFeature";
import UserListContainer from "./UserListContainer";


class App extends Component {


    render() {
        return (
            <UserListContainer />
        );
    }

    render2() {
        console.log("this should stop here");

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React DHA </h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }

}

export default App;
