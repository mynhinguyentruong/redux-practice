function changeCount(amount) {
  return {
    //add payload property to make our action more "informative"
    type: "CHANGE_COUNT",
    payload: amount
  }
}
