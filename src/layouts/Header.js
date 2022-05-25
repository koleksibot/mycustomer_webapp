import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

class Header extends Component {
    state = {

    }

    render() {

        return (
            <React.Fragment>
                <header id="page-topbar">
                    <div className="navbar-header">
                        <div className="d-flex">
                            <div className="navbar-brand-box">
                                <Link to="/" className="logo logo-dark">
                                    <span className="logo-sm">
                                        <img src={logo} alt="" height="22" />
                                    </span>
                                </Link>
                            </div>

                        </div>

                        <div className="d-flex">

                        </div>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header