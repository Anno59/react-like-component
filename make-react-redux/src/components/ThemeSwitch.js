/**
 * Created by on 2019.01.05.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Content from '../containers/Content'

class ThemeSwitch extends Component {
    // static contextTypes = {
    //     store : PropTypes.object
    // };

    constructor (){
        super();
        this.state = {
            themeColor : ''
        }
    }

    handleSwitchColor(color) {
        this.props.switchColor(color);
    }

    render () {
        return (
            <div>
                <button style={{color:this.props.themeColor}}
                onClick={this.handleSwitchColor.bind(this,'red')}
                >Red</button>
                <button style={{color:this.props.themeColor}}
                onClick={this.handleSwitchColor.bind(this,'blue')}
                >Blue</button>
            </div>
        )
    }
}

export default ThemeSwitch