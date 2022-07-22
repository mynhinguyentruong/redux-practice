function addFavoriteThing(thing) {
  return {
    type: "ADD_FAVORITE_THING",
    payload: thing
  }
}

function removeFavoriteThing(thing) {
  return {
    type: "REMOVE_FAVORITE_THING",
    payload: thing
  }
}

function favoriteThingReducer(favoriteThings = [], action) {
  switch(action.type) {
    case "ADD_FAVORITE_THING":
      return [...favoriteThings, action.payload]
    case "REMOVE_FAVORITE_THING":
      //return new array that does not have that thing
      return favoriteThings.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
    default:
      return favoriteThings
  }
}