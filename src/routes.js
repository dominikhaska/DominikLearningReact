import React from 'react';
import {
    Route
} from 'react-router';

import {BrowserRouter} from 'react-router-dom'

import MyComponent from './MyComponent';

// Exports a "<Router>" component to be rendered.
export default (
    <BrowserRouter>
        <Route path="/" component={MyComponent}/>
    </BrowserRouter>
);
