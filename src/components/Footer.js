import React from 'react';
import '../App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';;

class Footer extends React.Component {
    render() {
        return (
            <div className="App">
            <div>FOOTER</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        );
    }
}
export default Footer;