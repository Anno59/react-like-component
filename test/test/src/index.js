import React , { Component,PropTypes } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

class Dog extends Component {
    bark () {
        console.log('bark')

    }

    handleAddEvent(){
        let username = this.username.value;
        let age = this.age.value;
        let male = this.male.checked;
        let gender = male ? 'male' : 'female';
        let user ={
                username,
                age,
                gender,
            };
        console.log(this.props.addUser);
        this.props.addUser(user);
        // this.setState({userList})
    }

    handleDeleteEvent(e){
        let deleteIndex = e.target.getAttribute('index');
        let userList = this.state.userList;
        // console.log([...userList.slice(0,+deleteIndex)])
        // console.log([...userList.slice(+deleteIndex+1)])
        // console.log([...userList.slice(0,+deleteIndex),...userList.slice(+deleteIndex+1)])
        // console.log(+deleteIndex,+deleteIndex+1)
        // this.setState({
        //     userList : [...userList.slice(0,+deleteIndex),...userList.slice(+deleteIndex+1)]
        // })
        this.props.deleteUser(deleteIndex);
    }

    render () {
        // User = connect(User, mapStateToProps);
        const { username, age, gender } = this.state;
        const { addUser, deleteUser, users } = this.props;
        console.log(this.state.userList)
        return (
            <div>
                 {/*输入用户信息，点击“新增”按钮可以增加用户 */}
                <div className='add-user'>
                    <div>Username: <input type='text' value={username} onChange={(e)=> {this.setState({username : e.target.value})}}/></div>
                    <div>Age: <input type='number' value={age}  ref={(input)=> this.age = input} /></div>
                    <div>Gender:
                        <label>Male: <input type='radio' name='gender' value='male'  onChange={(e)=>{this.setState({gender: e.target.value})}}/></label>
                        <label>Female: <input type='radio' name='gender' value='female'  onChange={(e)=>{this.setState({gender: e.target.value})}}/></label>
                    </div>
                    {/*<button onClick={this.props.addUser()}>增加</button>*/}
                    <button onClick={()=>addUser(this.state)}>增加</button>
                </div>
                 {/*显示用户列表 */}
                <div className='users-list'>
                    {
                        users.map((user, index) => {
                            let prop = {user, index, 'key' : index, deleteUser};
                            // console.log(user)
                            return <User {...prop}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

const connect = (mapStateToProps, mapDispatchToProps) => (WrappedComponent) => {
    return class extends Component{
        constructor(){
            super();
            this.state = {
                allProps : {}
            }
        }

        componentWillMount(){
            // console.log(store.dispatch);
            let stateProps = mapStateToProps ? mapStateToProps(store.getState()) : {};
            let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch) : {};
            console.log(dispatchProps);
            this.setState({
                allProps : {
                     ...stateProps,
                    ...dispatchProps,
                    // ...this.props,
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

let mapStateToProps = (states) => {
    return {
        user : states
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        deleteUser : (index) => dispatch({
            type: 'DELETE_USER',
            index,
        }),
        addUser : (user) => dispatch({
            type: 'ADD_USER',
            user,
        }),
    }
};

UsersList = connect(mapStateToProps, mapDispatchToProps)(UsersList);

const components = document.querySelector('#root');
ReactDOM.render(<UsersList/>,components);