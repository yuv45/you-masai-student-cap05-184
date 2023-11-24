import React from 'react'
import './style.css'
const Traveling = () => {
  return (
    <div className='main-box'>
    
        <h2>Travelling Tips</h2>
        <div  className='mains ' >
        <div className='opa'>
        <img alt="" class="uitk-image-media" src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_NationalParks_imgB_375x468_20211117.jpg?impolicy=fcrop&amp;w=450&amp;h=600&amp;q=mediumHigh"/>
        <div className='np'>
        <h2>National Parks</h2>
        <p>There's plenty to keep you busy.</p>
        <button>Learn More</button>
        </div>
        </div>
        <div className='opa'>
        <img alt="" class="uitk-image-media" src="https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_RoadTrips_imgB_375x468_20211117.jpg?impolicy=fcrop&amp;w=450&amp;h=600&amp;q=mediumHigh"/>
        <div className='np'>
        <h2>The perfect road trip</h2>
        <p>Find an adventure for every season</p>
        <button>Read on</button></div>
        </div>
    </div>

    <div className='rewards'>
        <div >
            <img  className='rewards-images'src='https://a.travel-assets.com/mad-service/footer/marquee/ORB_App_Footer_v1.jpg'/>
        </div>
        <div id='details-of-reward-box'>
            <ul>Rewards are waiting for you in the Orbitz app
                <li>Earn 4% back when you book your hotel in app, vs. 3% on site</li>
                <li>Get flight status and gate number notifications</li>
                <li>Have questions about your stay? Message your hotel right in the app    </li>
            </ul>
            <h3>Scan the QR code with your device camera and download our app</h3>
        </div>
        <div className='Scanner' >
            <img className='rewards-images2' src='https://a.travel-assets.com/mad-service/qr-code/portfolio_app_landing/qr_app_landing_footer_orbitz.png'/>
        </div>
    </div>
    <h1>More Destinations </h1>
    
    <div id='Destinations'>
      
        <div className='Destiny'>Destination deals
        <i class='bx bx-chevron-down'></i></div>
        <div  className='Destiny'>Top hotel beach destinations<i class='bx bx-chevron-down'></i></div>
        <div  className='Destiny'>Top hotel city destinations <i class='bx bx-chevron-down'></i></div>
        <div  className='Destiny'>Top vacation destinations <i class='bx bx-chevron-down'></i></div>
        <div  className='Destiny'>Top flight destinations <i class='bx bx-chevron-down'></i></div>
        <div  className='Destiny'>Top car rental destinations in America <i class='bx bx-chevron-down'></i></div>
    </div>
    </div>
  )
}

export default Traveling;