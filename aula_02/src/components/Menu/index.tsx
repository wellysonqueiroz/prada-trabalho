 import img from "../../img/prada.png"
 import "./menu.css"
import {Link} from "react-router-dom";

export const Menu= () =>{
    return (
      <> 
      <header>
      <Link to='/'> <img src={img} alt="" className="logo"/></Link> 
        <nav className="menu">
          
          <ul>
            <li>
             <Link to='/'>Home</Link>
             <div className="linha"></div>
            </li>
            <li>   
              <Link to='/contatos'>Contacts</Link>
             <div className="linha"></div>
            </li>
            <li>
              <Link to='/sobre'>About</Link>
             <div className="linha"></div>
            </li>
          </ul>
        </nav>

      </header>
      
      </>
    )
  
  }