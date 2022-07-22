export function setYoutubeTitle(title) {
  return {
    type: "SET_YOUTUBE_TITLE",
    payload: title
  }
}

export function incrementViewCount() {
  return {
    type: "INCREMENT_VIEW_COUNT"
  }
}

export function upVote() {
  return {
    type: "UP_VOTE"
  }
}

export function downVote() {
  return {
    type: "DOWN_VOTE"
  }
}

const initialState = {
  title: "",
  viewCount: 0,
  votes: {
      up: 0,
      down: 0
    }
}

export default function youtubeVideoReducer(youtubeVideo = initialState, action) {
  switch(action.type) {
    case "SET_YOUTUBE_TITLE":
      return {
        ...youtubeVideo,
        title: action.payload
      }
    case "INCREMENT_VIEW_COUNT":
      return {
        ...youtubeVideo,
        viewCount: youtubeVideo.viewCount + 1
      }
    case "UP_VOTE":
      return {
        ...youtubeVideo,
        votes: {...youtubeVideo.votes, up: youtubeVideo.votes.up + 1}
      }
    case "DOWN_VOTE":
      return {
        ...youtubeVideo,
        votes: {
          ...youtubeVideo.votes, down: youtubeVideo.votes.down + 1
        }
      }
    default:
      return youtubeVideo
  }
}