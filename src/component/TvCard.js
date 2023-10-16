/* eslint-disable eqeqeq */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const TvCard = ({tvitem}) => {
    let navigate = useNavigate();
    const { genreTvList } = useSelector(state=>state.tv)
  return (
    <>
    <div onClick={()=>navigate(`/TV/${tvitem.id}`)} className='tv-cardBox'>
      <div
        className="tv-card"
        style={{
          backgroundImage:
            "url(" +
            `https://image.tmdb.org/t/p/w220_and_h330_face${tvitem?.poster_path}` +
            ")",
        }}
      >
        <div className="card-overlay">
            <h1>
              {tvitem.original_name}
              <span className="adult-info">{tvitem.adult? "18+" : "18-" }</span>
            </h1>
            <div className="vote-averageBox">
              <span className="vote-average">
                    score {tvitem.vote_average}
                    </span>
            </div>
            <div className='genre'>
                {tvitem.genre_ids.map((id,idx)=>
                <Badge bg="danger" key={idx}>
                    {genreTvList.find(item=>item.id==id).name}
                </Badge>
                )}
            </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default TvCard
