const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'
export const GET_POSTS_START = 'get/posts/start'
export const GET_POSTS_SUCCESSES = 'get/posts/successes'
export const GET_POSTS_ERROR = 'get/posts/error'
export const SELECT_PAGE = 'select/page'
export const NEXT_PAGE = 'next/page'
export const PREV_PAGE = 'prev/page'


export const getPosts = (page) => {

    return async (dispatch) => {
        try {
            dispatch({
                type: GET_POSTS_START,
            });
            const res = await fetch(BASE_URL + `?_limit=10&_page=${page}`);
            const json = await res.json();

            dispatch({
                type: GET_POSTS_SUCCESSES,
                posts: json,
                totalCount: +res.headers.get('X-Total-Count')
            });
        } catch (e) {
            dispatch({
                type: GET_POSTS_ERROR,
                error: "Ошибка получения данных",
            });
        }
    };
};
