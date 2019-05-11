import React, { PureComponent } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Home from '../pages/Home';
import Contact from '../pages/Contact';

class Links extends PureComponent {
    render() {
        return (
            <Router>
                <div className="container">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>

                    <Route exact path="/" component={Home} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
        );
    }
}

export default Links;