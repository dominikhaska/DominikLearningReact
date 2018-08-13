import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {render as renderJSX} from 'react-dom';


import MyFeature from "./MyFeature";
import UserListContainer from "./UserListContainer";
import MyList from "./MyList";



import MyComponent from './MyComponent';
import MyUser from './MyUser';

// The "myUsers" property is expecting
// an array of "MyUser" instances.
const users = [

    new MyUser('First1', 'Last1'),
    new MyUser('First2', 'Last2'),
    new MyUser('First3', 'Last3'),
];

renderJSX((
        <section>
            { /* Works as expected. */ }
            <MyComponent
                myDate={new Date()}
                myCount={0}
                myUsers={users}
            />

            { /* All property values fail to validate. */ }
            <MyComponent
                myDate="6/9/2016"
                myCount={false}
                myUsers={[1, 2, 3]}
            />
        </section>
    ),
    document.getElementById('app')
);



class App extends Component {


    render() {
        {/*<MyList/>*/}
        return (
            <div>
            </div>

        );
    }

    render3() {
        return (
            <UserListContainer/>
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
