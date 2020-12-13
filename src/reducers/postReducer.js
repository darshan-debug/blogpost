import {FETCH_POSTS, NEW_POST} from '../actions/types.js';

const initialState=
{ items:[],
    item:{}
};
// REMEMBER A REDUCER SHLD BE A pure func.........ie. IT SHLD NOT DO ANY DOM MANIPULATION,OR ANY API CALLS,etc...it shld just update the state
// when ever a website starts.REDUX CALLS REDUCER 1ST,without any action,,,to get 'initialState'...for state..ie store
export default function(state=initialState,action)
{
    //action will one of these 2 constants:FETCH_POSTS,NEW_POSTS
    switch(action.type)
        {   case FETCH_POSTS:
                console.log("reducer..@FETCH_POSTS");
                //returning the state,with the items that have been fetched
                return{
                        ...state,// to return current state,we use spread operator,to copy PREVIOUS STATE AS IT IS, then update 'items'(in this case ),...REMEMBER THE MAIN PURPOSE to use spread operator is to do DEEP COPY,
                        items:action.payload
                      };
            case NEW_POST:
                console.log("reducer..@NEW_POSTS");
                //we will not add the newpost to any DB,as we r using JSONplaceholders..
                //we will just return the new item,and then push that into the POST PROPERTY,inside the POST component
                return{
                    ...state,// to return current state,we use spread operator(see at buttom for more info)
                    item:action.payload
                  };
                  //remember the payload in this case is the SINGLE NEWPOST
                  //note: compare return of above 2 cases...its 'items'@FETCH_POSTS....and 'item'@ NEW_POST

        
            default: return state;
        }
}







// spread operator is triple dots ie(...)