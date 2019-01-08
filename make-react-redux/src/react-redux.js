/**
 * Created by on 2019.01.06.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';

export const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
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
          let stateProps = mapStateToProps
              ? mapStateToProps(store.getState())
              : {};
          let dispatchProps = mapDispatchToProps
              ? mapDispatchToProps(store.dispatch)
              : {};
          this.setState({
              allProps : {
                  ...stateProps,
                  ...dispatchProps,
                  ...this.props,
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
