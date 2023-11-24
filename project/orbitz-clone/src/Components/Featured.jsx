import React from 'react'

import './style.css'
const Featured = () => {
  return (
    <>
    <div  className='main-box'>
      <h2>Featured offers</h2>
      <div className='option'>
        <div className='resort'>
          <img src=' https://c4.wallpaperflare.com/wallpaper/36/842/468/boating-wallpaper-preview.jpg'/>
          <div className='pictures'>
          <h4>Last-minute deals</h4>
          <p>Getaway today</p>
          </div>
        </div>
        <div className='resort'>
        <img src='https://lh3.googleusercontent.com/p/AF1QipNyj4h5e8KO_RYLG_hXOl2Bq6v43nbfnqH-wMwX=w768-h768-n-o-v1'/>
        <div className='pictures'>
        <h4>All-inclusive resorts</h4>
        <p>Enjoy sun and fun</p>
        </div>
        </div>
        <div className='resort'>
        <img src= ' https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2021/04/Inground-Pool-Cost.jpg'/>
        <div className='pictures' >
        <h4>Insider Prices</h4>
        <p>Members get rewarded</p>
        </div>
        </div>
        <div className='resort'>
        <img src=' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2V8Uw8WXAJecvuZwcZ-uY0p9ffu0FVu67pw&usqp=CAU'/>
        <div className='pictures' >
        <h4>Jet and reset</h4>
          <p>Fly somewhere beachy and warm</p>
        </div>
        </div>
      </div>
    </div>
    <div className='main-box'>
      <div className='child'>
    <div>
      <img src='https://tpc.googlesyndication.com/simgad/9495452622147067640? '/>
    </div>
    <div>
      <h4>Rewarding and exploring</h4>
      <p>Enjoy rates from $99 - we've got hotels in nearby 100 destinations worldwide. Terms apply</p>
    </div>
    </div>
    <div id='mountains'>
    <div className='trees'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXwlUUiQNTa4xCmuZ77Njpf-dgCye7u_ZaUQ&usqp=CAU'/>
    <p>Northeast</p>
    </div>
    <div  className='trees'><img src='https://www.uscoastlines.com/wp-content/uploads/2020/11/California-Pacific-Coast-1024x576.jpg'/>
    <p>Pacific Coast</p>
    </div>
    <div className='trees'><img src='https://i0.wp.com/easytripsvancouver.com/wp-content/uploads/2014/12/RockyMointains.jpg?fit=2000%2C1091&ssl=1'/>
    <p>Rocky Mountains</p>
    </div>
    </div>
    <hr/>
    <div>
      <div>
        <h1>Here to help keep you on the move</h1>
      </div>
      <div id='booking-details'>
        <div className='edit'>
          <h3>Change or cancel a trip</h3>
          <p>Make updates to your itinerary or cancel a booking </p>
        </div>
        <div className='edit'>
        <h3>Use a credit or coupon</h3>
          <p>Apply a coupon code or credit to a new trip </p>
        </div>
        <div className='edit'>
        <h3>Track your refund</h3>
          <p>check the status of a refund currently in progress</p>
        </div>
      </div>
    </div>
    </div>
   
    </>
  )
}

export default Featured;