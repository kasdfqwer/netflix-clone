import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const PopularPeopleCard = ( {thing}) => {
    /* let navigate = useNavigate(); */

    /* const {popularPeople} = useSelector(state=>state.people) */
  return (
    <>
    <div className="people-card">
      <div className='people-imgBox' style={{backgroundImage:
          "url(" +
          `https://image.tmdb.org/t/p/w300_and_h300_face${thing?.profile_path}` +
          ")",}}>
      </div>
      <div className="people-title">{thing.name}</div>
      <div className="known">{thing.known_for_department}</div>
      <div className="people-score">{thing.popularity}</div>
      <div className="known_for">
        {thing.known_for.map((id, idx)=>
      <span key={idx}>
       {id.original_title}
        </span>
      )}</div>
    </div>
    </>
  )
}

export default PopularPeopleCard
