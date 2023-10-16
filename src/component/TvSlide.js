import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TvCard from './TvCard';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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

const TvSlide = ({tv}) => {
  return (
    <>
      <Carousel responsive={responsive} style>
            {
                tv.results.map((tvitem, idx)=> (
                  /* 전달받은 moive.data 키값 중에서 results를 보여줌 */
                    <TvCard key={idx} tvitem={tvitem} />
                ))
            }
        </Carousel> 
    </>
  )
}

export default TvSlide
