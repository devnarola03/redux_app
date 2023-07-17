import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const amount = useSelector(state => state.amount)
    return (
        <nav className="navbar navbar-expand-lg  bg-transparent shadow ">
            <div className="container-fluid">
                <a className="navbar-brand text-dark fw-bold" href="/">BANKU</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-dark" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="/about">About</a>
                        </li>

                    </ul>
                    <button disabled className="btn border border-dark">Your Balance : {amount }</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
