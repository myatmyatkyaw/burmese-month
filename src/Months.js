import React from 'react'
import useFetch from './useFetch'

import Monthlist from './Monthlist'

const Months = () => {
  const { error, isPending, data: Tbl_Months } = useFetch('https://month-json-server.vercel.app/Tbl_Months')
  return (
    <div className="months">
    { error && <div>{ error }</div> }
    { isPending && <div>Loading...</div> }
    { Tbl_Months && <Monthlist months={Tbl_Months} /> }
  </div>
  )
}

export default Months
