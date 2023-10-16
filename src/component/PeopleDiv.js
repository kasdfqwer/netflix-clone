import React from 'react'
import PopularPeopleCard from './PopularPeopleCard'

const PeopleDiv = ({people}) => {
  return (
    <>
      <div className="people-area">
        <h1>Popular People</h1>
        <div className="area-inner">
          {
            people.results.map((thing, idx)=> (
                <PopularPeopleCard key={idx} thing={thing} />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default PeopleDiv
