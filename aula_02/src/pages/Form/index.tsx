import img from "../../img/forms-bro.png"
import "./form.css"
export const Form = () => {
    return (

        <div className="formzin">

        
            <span className="decor"></span>
            <span className="decor1"></span>
            <div className="card">
                <form >
                    <h2><strong>S</strong>ign Up</h2>
                    <input type="text" placeholder="Username" required />
                    <input type="text" placeholder="E-mail" required />
                    <p id="pp">send your message </p>
                    <textarea cols={50} rows={30}></textarea>
                    <br />
                    <button id="salvar">Sign Up</button>
                    <h6>Already have an account? <strong className="signbtn">Sign In</strong></h6>
                </form>
            </div>
            <img src={img} alt="" className="imgct" />

        </div>


    )
}