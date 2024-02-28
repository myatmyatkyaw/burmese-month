import React from 'react';

import { useParams, useHistory } from 'react-router-dom';
import useFetch from './useFetch'; // Assuming you have created this custom hook


const Monthdetail = () => {
    const { id } = useParams();
  const { data: month, error, isPending } = useFetch('http://localhost:8001/Tbl_Months' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8001/Tbl_Months' + month.id, {
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
        <div className="row">
            <div className="col-md-4">
                <div className="card shadow" >
                 
                    <img src={process.env.PUBLIC_URL + '/' + month.ImageDetail} className="img-top" alt="month" />
                   
                </div>
            </div>
            <div className="col-md-8">
                <div className="card shadow " >
                    <div className="card-body">
                        <h2 className="card-title text-light">{month.MonthMm}</h2>
                        <h3 className="card-subtitle mb-2  text-light">{month.MonthEn}</h3>
                        <p className="card-text textlight">{month.Description}</p>
                        <button className="btn btn-outline-dark me-3" onClick={handleBack}>Back</button>
                        <button className="btn btn-outline-danger" onClick={handleClick}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )}
</div>
  )
}

export default Monthdetail
