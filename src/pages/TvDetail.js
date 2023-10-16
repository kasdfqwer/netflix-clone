import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const TvDetail = () => {
    let [tvDetail, setTvDetail] = useState({});
    const API_KEY = process.env.REACT_APP_API_KEY;
    let { id } = useParams();

    const detail = async() => {
        let url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`;
        let response = await fetch(url);
        let data = await response.json();
        setTvDetail(data);
    }

    useEffect(()=> {
        detail();
    }, [tvDetail])
    
  return (
    <div>
      <Container>
      <Row className='detail-section'>
        <Col lg={5} className='detail-img-card'>
          <div className="detail-img" style={{backgroundImage:"url(" + `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${tvDetail?.poster_path}` + ")",}}>
          </div>
        </Col>
        <Col lg={6} className='detail-info-group'>
          <div className="detail-title">{tvDetail?.original_name} 
          <span className='detail-adult'>{tvDetail?.adult ? "18+":"18-"}</span></div>
        <hr/>
          <div className="detail-tagline">{tvDetail?.tagline}</div>
          <div className="detail-overview">{tvDetail?.overview}</div>
          <div className="detail-info">
            <span className="detail-vote">{tvDetail?.vote}</span>
          </div>
          <hr/>
          <div className="detail-info2">
            <div className='genre-badge'>
              {tvDetail.genres && tvDetail.genres.map((genre, idx)=> (
          <Badge bg="danger" key={idx}>{genre.name}</Badge>
        ))}
            </div>
            {/* <div>
              <Badge bg="danger">Realse Date</Badge>
              {tvDetail?.release_date}
            </div> */}
            {/* <div>
              <Badge bg="danger">runtime</Badge>
              {tvDetail?.runtime}m
            </div> */}
            <div>
              <Badge bg="warning">vote_average</Badge>
              {tvDetail?.vote_average}
            </div>
            
          </div>
          {/* <div className='video-area'>
            <Video />
          </div> */}
        </Col>
      </Row>

      {/* <Review /> */}
    </Container>
    </div>
  )
}

export default TvDetail
