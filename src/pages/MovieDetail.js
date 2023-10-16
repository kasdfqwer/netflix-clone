/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-concat */
import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Video from '../component/Video'
import Review from '../component/Review'

const MovieDetail = () => {
  let [showDetail, setShowDetail] = useState({});
  const API_KEY = process.env.REACT_APP_API_KEY;
  let { id } = useParams();

  const detail = async() => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    /* console.log(data) */
    setShowDetail(data);
  }

  useEffect(()=> {
    detail();
  }, [showDetail])
  return (
    <Container>
      <Row className='detail-section'>
        <Col lg={5} className='detail-img-card'>
          <div className="detail-img" style={{backgroundImage:"url(" + `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${showDetail?.poster_path}` + ")",}}>
          </div>
        </Col>
        <Col lg={6} className='detail-info-group'>
          <div className="detail-title">{showDetail?.original_title} 
          <span className='detail-adult'>{showDetail?.adult ? "18+":"18-"}</span></div>
        <hr/>
          <div className="detail-tagline">{showDetail?.tagline}</div>
          <div className="detail-overview">{showDetail?.overview}</div>
          <div className="detail-info">
            <span className="detail-vote">{showDetail?.vote}</span>
          </div>
          <hr/>
          <div className="detail-info2">
            <div className='genre-badge'>
              {showDetail.genres && showDetail.genres.map((genre, idx)=> (
          <Badge bg="danger" key={idx}>{genre.name}</Badge>
        ))}
            </div>
            <div>
              <Badge bg="danger">Realse Date</Badge>
              {showDetail?.release_date}
            </div>
            <div>
              <Badge bg="danger">runtime</Badge>
              {showDetail?.runtime}m
            </div>
            <div>
              <Badge bg="warning">vote_average</Badge>
              {showDetail?.vote_average}
            </div>
            
          </div>
          <div className='video-area'>
            <Video />
          </div>
        </Col>
      </Row>

      <Review />
    </Container>
  )
}

export default MovieDetail
