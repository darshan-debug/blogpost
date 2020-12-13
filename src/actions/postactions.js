import {FETCH_POSTS, NEW_POST} from './types.js';

//the thunk-middleware(which we installed with redux) allows us to ..call the dispatch function drectly,so that we can make asynchronous request
export const fetchPosts=()=>dispatch=>
{          console.log('@action...fetchpost called........ fetching and dispatching..to store');
          fetch('https://jsonplaceholder.typicode.com/posts')
              .then(res=>res.json())
              .then(posts=>
                dispatch({//dispatching payload to reducer
                  type:FETCH_POSTS,
                  payload:posts
                  //what ever data that will go to redux is called payload
                         })
              );    
};
//whenever we want to send data we call dispatch
//dispatch is a resolver or promise
//so we create our fetch here


export const createPost=postData=>dispatch=>
{ console.log('@action....createPost called.....fetching and dispatching to store');
  fetch('https://jsonplaceholder.typicode.com/posts',
     { method:'POST',
       headers:{'content-type':'application/json'},
       body:JSON.stringify(postData)
     })
     .then(res=>res.json())
     .then(newpost=>
              dispatch({ type:NEW_POST,
                          payload:newpost
                      })        
          );
          //WE ARE DISPATCHING OUR newpost TO REDUCER
};