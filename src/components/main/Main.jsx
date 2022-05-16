import React from 'react'
import Main1img from './../asets/img/main-img1.svg';

function Main() {
  return (
    <div className='Main-main'>
     <div className='Main-maim'>
        <div className='Main-text'>
            <h1>Why Thrive?</h1>
            <p><span>Want to improve your well-being from the comfort of your own couch? Are you having trouble finding the right therapist? </span>Here at ThriveTalk, our licensed therapists provide the same quality care you would get in office from anywhere you can access your laptop or mobile phone. Become your best self with ThriveTalk.  Start therapy now with a licensed therapist!</p>
        </div>
        <div className='Main-img'>
            {/* <img src={Main1img} alt="" /> */}
        </div>
     </div>
     <div className='Main-maim2'>
         <p id='m2p1'>ABOUT US</p>
         <p id='m2p2'>We want to help you thrive! Whether you are just looking for someone to talk to, or are struggling with a mental wellness issue we’re here to help.  Our highly talented therapists can help you with a range of issues including relationships, sex, PTSD, depression, social anxiety, or even just caring for yourself more.</p>
         <p id='m2p3'>WE CAN HELP YOU WITH</p>
     </div>
     <div className='Main-maim3'>
         <div className='m3b1'>
             <hr />
             <li><span>Weight Lifting</span></li>
         </div>
         <div className='m3b2'>
             <hr />
             <li><span>Running  & Spinning</span></li>
         </div>
         <div className='m3b3'>
             <hr />
             <li><span>Pumping Iron</span></li>
         </div>
         <div className='m3b4'>
             <hr />
             <li><span>Pumping Iron</span></li>
         </div>
     </div>
    </div>
  )
}

export default Main