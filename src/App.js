import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header'
import Footer from './components/Footer'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}
export default App;
