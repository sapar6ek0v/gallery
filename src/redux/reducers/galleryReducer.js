import { GET_PHOTOS, GET_SINGLE_PHOTO } from '../types/galleryTypes'

const initialState = {
  photos: [],
  singlePhoto: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.photos,
      }

    case GET_SINGLE_PHOTO:
      return {
        ...state,
        singlePhoto: action.singlePhoto,
      }
    default:
      return state
  }
}

export default reducer
