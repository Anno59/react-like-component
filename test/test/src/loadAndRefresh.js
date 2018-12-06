import {Component} from 'React';

const loadAndRefresh = (url) => (OldComponent) => {
        class NewComponent extends Component{
            constructor(){
                super();

            }
            render(){
                const state = {
                    content : '',
                    refresh : ''
                };
                return (
                <OldComponent content={state.content} refresh={state.refresh} />
                )
            }
        }
        return NewComponent
    }
};

export default loadAndRefresh;