import React, {Component} from 'react'
import Header from './Header'
import Footer from './Footer'

class Layout extends Component {
    state = {
        isAuth: false
    }

    _handleAlert = () => {
        alert('hello')
    }

    render() {

        return (
            <React.Fragment>
                <div id="layout-wrapper">
                    <Header/>
                    <div className="main-content">
                        {this.props.children}
                    </div>
                    <Footer/>
                </div>
            </React.Fragment>
        )
    }
}

export default Layout