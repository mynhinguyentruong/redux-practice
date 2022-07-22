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