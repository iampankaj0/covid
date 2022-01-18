import React, { useEffect, useState } from 'react';
import './covid.css';

const Covid = () => {


  const [data, setData] = useState( [] )


  const getCovidData = async() => {
    try {
      const res = await fetch('https://data.covid19india.org/data.json');
      const actualData = await res.json()
      console.log(actualData.statewise[12])
      setData(actualData.statewise[12])
      
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    getCovidData();
  }, [])



    return (
        <div>
          <h1> <span className='blink-soft'>🔴</span>Live Updates<span> by  <a href="http://www.instagram.com/_iampankaj" rel='nofollow noopener' > pankaj yadav </a></span> </h1>
          <h2>COVID-19 <span>CORONAVIRUS</span> TRACKER</h2>
            <div className='container'>
              <div className="row">
                
                <div className='col-md-4'>
                  <div className='card card-blink'>
                    <div className='card-body'>
                      <h3 className='mb-2 text-center'> <span>Name of</span> place </h3>
                      <p className='mb-0 text-center'> { data.state } </p>
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='card'>
                    <div className='card-body'>
                      <h3 className='mb-2 text-center'> <span>total</span> confirmed </h3>
                      <p className='mb-0 text-center'> { data.confirmed } </p>
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='card'>
                    <div className='card-body'>
                      <h3 className='mb-2 text-center'> <span>total</span> active </h3>
                      <p className='mb-0 text-center'> { data.active } </p>
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='card'>
                    <div className='card-body'>
                      <h3 className='mb-2 text-center'> <span>total</span> recovered </h3>
                      <p className='mb-0 text-center'> { data.recovered } </p>
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='card'>
                    <div className='card-body'>
                      <h3 className='mb-2 text-center'> <span>total</span> deaths </h3>
                      <p className='mb-0 text-center'> { data.deaths } </p>
                    </div>
                  </div>
                </div>

                <div className='col-md-4'>
                  <div className='card'>
                    <div className='card-body'>
                      <h3 className='mb-2 text-center'> <span>last</span> updated time </h3>
                      <p className='mb-0 text-center'> { data.lastupdatedtime } </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
        </div>
    )
}

export default Covid
