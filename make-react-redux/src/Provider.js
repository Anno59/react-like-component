import React, {Component} from 'react'
import PropTypes from 'prop-types'

export const Provider = (WrappedWithComponent, store) => {
    return class extends Component{
        static childContextTypes = {
            store : PropTypes.object
        };

        getChildContext (){
            return {store}
        }

        render (){
            return(
                <WrappedWithComponent/>
            )
        }
    }
};