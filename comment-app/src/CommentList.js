/**
 * Created by Anno59 on 2018.10.13.
 */
import React,{Component} from 'react';
import Comment from './Comment';

class CommentList extends Component{
    static defaultProps = {
			comments:[]
    };
    render(){
        this.props.comments.push(this.props.list);
        return(
            <div>
              {
                  this.props.comments.map((comment,i) => <Comment comment={comment} key={i}/>)
              }
             </div>
        )
    }
}

export default CommentList;