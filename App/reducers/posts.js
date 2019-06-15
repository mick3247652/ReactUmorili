import { GET_POSTS, POST_RESULT, POST_ERROR } from "../actions/posts";

const InitialState = {
  posts: [],
  error: null,
  isLoaded: false,
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        isLoaded: true,
      };
    case POST_RESULT:
        //console.log(action.result)
      return {
        posts: [...action.result],
        error: null,
        isLoaded: false,
      };
    case POST_ERROR:
      return {
        ...state,
        error: action.error,
        isLoaded: false,
      };
    default:
      return state;
  }
};

export default reducer
