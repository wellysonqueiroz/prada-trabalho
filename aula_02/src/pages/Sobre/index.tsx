import fundo from "../../img/fashion.png"
import {AiOutlineMail} from 'react-icons/ai'
import img from "../../img/prada.png"
import "./sobre.css"

export const Sobre= () =>{
  return (
    <> 
     <img src={img} alt="" className="logoform"/>

    <div className="faixa">
  <h2 id="sobreh1">
WHAT IS PRADA?</h2>
  <p id="oqe">specializes in luxury items for men and women. 
  It started in Milan and began to spread in Europe and America. 
  Rich people wear prada.</p>
<br />
<p id='email'>pradaiscompany@gmail.com</p>
<div className="iconsG">
  <AiOutlineMail/>
      </div>
      <img src={fundo} alt="" className="slaa"/>
    
</div>
    </>
  )

}