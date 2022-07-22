function setYoutubeTitle(title) {
  return {
    type: "SET_YOUTUBE_TITLE",
    payload: title
  }
}

function incrementViewCount() {
  return {
    type: "INCREMENT_VIEW_COUNT"
  }
}

function upVote() {
  return {
    type: "UP_VOTE"
  }
}

function downVote() {
  return {
    type: "DOWN_VOTE"
  }
}