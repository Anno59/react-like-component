/**
 * Created by 2019.01.05.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Content from '../components/Content'
import ThemeSwitch from '../components/ThemeSwitch'

const mapStateToProps = (state) => {
    return {
        themeColor : state.themeColor
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        switchColor : (color) => {
            dispatch({
                type : 'CHANGE_COLOR',
                themeColor : color,
            })
        }
    }
};

const content = connect(mapStateToProps)(Content);
const themeSwitch = connect(mapStateToProps, mapDispatchToProps)(ThemeSwitch);

export {
    content,
    themeSwitch
}