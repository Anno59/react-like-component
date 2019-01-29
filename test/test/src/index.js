import React , { Component,PropTypes } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

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

// class Input extends Component {
//     constructor(){
//         super();
//         this.state = {
//             value : ''
//         }
//     }
//
//     _handleChange(e){
//         this.setState({
//             value:e.target.value
//         });
//         this.props.content(e.target.value)
//     }
//
//     render () {
//         return (
//             <div>
//                 <input type='number'
//                        onChange={this._handleChange.bind(this)}
//                        value={this.state.value}
//                 />
//             </div>
//         )
//     }
// }
//
// class PercentageShower extends Component {
//     // constructor(){
//     //     super();
//     //     this.state = {
//     //         content: ''
//     //     }
//     // }
//
//     // handleInputValue(){
//     //     let content = (this.props.content * 100) + '%';
//     //     this.setState({
//     //         content : content
//     //     })
//     // }
//     render () {
//         // this.handleInputValue();
//         return (
//             <div>{this.props.content}</div>
//         )
//     }
// }
//
// class PercentageApp extends Component {
//     constructor(){
//         super();
//         this.state = {
//             content: ''
//         }
//     }
//
//     getInputValue(value) {
//         let content = value;
//         content = (content * 100).toFixed(2)+'%';
//         this.setState({
//             content : content
//         })
//     }
//
//     render () {
//         return (
//             <div>
//                 <Input content={this.getInputValue.bind(this)}/>
//                 <PercentageShower content={this.state.content}/>
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(<PercentageApp/>,document.querySelector('#root'));

/**
* 时钟应用
* */

// class Clock extends Component{
//     constructor(){
//         super();
//         this.state = {
//             time : new Date()
//         }
//     }
//
//     componentWillMount(){
//         let time = +this.state.time;
//         this.state.setTimeInterval = setInterval(() => {
//             this.setState({
//                 time : new Date(time += 1000)
//             })
//         },1000);
//         // this.timer = setInterval(() => {
//         //     this.setState({ time: new Date() })
//         // }, 1000)
//     }
//
//     componentWillUnmount(){
//         clearInterval(this.state.setTimeInterval);
//     }
//
//     render(){
//         return(
//             <div>
//                 <h1>现在的时间是</h1>
//                 <p>{this.state.time.toLocaleTimeString()}</p>
//             </div>
//         )
//     }
// }
//
// class Index extends Component{
//     constructor(){
//         super();
//         this.state = {
//             showClock : true
//         }
//     }
//
//     handleClick(){
//         this.setState({
//             showClock: !this.state.showClock
//         })
//     }
//
//     render(){
//         return(
//             <div>
//                 {this.state.showClock ? <Clock/> : null}
//                 <button onClick={this.handleClick.bind(this)}>test</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Index/>,document.querySelector('#root'));

/**
 * react update
 * */

// class Index extends Component{
//     constructor(){
//         super();
//         this.state = {
//             focus : false
//         }
//     }
//
//     componentWillMount(){
//         this.setState({
//             focus : true
//         })
//     }
//
//     render(){
//         return(
//             <div>
//                 <input type="text" onFocus={()=>console.log(this.state.focus)}/>
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(<Index/>, document.querySelector('#root'));

/**
 * #11 获取文本的高度
 *
 完成 Post 组件，接受一个字符串的 content 作为 props，Post 会把它显示到自己的 <p> 元素内。

 并且，点击 <p> 元素的时候，会使用 console.log 把元素的高度打印出来。
 * */

// const Post = props => {
//     return (
//         <p ref={ p => {this.p = p} } onClick={ () => console.log(this.p.clientHeight) }>
//             {props.content}
//         </p>
//     )
// }

// class Post extends Component{
//     render () {
//         return (
//             <p onClick={() => {console.log(this.p.offsetHeight)}} ref={(p) =>　this.p = p}>
//                 {this.props.content}
//             </p>
//         )
//     }
// }
//
// class Index extends Component{
//     render (){
//         return (
//             <Post content="test"/>
//         )
//     }
// }
//
// ReactDOM.render(<Index/>,document.querySelector('#root'));

