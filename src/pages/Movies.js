import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MovieAction } from '../redux/action/MovieAction';
import Loading from '../component/Loading';
import Banner from '../component/Banner';
import MovieSlide from '../component/MovieSlide';

const Movies = () => {
  const dispatch = useDispatch();
    const {popularMovies, topRatedMovies, upcomingMovies, loading} = useSelector(state=> state.movie);
    /* reducer에서 초기화한 자료 자료 받기 */

    useEffect(() => {
      dispatch(MovieAction.getMovies())
      /* movieaction 안에서 정의한 getmovies 함수 실행해서 화면에 뿌려주기,
      한 번만 실행 [] 빈 배열,
      계속 화면이 바뀌어야 할 때는 배열 안에 환경변수 넣기
      */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /* dispatch와 useEffect은 짝꿍 */
    /* 저장소에 있는 값을 뿌려주기 */

    if (loading) {
      return (
        <Loading />
      )
    }
  return (
    <div>
      <Banner movie={popularMovies.results[13]}/>
      <div className='contents'>
        <h2>What's popular</h2>
        <MovieSlide movie={popularMovies} />
        {/* popularmovies 저장소를 movie에 저장 */}
        <h2>Top Rated Movies</h2>
        <MovieSlide movie={topRatedMovies} />
        <h2>Upcoming Movies</h2>
        <MovieSlide movie={upcomingMovies} />
      </div>
    </div>
  )
}

export default Movies
