import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

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
// class Dog extends Component {
//     constructor () {
//         super()
//         /* TODO */
//         this.state = {
//             'isBarking' : false,
//             'isRunning' : false,
//         }
//     }
//
//     bark () {
//         console.log('bark');
//         this.state.isBarking = !this.state.isBarking;
//         this.setState(this.state)
//     }
//
//     run () {
//         console.log('run');
//         this.state.isRunning = !this.state.isRunning;
//         this.setState(this.state)
//     }
//
//     _touch(){
//         this.bark();
//         this.run();
//         setTimeout(()=>{
//             this.bark();
//             this.run();
//         },50)
//     }
//
//     render () {
//         return (<div onClick={this._touch.bind(this)}>DOG</div>)
//     }
//
// }
//
// ReactDOM.render(<Dog/>,document.querySelector('#root'));


/**
 *#7 打开和关闭电脑
 *
 *  完成两个组件，电脑 Computer 和显示器 Screen。
 *  电脑有个 status 状态表示电脑现在是开还是关的，status 为 on 为开，status 为 off 为关，默认状态为 off。电脑有个按钮，点击可以自由切换电脑的开关状态。
 *  显示器接受一个名为 showContent 的 props，显示器会把它内容显示出来。如果不传入 showContent，显示器显示 “无内容”。
 *  电脑包含显示器，当电脑状态为开的时候显示器显示“显示器亮了”，否则显示“显示器关了”。
 *
 * */

// class Computer extends Component {
//     constructor(){
//         super();
//         this.state = {
//             status : 'off'
//         }
//     }
//
//     switchState(){
//         let status,showContent;
//         if(this.state.status == 'off'){
//             status = 'on';
//             showContent = '开了'
//         }else{
//             status = 'off';
//             showContent = '关了'
//         }
//         this.setState({
//             status : status,
//             showContent : showContent
//         })
//     }
//
//     render () {
//         return (
//             <div>
//                 <button onClick={this.switchState.bind(this)}>开关</button>
//                 <Screen showContent={this.state.showContent}></Screen>
//             </div>
//         )
//     }
// }
//
// class Screen extends Component {
//     static defaultProps = {
//         showContent: '无内容'
//     }
//
//     render () {
//         const showContent = this.props.showContent;
//         return (
//             <div className='screen'>{showContent}</div>
//         )
//     }
// }
//
// ReactDOM.render(<Computer/>,document.querySelector('#root'));

/**
 *#8 打印章节标题
 *
 现在需要在页面上显示一本书的章节，章节内容存放到一个数组里面：

 const lessons = [
 { title: 'Lesson 1: title', description: 'Lesson 1: description' },
 { title: 'Lesson 2: title', description: 'Lesson 2: description' },
 { title: 'Lesson 3: title', description: 'Lesson 3: description' },
 { title: 'Lesson 4: title', description: 'Lesson 4: description' }
 ...
 ]
 现在需要你构建两个组件。一个组件为 Lesson 组件，渲染特定章节的内容。可以接受一个名为 lesson 的 props，并且把章节以下面的格式显示出来：

 <h1>Lesson 1: title</h1>
 <p>Lesson 1: description</p>
 点击每个章节的时候，需要把章节在列表中的下标和它的标题打印（console.log）出来，例如第一个章节打印： 0 - Lesson 1: title，第二个章节打印：1 - Lesson 2: title。

 另外一个组件为 LessonsList，接受一个名为 lessons 的 props，它会使用 Lesson 组件把章节列表渲染出来。
 * */

// class Lesson extends Component {
//     /* TODO */
//     render(){
//         const {lesson,index} = this.props;
//         return(
//             <div>
//                 <h1 onClick={()=> console.log(`${index} - ${lesson.title}`)}>{lesson.title}</h1>
//                 <p>{lesson.description}</p>
//             </div>
//         )
//     }
// }
//
// class LessonsList extends Component {
//     static defaultProps = {
//         lessons : [
//             { title: 'Lesson 1: title', description: 'Lesson 1: description' },
//             { title: 'Lesson 2: title', description: 'Lesson 2: description' },
//             { title: 'Lesson 3: title', description: 'Lesson 3: description' },
//             { title: 'Lesson 4: title', description: 'Lesson 4: description' }
//         ]
//     }
//     /* TODO */
//     render(){
//         return(
//             this.props.lessons.map((lesson,i)=> <Lesson index={i} key={i} lesson={lesson}/>)
//         )
//     }
// }
//
// ReactDOM.render(<LessonsList/>,document.querySelector('#root'));


/**
 * #9 百分比换算器
 做一个百分比换算器，需要你完成三个组件：

 <Input />：封装了原生的<input />，可以输入任意数字

 <PercentageShower />：实时 显示 <Input /> 中的数字内容，但是需要把它转换成百分比，例如 <Input /> 输入的是 0.1，那么就要显示 10.00%，保留两位小数。

 <PercentageApp />：组合上述两个组件。
 * */
class Input extends Component {
    constructor(){
        super();
        this.state = {
            value : ''
        }
    }

    _handleChange(e){
        this.setState({
            value:e.target.value
        });
        this.props.content(e.target.value)
    }

    render () {
        return (
            <div>
                <input type='number'
                       onChange={this._handleChange.bind(this)}
                       value={this.state.value}
                />
            </div>
        )
    }
}

class PercentageShower extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         content: ''
    //     }
    // }

    // handleInputValue(){
    //     let content = (this.props.content * 100) + '%';
    //     this.setState({
    //         content : content
    //     })
    // }
    render () {
        // this.handleInputValue();
        return (
            <div>{this.props.content}</div>
        )
    }
}

class PercentageApp extends Component {
    constructor(){
        super();
        this.state = {
            content: ''
        }
    }

    getInputValue(value) {
        let content = value;
        content = (content * 100).toFixed(2)+'%';
        this.setState({
            content : content
        })
    }

    render () {
        return (
            <div>
                <Input content={this.getInputValue.bind(this)}/>
                <PercentageShower content={this.state.content}/>
            </div>
        )
    }
}

ReactDOM.render(<PercentageApp/>,document.querySelector('#root'));

// registerServiceWorker();
