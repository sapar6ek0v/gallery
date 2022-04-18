import { GET_PHOTOS, GET_SINGLE_PHOTO } from '../types/galleryTypes'

const initialState = {
  photos: [],
  isLoading: true,
  singlePhoto: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.photos,
        isLoading: false,
      }

    case GET_SINGLE_PHOTO:
      return {
        ...state,
        singlePhoto: action.singlePhoto,
        isLoading: false,
      }
    default:
      return state
  }
}

export default reducer
