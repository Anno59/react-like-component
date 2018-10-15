/**
 * Created by Anno59 on 2018.10.13.
 */
import React,{Component} from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component{
    constructor(){
      super();
      this.state = {
				comment: {
					username:'',
					content:''
				}
      }
    }
    handleInputComment(comment){
      console.log(comment);
      this.setState = {
				comment :comment
      }
    }
    render(){
        return(
            <div className="wrapper">
                <CommentInput comment={this.handleInputComment.bind(this)}/>
                <CommentList comments={this.state.comment}/>
            </div>
        )
    }
}

export default CommentApp;