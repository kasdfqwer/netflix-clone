import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TrendingCard from './TrendingCard';

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
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      }
}
const TrendingTvSlide = ({trending}) => {
  return (
    <div>
      <Carousel responsive={responsive} autoPlay={true} 
        autoPlaySpeed={1000} 
        infinite={true} removeArrowOnDeviceType={["desktop", "superLargeDesktop" ]}
        >
            {
                trending.results.map((item, idx)=> (
                  /* 전달받은 moive.data 키값 중에서 results를 보여줌 */
                    <TrendingCard key={idx} item={item} />
                ))
            }
        </Carousel>    
    </div>
  )
}

export default TrendingTvSlide