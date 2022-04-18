import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { API_KEY, URL_BASE } from '../constants/constants'
import { getSinglePhoto } from '../redux/actionCreators/galleryCreators'
import Loader from './Loader'
import { Button, Wrapper } from './styles/PictureDetails.styled'
import {
  AiOutlineDownload,
  AiFillLike,
  AiOutlineComment,
  AiOutlineArrowRight,
} from 'react-icons/ai'

const PictureDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const url = `${URL_BASE}/?key=${API_KEY}&q=space&image_type=photo&pretty=true&category=nature&id=${id}`
  const gallery = useSelector((s) => s.gallery)

  useEffect(() => {
    axios(url)
      .then(({ data }) => dispatch(getSinglePhoto(data)))
      .catch((e) => console.log(e))
  }, [id, dispatch])

  if (gallery.isLaoding) return <Loader />

  return (
    <Wrapper>
      <div className="card_btn">
        <Button onClick={() => navigate('/')} pd={'6px 10px'}>
          НАЗАД
        </Button>
      </div>

      <div className="card_details">
        {gallery.singlePhoto.map((photo) => (
          <div class="card">
            <div>
              <img
                src={photo.webformatURL}
                alt="card_image"
                class="card_image"
              />
            </div>
            <div class="card_body">
              <div className="card_link">
                <span class="tag tag-blue">{photo.type}</span>
                <a href={photo.pageURL} target="_blank">
                  <span>page url</span>
                  <AiOutlineArrowRight />
                </a>
              </div>

              <h4>TYPE: {photo.tags}</h4>
              <div className="d-flex align-items-center  justify-content-between">
                <p>
                  <AiFillLike />
                  <span>{photo.likes}</span>
                </p>
                <p>
                  <AiOutlineComment />
                  <span>{photo.comments}</span>
                </p>
                <p>
                  <AiOutlineDownload />
                  <span>{photo.downloads}</span>
                </p>
              </div>
            </div>
            <div class="card_footer">
              <div class="user">
                <img
                  src={photo.userImageURL}
                  alt="user_image"
                  class="user_image"
                />
                <h5>{photo.user}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}

export default PictureDetails
