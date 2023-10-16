/* eslint-disable eqeqeq */
import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ item }) => {
  let navigate = useNavigate();

    const { genreList } = useSelector(state=>state.movie)
  return (
    <div onClick={()=>navigate(`/movies/${item.id}`)}>
      <div
        className="card"
        style={{
          backgroundImage:
            "url(" +
            `https://image.tmdb.org/t/p/w355_and_h200_multi_faces${item?.backdrop_path}` +
            ")",
        }}
      >
        <div className="card-overlay">
            <h1>
              {item.title} 
            <span className="adult-info">{item.adult? "18+" : "18-" }</span>
            </h1>
            <div className="vote-averageBox">
              <span className="vote-average">
                    score {item.vote_average}
                    </span>
            </div>
            <div className='genre'>
                {item.genre_ids.map((id,idx)=>
                <Badge bg="danger" key={idx}>
                    {genreList.find(item=>item.id==id).name}
                </Badge>
                )}
            </div>
        </div>

      </div>
    </div>
  )
}

export default MovieCard
