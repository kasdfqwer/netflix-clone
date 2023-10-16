import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../component/Loading';
import { TrendingAction } from '../redux/action/TrendingAction';
import TrendingSlide from '../component/TrendingSlide';
import TrendingTvSlide from '../component/TrendingSlide';
import { Link } from 'react-router-dom';

const Home = () => {
    const dispatch = useDispatch();
    const {trendingMovie, trendingTv, loading} = useSelector(state=>state.trending);

    useEffect(()=> {
        dispatch(TrendingAction.getTrending())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return (
            <Loading />
        )
    }
  return (
    <>
     <div className="Home-area">
        <div className="Home-inner">
            <div className="main-imgBox">
                <div className="blackCover"></div>
                <div className="title-area">
                    <h2>대한민국 모든 이야기가 여기!</h2>
                    <p>어디서나 자유롭게 시청하세요. 해지는 언제든 가능합니다.</p>
                    <p>시청할 준비가 되셨나요? </p>
                <Link to='/movies'>
                <button bg='danger' className='start'>시작하기</button>
                </Link>
                </div>
            </div>
            <h2>Trending Movie</h2>
            <TrendingSlide trending={trendingMovie} />
            <h2>Trending TV</h2>
            <TrendingTvSlide trending={trendingTv} />
        </div>
     </div> 
    </>
  )
}

export default Home
