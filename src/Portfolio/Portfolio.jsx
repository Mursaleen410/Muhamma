import React from 'react'
import './Portfolio.css'
import Adminpanal from '../imgs/Admin panal.png'
import  CRUD from '../imgs/CRUD.png'
import landpage from'../imgs/Landing page.png'
import color from '../imgs/Color Genrator.png'
import todo from '../imgs/Todo -list.png'
import password from '../imgs/Password Genrator.png'

export const Portfolio = () => {
  return (
    < >
    <section id='portfilio' >
    <div className='portfiliotital'><h1>PORTFOLIO</h1></div>
    <div className='card-container'>
    <div id='cards'>
    <div className="pimg">
      <img className='img' src={Adminpanal} alt="" />
     
     <p className='Description'>
     {/* Explore the allure of my meticulously designed admin panel, where beauty 
     meets functionality. With an intuitive interface, effortlessly manage customer
     reviews and track order placement times. This dynamic admin hub ensures seamless 
     data management, providing you with a powerful tool to oversee and optimize your 
     operations. Elevate your administrative experience as you navigate through a visually 
     stunning and feature-rich environment tailored to enhance your control and decision-making 
     processes. */}
     </p>
    </div>
    </div>
    <div id='cards'>
    <div className="pimg">
      <img className='img' src={CRUD} alt="" />
    
    </div>
    </div>
    <div id='cards'>
    <div className="pimg">
      <img className='img' src={landpage} alt="" />
     
    </div>
    </div>
    <div id='cards'>
    <div className="pimg">
      <img className='img' src={color} alt="" />
     
    </div>
    </div>
    <div id='cards'>
    <div className="pimg">
      <img className='img' src={todo} alt="" />
    
    </div>
    </div>
    <div id='cards'>
    <div className="pimg">
      <img className='img' src={password} alt="" />
    
    </div>
    </div>
    </div>
    </section>
    </>
  )
}
