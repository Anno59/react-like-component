/**
 * Created by on 2019.01.05.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = (state) => {
    return {
        themeColor : state.themeColor
    }
};

export default connect(mapStateToProps)(Header);