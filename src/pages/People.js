import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { popularAction } from '../redux/action/PeopleAction';
import Loading from '../component/Loading';
import PeopleDiv from '../component/PeopleDiv';

const People = () => {
  const dispatch = useDispatch();
  const {popularPeople, loading} = useSelector(state=> state.people)

  useEffect(() => {
    dispatch(popularAction.getPeople())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return ( 
      <Loading />
    )
  }
  return (
    <div>
      <PeopleDiv people={popularPeople} />
    </div>
  )
}

export default People
