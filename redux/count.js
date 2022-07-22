// because the action creator will be used outside of this redux file
// we will make sure to export the action creator 
// so that we can use them

export function changeCount(amount) {
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

export default countReducer

