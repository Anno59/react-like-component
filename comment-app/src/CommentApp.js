/**
 * Created by Anno59 on 2018.10.13.
 */
import React,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component{
    handleInputComment(comment){
        console.log(comment)
    }
    render(){
        return(
            <div className="wrapper">
                <CommentInput comment={this.handleInputComment}/>
                <CommentList/>
            </div>
        )
    }
}

export default CommentApp;