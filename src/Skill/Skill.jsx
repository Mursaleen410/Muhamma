import React from 'react'
import './skill.css'
// import img2 from '../imgs/img 2.jpg'
import Responsive from '../imgs/Responsive.png'
import component from '../imgs/component.png'
import per from '../imgs/per.png'

function Skill() {
  return (
  <>
  <section id='Skill'>
  <div className='skilltital' id='About'>WHAT I DO</div>
  <div className='decreption'>
  <p>I possess a deep understanding of programming concepts,including HTML, CSS, JavaScript, TypeScript, React, and Tailwind CSS. This allows me to efficiently build and design modern web applications which are highly responsive.
  My strong problem-solving skills enable me to tackle complex challenges and develop creative solutions. I enjoy breaking down problems, analyzing potential solutions, and implementing the most effective approach.
  Proficient in using version control systems like Git for code management, fostering a collaborative development workflow through clean coding practices, branching strategies, and conflict resolution. Experience with code reviews and potential contribution to open-source projects.
  </p>
  </div>
  <div className='skillbar'>
    <img src={Responsive} alt="" className='img' />
    <div className='skillbartexts'>
    <h2>RESPONSIVE UI/UX DESIGN</h2>
    {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel molestias quaerat tenetur quidem officia natus fuga enim dolores aliquid et aperiam dignissimos ullam autem ducimus harum, cum deleniti repellat cumque.n</p> */}
    </div>
  </div>
  <div className='skillbar'>
    <img src={component} alt="" className='img' />
    <div className='skillbartexts'>
    <h2>COMPONENT-BASED DEVELOPMENT</h2>
    {/* <p>I excel in component-based development, leveraging React's modular structure to build 
      scalable and maintainable frontends. Each component is meticulously designed and implemented, 
      contributing to a cohesive and efficient overall user interface.</p> */}
    </div>
  </div>
  <div className='skillbar'>
    <img src={per} alt="" className='img' />
    <div className='skillbartexts'>
    <h2>PERFORMANCE OPTIMIZATION</h2>
    {/* <p>With a focus on performance, I employ React's virtual DOM to optimize rendering speed, 
      resulting in snappy and efficient web applications. I meticulously fine-tune code to 
      guarantee a smooth and responsive user experience, enhancing overall satisfaction.</p> */}
    </div>
  </div>
  </section>

  </>
  )
}

export default Skill