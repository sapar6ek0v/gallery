import { Action } from 'history'
import { GET_PHOTOS } from '../types/galleryTypes'

export const getPhotos = (data) => {
  return { type: GET_PHOTOS, photos: data.hits }
}
