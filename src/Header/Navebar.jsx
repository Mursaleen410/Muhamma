
import { Link } from 'react-scroll'
import { CiMenuBurger } from "react-icons/ci";
import './Navebar.css'
import { useState } from 'react';



function Navebar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar)
  }


  return (
    <>
      <nav className='navbar'>
        <div className='logo'>
          Mursaleen
        </div>
        <div className={sidebar ? "menu active " : 'menu'} >
          <ul  style={{display: `${ sidebar? 'block': "none"}`}} className='ulitems' onClick={showSidebar}><li><Link to="/"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >Home</Link></li>
            <li><Link to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >Skill</Link></li>
            <li><Link to="portfilio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Portfilio</Link></li>
          </ul>
        </div>
        <div className='menu' >
          <ul  ><li><Link to="/"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >Home</Link></li>
            <li><Link to="About"
              spy={true}
              smooth={true}
              offset={-70}
              duration={800}
            >Skill</Link></li>
            <li><Link to="portfilio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >Portfilio</Link></li>
          </ul>
        </div>
        <button className='Button'><Link to='Contect'
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
        >Contact</Link></button>
        <button className='menueicon' onClick={showSidebar} > <CiMenuBurger /> </button>
      </nav>
    </>


  )
}

export default Navebar