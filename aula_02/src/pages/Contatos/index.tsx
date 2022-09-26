import "./contatos.css"
import img from "../../img/fundo.jpg"
import {FaInstagram} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import{FaFacebookF} from 'react-icons/fa'
import {BiSend} from 'react-icons/bi'
import { Link } from "react-router-dom"
export const Contatos = () =>{
    return (
      <> 
      <body>
        <div>
         
          <div className="border ">
          <img src={img} alt="img" className="imgctt"/>
            
     {/* <h1>contacts to call</h1> */}
     <h3 className="hzin">@prada_company</h3>
          </div>
          </div>
        
      <div className="icons" >
    <a href="https://www.instagram.com/prada/?hl=pt"> <FaInstagram/> </a>  
      </div>
      <div className="iconst">
   <a href="https://twitter.com/prada"> <AiOutlineTwitter/> </a> 
      </div>
      <div className="iconsf">
    <a href="https://www.facebook.com/Prada/ "><FaFacebookF/> </a>
      </div>
      <div className="air">
       <Link to="/form"> <BiSend/> </Link> 
     
      </div>
      <p id="wnt">want to hire our services?</p>
      </body>
      </>
    );
  
  }