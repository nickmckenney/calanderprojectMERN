import React, { Component } from "react";
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.css';
import Monthnav from "../Monthnav/Monthnav";
import Accordion from "../Accordion/Accordion";

class Navbar extends Component {
    constructor(props) {
        super(props)
    }

    linkHandler(e) {
        e.preventDefault();
    }

    render() {
        return (
            <nav class="navbar navbar-light bg-light">
                <Accordion />

                <Monthnav />

                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit" onClick={ e => this.linkHandler(e) }>Search</button>
                </form>
            </nav>
        )
    }
};

export default Navbar;