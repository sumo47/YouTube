import * as api from '../api';

export const addToLikedVideo = (likedVideoData) => async (dispatch) => {
    try {
        const { data } = await api.addToLikedVideo(likedVideoData)
        // console.log(data)//not working
        dispatch({ type: "POST_LIKEVIDEO", data })
    } catch (error) {
        console.log(error)
    }
}