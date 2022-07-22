function changeCount(amount) {
  return {
    //add payload property to make our action more "informative"
    type: "CHANGE_COUNT",
    payload: amount
  }
}

function countReducer(count = 0, action) {
  switch(action.type) {
    case "CHANGE_COUNT":
      return count + action.payload
    default:
      return count
  }
}