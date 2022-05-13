import {
    GET_POSTS_ERROR,
    GET_POSTS_START,
    GET_POSTS_SUCCESSES,
    NEXT_PAGE,
    PREV_PAGE,
    SELECT_PAGE,
} from "./actions";

const initialState = {
    posts: [],
    postsPreload: false,
    totalCount: '',
    currentPage: 1,
    error: '',
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_POSTS_START:
            return {
                ...state,
                postsPreload: true,
            }
        case GET_POSTS_SUCCESSES:
            return {
                ...state,
                totalCount: action.totalCount,
                posts: action.posts,
                postsPreload: false,
            }
        case GET_POSTS_ERROR:
            return {
                ...state,
                error: action.payload,
            }
        case SELECT_PAGE:
            return {
                ...state,
                currentPage: action.page,
            }
        case NEXT_PAGE:
            return {
                ...state,
                currentPage: state.currentPage + 1,
            }
        case PREV_PAGE:
            return {
                ...state,
                currentPage: state.currentPage - 1,
            }


        default: return state
    }
}

export default rootReducer
