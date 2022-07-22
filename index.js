// const redux = require("Redux")
//create action creators
//action creators are functions that 
//return object with a type property 
//whose value is a description of change we would like to make in state



// Move actions into their own separate files


const initialState = {
  count: 0,
  favoriteThings: [],
  youtubeVideo: {
    title: "",
    viewCount: 0,
    votes: {
      up: 0,
      down: 0
    }
  }
}

//the reducer's job is to make changes to global state based on the action
//the reducer function takes 2 arguments: 
//    first argument is the initial state
//    second argument is the action
//the reducer takes a look at the action's type (action.type)
//to determine how to update state
//in other words, make changes to state based on the action.type argument

function reducer(state = initialState, action) {
  switch(action.type) {
    case "CHANGE_COUNT":
      //because state is no longer a simple type, IT IS AN OBJECT
      //therefore, when updating state
      //we have to make sure to keep all the other parts of state INTACT
      //by using spread operator
      return {...state, count: state.count + action.payload}
    case "ADD_FAVORITE_THING":
      return {...state, favoriteThings: [...state.favoriteThings, action.payload]}
    case "REMOVE_FAVORITE_THING":
      //another way is to create a copy of the array
      //then you can do all sort of method that mutate that copy
      return {
        ...state, 
        favoriteThings: state.favoriteThings.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
      }
    case "SET_YOUTUBE_TITLE": 
      return {
        ...state,
        youtubeVideo: {...state.youtubeVideo, title: action.payload}
      }
    case "UP_VOTE":
      return {
        ...state, 
        youtubeVideo: {
          ...state.youtubeVideo, 
          votes: {
            ...state.youtubeVideo.votes, 
            up: state.youtubeVideo.votes.up + 1
          }
        }
      }
    case "DOWN_VOTE":
      return {
        ...state,
        youtubeVideo: {
          ...state.youtubeVideo,
          votes: {
            ...state.youtubeVideo.votes,
            down: state.youtubeVideo.votes.down + 1
          }
        }
      }
    //need a default case, incase no argument or invalid argument passed in
    default:
      return state
  }
}


//create a redux store
const store = Redux.createStore(reducer)

//subscribe to the changes in the store
//if any change ever occur, it will run subscribe method
//inside subscribe method, we call getState method to get the current state

store.subscribe(() => {
  console.log(store.getState())
})


//dispatch method
//like a server who SEND your order to the kitchen or 
//in this case "action" to the reducer

// => dispatch expect some kind of action
// store.dispatch(increment(5)) //invalid action
// store.dispatch(decrement()) //invalid action


store.dispatch(changeCount(5))
store.dispatch(changeCount(-1))
store.dispatch(addFavoriteThing("Red Rosei"))
store.dispatch(addFavoriteThing("yes yes"))
store.dispatch(removeFavoriteThing("yes yes"))

store.dispatch(setYoutubeTitle("Learn Redux"))
store.dispatch(upVote())
store.dispatch(upVote())
store.dispatch(upVote())
