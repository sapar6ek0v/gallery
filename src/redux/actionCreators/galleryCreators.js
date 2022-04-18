import { GET_PHOTOS, GET_SINGLE_PHOTO } from '../types/galleryTypes'

export const getPhotos = (data) => {
  return { type: GET_PHOTOS, photos: data.hits }
}

export const getSinglePhoto = (data) => {
  return { type: GET_SINGLE_PHOTO, singlePhoto: data.hits }
}
