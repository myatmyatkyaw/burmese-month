import React from 'react';

import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch'; // Assuming you have created this custom hook


const Monthdetailheader = () => {
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
    <div className="container my-4 ">

      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {month && (

<>
<h2 className=" text-center" data-aos="zoom-in">{month.MonthMm}  [{month.MonthEn}]</h2><br/>
<h3 className=" text-center mb-4" data-aos="zoom-in">{month.FestivalMm} [{month.FestivalEn}]</h3>
<button className="btn btn-outline-dark me-3" onClick={handleBack} data-aos="zoom-in">Back</button>
  <button className="btn btn-outline-danger" onClick={handleClick} data-aos="zoom-in">Delete</button>

</>

      )}
    </div>
  )
}

export default Monthdetailheader
