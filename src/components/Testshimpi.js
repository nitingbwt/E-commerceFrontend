import React from 'react';
import image1 from "../images/21sep/21sep/bottle-01.jpg"

const Testshimpi = () => {

 const data=[{
       id:'1',
       image: require ('../images/22sep best seller/beauty product1-01.jpg'),
 },
 ];


  return (
    <>
      <div className="container">
      <div className="row">


      
      <div className="col-md-4 col-sm-12">
      <div className="row">
      {data.map((item)=>
      <div className="col-sm-12 col-md-6 mt-3">
      <div className="card" key={item.id}>
      <img src={item.image} className='img-fluid' alt="" />
      </div>
      </div>
      )};
      </div>
      </div>


      <div className="col-md-4 col-sm-12">
      <div className="row">
        <div className="col-12 mt-3">
        <div className="card">
        <img className='img-fluid' alt="" />
        </div>
        </div>
      </div>
      </div>

      <div className="col-md-4 col-sm-12">
      <div className="row">
      {data.map((item)=>
      <div className="col-sm-12 col-md-6 mt-3">
      <div className="card" key={item.id}>
      <img src={item.image} className='img-fluid' alt="" />
      </div>
      </div>
      )};
      </div>
      </div>
     
      </div>
      </div>
    </>
  )
}

export default Testshimpi
