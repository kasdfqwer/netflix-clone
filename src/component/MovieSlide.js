import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from './MovieCard';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const MovieSlide = ({movie}) => {
  /* home에 있는 movie를 props를  통해 상속받음 */
  return (
    <div>
        <Carousel responsive={responsive}>
            {
                movie.results.map((item, idx)=> (
                  /* 전달받은 moive.data 키값 중에서 results를 보여줌 */
                    <MovieCard key={idx} item={item} />
                ))
            }
        </Carousel>      
    </div>
  )
}

export default MovieSlide

