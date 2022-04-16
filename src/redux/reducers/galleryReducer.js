import { GET_PHOTOS } from '../types/galleryTypes'

const initialState = {
  photos: [],
  isLoading: true,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS:
      return {
        ...state,
        photos: action.photos,
        isLoading: false,
      }
    default:
      return state
  }
}

export default reducer