/**
 * #13 黑色边框的容器组件
 *
 实现一个组件 BlackBorderContainer，它会把作为它的嵌套结构的 每个直接子元素 都用一个黑色边框的 div 包裹起来。例如：
 <BlackBorderContainer>
 <div className='name'>My Name：Lucy</div>
 <p className='age'>
 My Age：<span>12</span>
 </p>
 </BlackBorderContainer>
 最后的 div.name 和 p.age 都具有一层黑色边框（1px solid #000000）外层结构。
 * */

// class BlackBorderContainer extends Component {
//     render(){
//         return(
//             this.props.children.map((ele,index)=>{
//                 return(
//                     <div key={index} className="border">
//                         {ele}
//                     </div>
//                 )
//             })
//         )
//     }
// }
//
// ReactDOM.render(
//     <BlackBorderContainer>
//         <div className='name'>My Name：Lucy</div>
//         <p className='age'>
//             My Age：<span>12</span>
//         </p>
//     </BlackBorderContainer>
//     ,document.querySelector('#root'));


/**
 *
 #12 覆盖默认样式

 完成一个函数 getDefaultStyledPost，这个函数接受一个表示样式的对象作为参数，返回一个组件只有 <p> 元素的组件：

 const Post = getDefaultStyledPost({ color: 'red' })
 <Post /> // <p>任意内容</p>，颜色为红色
 渲染出来的 <p> 元素要具有 getDefaultStyledPost 所接受对象所表示的样式。此外，返回的 Post 组件还要能够接受一个 style 对象作为 props，这个对象会和原来的样式进行合并显示：

 const Post = getDefaultStyledPost({ color: 'red' })
 <Post style={{ color: 'blue', fontSize: '13px' }} />
 <Post style={{ fontSize: '12px' }} />
 上面第一个 <Post /> 渲染结果为：颜色为蓝色，字体大小为 13px。
 上面第二个 <Post /> 渲染结果为：颜色为红色，字体大小为 12px。

 * */

// const getDefaultStyledPost = (defaultStyle) => {
    //(1
    // return (
    //     class Test extends Component{
    //         render(){
    //             const elementStyle = {...defaultStyle,...this.props.style};
    //             return(
    //                 <p style={elementStyle}>
    //                     something
    //                 </p>
    //             )
    //         }
    //     }
    // )
    //
    //(2
    // return props => <p style={{...defaultStyle,...this.props.style}}/>;
// };

/**
  #14 React.js 加载、刷新数据 - 高阶组件

  React.js 加载、刷新数据 这种加载数据、刷新数据的行为很常见，现在把这种逻辑抽离到高阶组件当中去。完成高阶组件 loadAndRefresh，它具有以下功能：

 class Post extends Component {
  render () {
    return (
      <div>
        <p>{this.props.content}</p>
        <button onClick={() => this.props.refresh()}>刷新</button>
      </div>
    )
  }
}

 Post = loadAndRefresh('/post')(Post)

 高阶组件 loadAndRefresh 接受一个 url 作为参数，然后返回一个接受组件作为参数的函数，这个新函数返回一个新的组件。新的组件渲染的时候会给传入的组件设置 content 和 refresh 作为 props。

 环境中已经定义好了一个 getData(url) 的返回 Promise 的函数，它会去服务器取一个字符串的文本，你需要通过 content 的 props 把它传给被包裹的组件。组件在第一次加载还有 refresh 的时候会去服务器取数据。

 另外，组件在加载数据的时候，content 显示 数据加载中...。而且，所有传给 loadAndRefresh 返回的组件的 props 要原封不动传给被包裹的组件。

 getData(url) 已经可以直接使用

 本站的环境都可以使用 async/await
 * */

// import React, {Component} from 'React';
//
// export default (url) => (WrappedComponent) => {
//     return class extends Component{
//         render(){
//             const props = {
//                 ...this.props,
//                 content:'',
//                 refresh:'',
//             };
//
//             return(
//                 <WrappedComponent {...props}/>
//             )
//         }
//     }
// }

