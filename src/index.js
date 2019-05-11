import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Contact from './pages/Contact';
import Post from './components/Post';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={App} />
            <Route exact path='/Contact' component={Contact} />
            <Route exact path='/posts/:id' component={Post} />
        </div>
    </BrowserRouter>,
    document.getElementById('root')
);
