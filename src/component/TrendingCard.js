import React from 'react'
import { useNavigate } from 'react-router-dom'

const TrendingCard = ({ item }) => {
    let navigate = useNavigate();

  return (
    <div>
      <div className="trending-card"
      style={{backgroundImage: "url(" +
      `https://image.tmdb.org/t/p/w220_and_h330_face${item?.backdrop_path}` +
      ")",}}>
      </div>
    </div>
  )
}

export default TrendingCard
