import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TvAction } from '../redux/action/TvAction';
import Loading from '../component/Loading';
import TvSlide from '../component/TvSlide';
import TvBanner from '../component/TvBanner';

const TV = () => {
  const dispatch = useDispatch();
  const {onTheAirTv, popularTv, topRatedTv, loading} = useSelector
  (state=>state.tv)

  useEffect(()=> {
    dispatch(TvAction.getTv())
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <div>
      <TvBanner tv={popularTv.results[0]}/>
      <div className="contents">
        <h2>On The Air</h2>
        <TvSlide tv={onTheAirTv} />
        <h2>Top Rated</h2>
        <TvSlide tv={topRatedTv} />
        <h2>What's Popular</h2>
        <TvSlide tv={popularTv} />
      </div>
    </div>
  )
}

export default TV
