import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Map from './map.png'
// Import your custom CSS file for styling

const MonthList = (props) => {
  const [monthList, setMonthList] = useState([]);

  useEffect(() => {
    fetch('https://month-json-server.vercel.app/Tbl_Months')
      .then(response => response.json())
      .then(data => setMonthList(data))
      .catch(error => console.log('Error fetching month data:', error));
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <div className='container'>
      <div className='monthlist'>
        <h2 className='pt-5 bg-text-dark pb-5' data-aos="zoom-in" data-aos-delay="2000"><img src={Map} style={{ width: 35, height: 50 }} /> မြန်မာလများနှင့် ပွဲတော်များ <img src={Map} style={{ width: 35, height: 50 }} /></h2>
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlay={props.deviceType !== "mobile" ? true : false}
          // autoPlaySpeed={3000}
          keyBoardControl={true}
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {monthList.map(month => (
            <div className="card" key={month.id}>
              <Link to={`/month/${month.id}`}>
                <img src={process.env.PUBLIC_URL + '/' + month.ImagePath} className="img-top small-images " alt="Month" />
              
              <div className="overlay">
              <div className="card-body text-center bg-dark">
            <h6 className="card-title text-light mb-0">{month.MonthMm}</h6>
            <h5 className="card-title text-light mb-0">{month.MonthEn}</h5>
          </div>
          </div>
          </Link>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default MonthList;