//The Key
// const loadAndRefresh = (url) => (WrappedComponent) => {
//     return class extends Component {
//         componentWillMount () {
//             this._loadData()
//         }
//
//         async _loadData () {
//             this.setState({ content: '数据加载中...' })
//             const content = await getData(url)
//             this.setState({ content })
//         }
//         render () {
//             const props = {
//                 content: this.state.content,
//                 refresh: this._loadData.bind(this),
//                 ...this.props
//             }
//             return (
//                 <WrappedComponent {...props} />
//             )
//         }
//     }
// }

/**
 * React context
 * */

// class Index extends Component {
//     static childContextTypes = {
//         themeColor : ''
//     };
//
//     constructor(){
//         super();
//         this.state = {
//             themeColor : 'red'
//         }
//     }
//
//     getChildContext(){
//         return {
//             themeColor : this.state.themeColor
//         }
//     }
//
//     componentWillMount(){
//         this.setState({
//             themeColor: 'green'
//         })
//     }
//
//     render () {
//         return (
//             <div>
//                 <Header />
//                 <Main />
//             </div>
//         )
//     }
// }
//
// class Header extends Component {
//     render () {
//         return (
//             <div>
//                 <h2>This is header</h2>
//                 <Title />
//             </div>
//         )
//     }
// }
//
// class Main extends Component {
//     render () {
//         return (
//             <div>
//                 <h2>This is main</h2>
//                 <Content />
//             </div>
//         )
//     }
// }
//
// class Title extends Component {
//     static contextTypes = {
//         themeColor: ''
//     };
//
//
//     render () {
//         return (
//             <h1 style={{color:this.context.themeColor}}>React.js 小书标题</h1>
//         )
//     }
// }
//
// class Content extends Component {
//     render () {
//         return (
//             <div>
//                 <h2>React.js 小书内容</h2>
//             </div>
//         )
//     }
// }
//
// ReactDOM.render(
//     <Index />,
//     document.getElementById('root')
// );

/**
 * #15 高阶组件 + context
 *
 * 完成高阶组件 makeProvider，接受一个任意类型的数据和组件作为参数：

 Post = makeProvider({ name: 'Jerry' })(Post)
 Post 下的所有子组件都可以通过 this.context.data 获取到传给 makeProvider 的参数。如上面的 Post 及其子组件的内部可以通过 this.context.data.name 获取到 Jerry。
 * */

/*
const makeProvider = (data) => (WrapperComponent) => {
    return class extends Component{
        static childContextProps = {data};

        getChildContext(){
            return {data}
        }

        render(){
            return (
                <WrapperComponent {...this.props}/>
            )
        }
    }
};
export default makeProvider;
*/

/**
 * #16 实现 Users Reducer
 * 完成一个符合 Redux 要求的 Reducer usersReducer，它可以支持以下对一个存储用户信息的数组进行增、删、改的需求：
 * */

/**
 * 用户的数据包括三部分，姓名（username）、年龄（age）、性别（gender）
 */

/* 增加用户操作 */

// 修改用户数据的时候，可以进行部分地修改，而不是完全地替换。
//
// 注意，usersReducer 的 state 就是一个数组，你不需用把它包装到一个对象当中。

// let state = [];
//
// const usersReducer = (state, action) => {
//     switch(action.type){
//         case 'ADD_USER':
//             return [...state,action.user];
//         break;
//         case 'UPDATE_USER':
//             return [...state.map((user, index) => {
//                 if(index === action.index){
//                     return {...user, ...action.user}
//                 }
//             })];
//         break;
//         case 'DELETE_USER':
//             return [...state.slice(0, action.index), ...state.slice(action.index+1)];
//         break;
//         default:
//             return state
//     }
// };
//
// const dispatch = (action) => {
//     state = usersReducer(state, action);
//     console.log(JSON.stringify(state));
// };
//
// dispatch({
//     type: 'ADD_USER',
//     user: {
//         username: 'Lucy',
//         age: 12,
//         gender: 'female'
//     }
// })
//
//
// /* 通过 id 删除用户操作 */
//
// /* 修改用户操作 */
// dispatch({
//     type: 'UPDATE_USER',
//     index: 0,
//     user: {
//         username: 'Tomy',
//         age: 12,
//         gender: 'male'
//     }
// });
//
// dispatch({
//     type: 'DELETE_USER',
//     index: 0 // 删除特定下标用户
// })

