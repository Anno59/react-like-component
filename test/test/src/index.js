import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/**
 * #1
 * */
// function renderContent (content) {
//     class App extends Component {
//         render() {
//             return (
//                 <h1>{content}</h1>
//             );
//         }
//     }
//     ReactDOM.render(<App />, document.getElementById('root'))
// }
// renderContent('test');

/**
* #2
* */
// function getNotificationsCount(count){
//     class Notification extends Component{
//         render(){
//             const haveMsg = <span>有{count}条未读消息</span>;
//             const NoMsg = <span>没有未读消息</span>;
//             return(
//                 <span>{count ? haveMsg : NoMsg}</span>
//             )
//         }
//     }
//     ReactDOM.render(<Notification/>,document.querySelector('#root'))
// }
// getNotificationsCount(10);


/**
 * #3
 * */
// const title = <h1 className="title">ScriptOJ</h1>;
// const page = <div className="content">{title}</div>;
// ReactDOM.render(page,document.querySelector('#root'));

/**
 * #4
 * */
// class House extends Component {
//     render(){
//         return(
//             <div className="house">house
//             <Room/>
//             </div>
//         )
//     }
// }
//
// class Room extends Component {
//     render(){
//         return(
//             <div className="room">room</div>
//         )
//     }
// }
//
// class Bathroom extends Component {
//     render(){
//         return(
//             <div className="bathroom">bathroom</div>
//         )
//     }
// }
//
// class Man extends Component {
//     render(){
//         return(
//             <div className="man">man</div>
//         )
//     }
// }
//
// class Dog extends Component {
//     render(){
//         return(
//             <div className="dog">dog</div>
//         )
//     }
// }
//
// ReactDOM.render(<House/>,document.querySelector('#root'));

/**
 * #5
 * */
// class Dog extends Component {
//     bark () {
//         console.log('bark')
//     }
//
//     run () {
//         console.log('run')
//     }
//
//     action (){
//         console.log(this);
//         this.bark();
//         this.run();
//     }
//
//     render () {
//         return (<div onClick={this.action.bind(this)}>DOG</div>)
//     }
// }
//
// ReactDOM.render(<Dog/>,document.querySelector('#root'));

/**
 *  #6
 * */
class Dog extends Component {
    constructor () {
        super()
        /* TODO */
        this.state = {
            'isBarking' : false,
            'isRunning' : false,
        }
    }

    bark () {
        console.log('bark');
        this.state.isBarking = !this.state.isBarking;
        this.setState(this.state)
    }

    run () {
        console.log('run');
        this.state.isRunning = !this.state.isRunning;
        this.setState(this.state)
    }

    _touch(){
        this.bark();
        this.run();
        setTimeout(()=>{
            this.bark();
            this.run();
        },50)
    }

    render () {
        return (<div onClick={this._touch.bind(this)}>DOG</div>)
    }
}

ReactDOM.render(<Dog/>,document.querySelector('#root'));

registerServiceWorker();
