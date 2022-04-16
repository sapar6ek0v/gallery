import axios from 'axios'
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getPhotos } from '../redux/actionCreators/galleryCreators'
import { Wrapper } from './styles/Gallery.styled'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Loader from './Loader'

const Gallery = () => {
  const dispatch = useDispatch()
  const gallery = useSelector((s) => s.gallery)
  const url =
    'https://pixabay.com/api/?key=26795695-6040cb76d1aaf63088d84d279&q=space&image_type=photo&pretty=true&category=nature'

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
              <div className="card-pos">
                <div className="card">
                  <img src={photo.webformatURL} alt="photo" />
                </div>
                <button className="btn">
                  Подробнее
                  <AiOutlineArrowRight />
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Wrapper>
  )
}

export default Gallery
