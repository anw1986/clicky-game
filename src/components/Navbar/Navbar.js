import React from 'react'

function Navbar(props) {
    return (
      
        <nav className="navbar navbar-light shadow-lg sticky-top d-flex justify-content-around">
            <a href="/">
                <span className="navbar-brand mb-0 h1">Clicky Game</span>
            </a>
            <h2>{props.msg}</h2>
            <ul className=" nav list-group list-group-horizontal ">
                <li className="nav-item border-right pr-3">Score: {props.score}</li>
                <li className="nav-item border-left pl-3">Top Score: {props.highScore}</li>
            </ul>
        </nav>

    )
}

export default Navbar
