import request from '../../utils/request'

export function getBlogs() {
    return dispatch => {
        dispatch({ type: 'BLOG_REQUEST' })
        request.get('/')
            .then(res => {
                dispatch({ type: 'BLOG_REQUEST_SUCCESS', payload: res.data.data })
            })
            .catch(err => console.log(err))
    }
}