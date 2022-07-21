const redux = require("redux")
//create action creators
//action creators are functions that 
//return object with a type property 
//whose value is a description of change we would like to make in state

function increment() {
  return {
    type: "INCREMENT"
  }
}

function decrement() {
  return {
    type: "DECREMENT"
  }
}


//the reducer's job is to make changes to global state based on the action
//the reducer function takes 2 arguments: 
//    first argument is the initial state
//    second argument is the action
//the reducer takes a look at the action's type (action.type)
//to determine how to update state
//in other words, make changes to state based on the action.type argument

function reducer(count = 0, action) {
  switch(action.type) {
    case "INCREMENT":
      return count + 1
    case "DECREMENT":
      return count - 1
    //need a default case, incase no argument or invalid argument passed in
    default:
      return count
  }
}


//create a redux store
const store = redux.createStore(reducer)

//subscribe to the changes in the store
//if any change ever occur, it will run subscribe method
//inside subscribe method, we call getState method to get the current state

store.subscribe(() => {
  console.log(store.getState())
})


//dispatch method
//like a server who send your order to the kitchen or 
//in this case "action" to the reducer

// => dispatch expect some kind of action
store.dispatch(increment()) 
store.dispatch(decrement())
