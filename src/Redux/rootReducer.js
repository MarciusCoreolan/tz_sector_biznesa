import {
  GET_POSTS_ERROR,
  GET_POSTS_START,
  GET_POSTS_SUCCESSES,
  NEXT_PAGE,
  PREV_PAGE,
  SEARCH_ON_TABLE,
  SELECT_PAGE,
} from "./actions";

const initialState = {
  posts: [],
  postsPreload: false,
  totalCount: "",
  currentPage: 1,
  search: "",
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_START:
      return {
        ...state,
        postsPreload: true,
      };
    case GET_POSTS_SUCCESSES:
      return {
        ...state,
        totalCount: action.totalCount,
        posts: action.posts,
        postsPreload: false,
        error: null,
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case SELECT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    case SEARCH_ON_TABLE:
      return {
        ...state,
        search: action.text,
      };

    default:
      return state;
  }
};

export default rootReducer;
