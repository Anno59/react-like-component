/**
 * Created by on 2019.01.05.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class Header extends Component {

    render () {
        return (
            <h1 style={{color:this.props.themeColor}}>React.js 小书</h1>
        )
    }
}

export default Header