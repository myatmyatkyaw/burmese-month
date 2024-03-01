import React from 'react';

import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch'; // Assuming you have created this custom hook


const Monthdetail = () => {
  const { id } = useParams();
  const { data: month, error, isPending } = useFetch('https://month-json-server.vercel.app/Tbl_Months/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('https://month-json-server.vercel.app/Tbl_Months/' + month.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    });
  };

  const handleBack = () => {
    history.goBack(); // Navigate back to the previous page
  };

  return (
    <div className="container my-4 monthdetail">

      {isPending && <div style={{height: '100vh' }}>Loading...</div>}
      {error && <div>{error}</div>}
      {month && (

<>
{/* <h2 className="card-title text-center">{month.MonthMm}</h2>
<h3 className="card-subtitle mb-2">{month.MonthEn}</h3> */}

  
<div class="containercol row d-flex justify-content-evenly">
  <div class="column col-md-6">
    <div class='group'>
      <img src={process.env.PUBLIC_URL + '/' + month.ImageDetail} class="img-top " alt="month" style={{ width: '100%' }} data-aos="zoom-in"/>
      <p class="card-text textlight" data-aos="zoom-in">{month.Description}</p>
    </div>
  </div>
  <div class="column col-md-6">
    <div class='group'>
      <p class="card-text textlight" data-aos="zoom-in">{month.Detail}</p>
    </div>
  </div>
</div>

  
  

</>

      )}
    </div>
  )
}

export default Monthdetail
