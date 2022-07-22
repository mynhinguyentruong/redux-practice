// entry point for redux for the whole app

// import separate reducers
// combine reducers into a single state tree
// create the store
// export the store

import countReducer from "./count";
import favoriteThingReducer from "./favoriteThing";
import youtubeVideoReducer from "./youtubeVideo";

// what we pass in combineReducers is an object
// this object represent the global state
// we're going to turn rootReducer into something that can reconstruct
// const initialState = {
//   count: 0,
//   favoriteThings: [],
//   youTubeVideo: {....}
// }
const rootReducer = Redux.combineReducers({
  count: countReducer, // a global state called count, 
                      //  and will use to determine the value of count will be the countReducer
  favoriteThings: favoriteThingReducer,
  youtubeVideo: youtubeVideoReducer
})

const store = Redux.createStore(rootReducer)
store.subscribe(() => {
  console.log(store.getState())
})
export default store