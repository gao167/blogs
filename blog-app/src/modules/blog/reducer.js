const initState = {
    loading: false,
    data: []
}
const blogReducer = (state = initState, action) => {
    switch (action.type) {
        case 'BLOG_REQUEST':
            return { ...state, loading: true }
        case 'BLOG_REQUEST_SUCCESS':
            return { ...state, loading: false, data:action.payload }

        default:
            return state;
    }
}
export default blogReducer