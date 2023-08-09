import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import Service from './Service';

const App = () => {
    return (
        <>
        <div>
                
            <Router>
                <Navbar/>
            <Routes>
            <Route exact path = "/" element={<Home/>}/>
            <Route exact path = "/about" element={<About/>}/>
            <Route exact path = "/service" element={<Service/>}/>
            <Route exact path = "/contact" element={<Contact/>}/>
            </Routes>
            </Router>
            <Footer/>
        </div>
        </>
    )

}

export default App;