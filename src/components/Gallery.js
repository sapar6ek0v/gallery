import axios from 'axios'
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos } from '../redux/actionCreators/galleryCreators'
import { Wrapper } from './styles/Gallery.styled'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Loader from './Loader'
import { Link } from 'react-router-dom'
import { API_KEY, URL_BASE } from '../constants/constants'

const Gallery = () => {
  const dispatch = useDispatch()
  const gallery = useSelector((s) => s.gallery)
  const url = `${URL_BASE}/?key=${API_KEY}&q=space&image_type=photo&pretty=true&category=nature`

  useEffect(() => {
    axios(url)
      .then(({ data }) => dispatch(getPhotos(data)))
      .catch((e) => console.log(e))
  }, [])

  if (gallery.isLoading) return <Loader />

  return (
    <Wrapper>
      <Container>
        <Row sm={2} md={3} lg={4} xxl={6}>
          {gallery.photos.map((photo) => (
            <Col key={photo.id}>
              <Link to={`/picture_details/${photo.id}`} className="card-pos">
                <div className="card">
                  <img src={photo.webformatURL} alt="photo" />
                </div>
                <button className="btn">
                  Подробнее
                  <AiOutlineArrowRight />
                </button>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Gallery
