import React, { Component } from 'react';
import {connect} from 'react-redux';//since we will use redux
import PropTypes from 'prop-types';
import {createPost} from '../actions/postactions.js';

/// note: PostForm component...has its own STATE VARIABLES.......but Posts component........ have noo STATE VARIABLES OF ITS OWN

 class PostForm extends Component {
     constructor(props)
     { super(props);
        this.state=
        { title:'',
          body:''
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
     }
     // instead of writing onChange() for both the state variables(title,body)...we r using this trick...see [e.target.name]
     onChange(e)
     {
         this.setState({[e.target.name]:e.target.value});
     }
     /////////////////
     onSubmit(e)
     { e.preventDefault();

        const post={ title:this.state.title,
                     body:this.state.body
                    };
     // NOW call action create_post
     
     console.log("sending details of new post,...through ceatePost");
     this.props.createPost(post);
     }
      

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                            <div>
                                <label>Title:</label>
                                <br/>
                                <input type="text" name='title' onChange={this.onChange} />
                            </div>
                            <br/>
                            <div>
                                <label>Body:</label>
                                <br/>
                                <textarea name='body'  onChange={this.onChange} />
                            </div>
                            <br/>
                            <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}

PostForm.propTypes={createPost:PropTypes.func.isRequired};

export default connect(null,{createPost})(PostForm);
