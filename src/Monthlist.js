import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const Monthlist = () => {
  const [monthList, setMonthList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [monthsPerPage] = useState(4);

  useEffect(() => {
    fetch('http://localhost:8001/Tbl_Months')
      .then(response => response.json())
      .then(data => setMonthList(data))
      .catch(error => console.log('Error fetching month data:', error));
  }, []);

  // Get current months
  const indexOfLastMonth = currentPage * monthsPerPage;
  const indexOfFirstMonth = indexOfLastMonth - monthsPerPage;
  const currentMonths = monthList.slice(indexOfFirstMonth, indexOfLastMonth);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container'>
      <div className='monthlist '>
        <h2 className='pt-5 bg-text-dark'>မြန်မာလ အသေးစိတ်များ</h2>
        <div className="row">
          {currentMonths.map(month => (
            <div className="col-md-3" key={month.Id}>
              <div className="card card-body month-preview shadow">
                <Link to={`/month/${month.Id}`}>
                  <img className="img-top small-image" src={process.env.PUBLIC_URL + '/' + month.ImagePath} alt="Month" style={{ width: '100%' }} />
                  <h6 className="card-title textlight mt-3">{month.MonthMm}</h6>
                  <h5 className="card-title text-light mt-3">{month.MonthEn}</h5>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <nav className="mt-3">
          <ul className="pagination justify-content-center">
            {Array.from({ length: Math.ceil(monthList.length / monthsPerPage) }, (_, i) => (
              <li className={`page-item ${currentPage === i + 1 ? 'active' : ''}`} key={i}>
                <button className="page-link" onClick={() => paginate(i + 1)}>
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Monthlist;
