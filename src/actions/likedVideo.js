import * as api from '../api';

export const addToLikedVideo = (likedVideoData) => async (dispatch) => {
    try {
        const { data } = await api.addToLikedVideo(likedVideoData)
        // console.log("liked: " + data)
        dispatch({ type: "POST_LIKEVIDEO", data })
        dispatch(getAllLikedVideo())
    } catch (error) {
        console.log(error)
    }
}
export const getAllLikedVideo = () => async (dispatch) => {
    try {
        const { data } = await api.getAllLikedVideo();
        console.log("allLiked: " + data)
        dispatch({ type: "FETCH_ALL_LIKED_VIDEOS", payload: data })
    } catch (error) {
        console.log(error)
    }
}