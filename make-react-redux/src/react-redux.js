/**
 * Created by on 2019.01.06.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export const connect = (mapStateToProps) => (WrappedComponent) => {
  return class extends Component{
      static contextTypes = {
          store : PropTypes.object
      };

      constructor(){
          super();
          this.state = {
              allProps:{}
          }
      }

      componentWillMount (){
          const {store} = this.context;
          this._updateProps();
          store.subscribe(() => this._updateProps())
      }

      _updateProps (){
          const {store} = this.context;
          const stateProps = mapStateToProps(store.getState());
          this.setState({
              allProps : {
                  ...stateProps,
                  ...this.props
              }
          });
      }

      render(){
          // const {store} = this.context;
          // const stateProps  = mapStateToProps(store.getState());
          return <WrappedComponent {...this.state.allProps}/>
      }
  }
};
