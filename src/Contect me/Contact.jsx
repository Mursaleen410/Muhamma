import React from 'react'
import './Contect.css'
import Github from '../imgs/Github.png'
import Instagram from '../imgs/Instagram.png'
import Linkdin from '../imgs/linkdin.png'
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";



const Contact = () => {
  return (
    <div id='Contect'>
        <h1>CONTECT ME</h1>
        <span>plseae contect me  for your work </span>
        
        <div className='Main-contact'>
  <div className='contectme'>
    <span className='Logo'>
      <FaPhoneAlt />
    </span>
    <div class="text-container">
      <h1>Phone</h1>
      <h5>+923236889128</h5>
    </div>
  </div>
  
</div>
<div className='Main-contact'>
  <div className='contectme'>
    <span className='Logo'>
      <AiOutlineMail />
    </span>
    <div class="text-container">
      <h1>Email</h1>
      <h5>mursaleentech108@gmail.com</h5>
    </div>
  </div>
</div>
<div className='Main-contact'>
  <div className='contectme'>
    <span className='Logo'>
      <IoLocationOutline />
    </span>
    <div class="text-container">
      <h1>Address</h1>
      <h5>Rahim yar khan, Pakistan</h5>
    </div>
  </div>
</div>
        <div className='sociallinks'>
          <a href="https://github.com/Mursaleen410">
          <img className='Img' src={Github} alt="" />
          </a>
          <a href="https://www.instagram.com/mursaleen6283/">
          <img  className='Img' src={Instagram} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-mursaleen-7a7655261/">
          <img  className='Img' src={Linkdin} alt="" />
          </a>

        </div>
    </div>
  )
}

export default Contact