/**
 #17 React-redux 实现用户列表的显示、增加、删除
 直接使用在 实现 Users Reducer 中实现的 userReducer。用 react-redux 完成 UserList、User 组件，可以对用户列表进行显示、增加、删除操作。

 你不需要实现 store 的生成和使用 Provider，只需要完成 connect 的过程和组件的实现。

 （留意 <input type="number" /> 的字符串和数字的转换问题）
 * */

let store = {};

const usersReducer = (state, action) => {
    switch(action.type){
        case 'ADD_USER':
            return [...state,action.user];
            break;
        case 'UPDATE_USER':
            return [...state.map((user, index) => {
                if(index === action.index){
                    return {...user, ...action.user}
                }
            })];
            break;
        case 'DELETE_USER':
            return [...state.slice(0, action.index), ...state.slice(action.index+1)];
            break;
        default:
            return state
    }
};

store = createStore(usersReducer);

/**
 * 环境中已经注入了 React-redux，你可以直接使用 connect，或者 ReactRedux.connect
 */

class User extends Component {
    render () {
        const { user,index } = this.props;
        console.log(this.props)
        return (
            <div>
                <div>Name: {user.username}</div>
                <div>Age: {user.age}</div>
                <div>Gender: {user.gender}</div>
                <button onClick={this.props.handleDelete} index={index}>删除</button>
            </div>
        )
    }
}

class UsersList extends Component {
    constructor(){
        super();
        this.state = {
            user:{
                username:'',
                age:'',
                gender:'',
            },
            userList : []
        }
    }

    handleAddEvent(){
        let username = this.username.value;
        let age = this.age.value;
        let male = this.male.checked;
        let gender = male ? 'male' : 'female';
        let userList = [
            ...this.state.userList,
            {
                username,
                age,
                gender,
            }
        ];

        this.setState({userList})
    }

    handleDeleteEvent(e){
        let deleteIndex = e.target.getAttribute('index');
        let userList = this.state.userList;
        console.log([...userList.slice(0,+deleteIndex),...userList.slice(+deleteIndex+1)])
        console.log(deleteIndex)
        this.setState({
            userList : [...userList.slice(0,+deleteIndex),...userList.slice(+deleteIndex+1)]
        })
    }

    render () {
        // User = connect(User, mapStateToProps);
        console.log(this.state.userList)
        return (
            <div>
                 {/*输入用户信息，点击“新增”按钮可以增加用户 */}
                <div className='add-user'>
                    <div>Username: <input type='text' ref={(input)=> this.username = input}/></div>
                    <div>Age: <input type='number' ref={(input)=> this.age = input} /></div>
                    <div>Gender:
                        <label>Male: <input type='radio' name='gender' value='male'  ref={(input)=> this.male = input}/></label>
                        <label>Female: <input type='radio' name='gender' value='female'  ref={(input)=> this.female = input}/></label>
                    </div>
                    <button onClick={this.handleAddEvent.bind(this)}>增加</button>
                </div>
                 {/*显示用户列表 */}
                <div className='users-list'>
                    {
                        this.state.userList.map((user, key) => {
                            let prop = {user, key, 'index' : key};
                            console.log(prop)
                            return <User {...prop} handleDelete={this.handleDeleteEvent.bind(this)}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

const connect = (WrappedComponent, mapStateToProps) => {
    return class extends Component{
        constructor(){
            super();
            this.state = {
                allProps : {}
            }
        }

        componentWillMount(){
            console.log(this.props)
            let stateProps = mapStateToProps();
            this.setState({
                allProps : {
                     ...stateProps,
                    ...this.props,
                }
            })
        }

        componentWillUnmount(){
            console.log(this.props)
            this.setState({
                allProps : {
                    ...this.props,
                }
            })
        }

        render(){
            console.log(this.state.allProps)
            return(
                <WrappedComponent {...this.state.allProps}/>
            )
        }
    }
};

let mapStateToProps = () => {
    return {
        user : {
            username : '',
            age : '',
            gender : ''
        }
    }
};

User = connect(User, mapStateToProps);

const components = document.querySelector('#root');
ReactDOM.render(<UsersList/>,components);

