import React from 'react'
import './Main.css'
// import img1 from '../imgs/img1.png'
import mursaleen from '../imgs/Mursaleen.png'

function Main() {
  return (
    <>
    <main className='Main' id='/'>
      <div className='texts'>
        <h1>Front-End React Developer 👋🏻</h1>
        <h2>I'm <span>MuhammadMursaleen.</span><br/>A Modran Frontend React Developer</h2>
        {/* <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Corporis odio, numquam fugit, dolores quae, provident debitis dolorem <br/>id quas modi voluptatibus. Autem et pariatur dolore voluptate illum? Quibusdam, cumque fugit?</p> */}
        <a className='ancartag' href="Mursaleen.pdf" download>DOWNLODE RESUME</a>
      </div>
      <div className='mainimg'>
        {/* <img src={mursaleen} alt="" /> */}
      </div>
    </main>
    </>
  )
}

export default Main