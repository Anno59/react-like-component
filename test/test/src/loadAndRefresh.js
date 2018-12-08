import React, {Component} from 'React';

export default (url) => (WrappedComponent) => {
    return class extends Component{
        render(){
            const props = {
                ...this.props,
                content:'',
                refresh:'',
            };

            return(
                <WrappedComponent {...props}/>
            )
        }
    }
}