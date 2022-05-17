import { GET_POSTS_ERROR, GET_POSTS_START, GET_POSTS_SUCCESSES, SEARCH_ON_TABLE } from './actions';

const initialState = {
  posts: [],
  postsPreload: false,
  search: '',
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

export const selectPosts = (state) => state.posts;
export const selectPostsPreload = (state) => state.postsPreload;
export const selectError = (state) => state.error;
export const selectSearch = (state) => state.search;
