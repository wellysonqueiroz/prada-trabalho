import img from "../../img/prada.png"

import "./home.css"
export const Home = () => {
    return (
        <>

            <div className="bodi">

                <div className="center">
                    <img src={img} alt="" className="logou" />
                    <h3> your best store </h3>
                    <h5>fashion company</h5>
                </div >

                <div className="img1 imgC">
                    <button className="raise">DISCOVER</button>
                    <img src="https://www.prada.com/content/dam/pradanux/home_page/2022/07/co_fw22/no_fw22/mosaic_v2/Card_1_DT.jpg/_jcr_content/renditions/cq5dam.web.1664.1664.webp" alt="prada1" />
                </div>
                <div className="img2 imgC">
                    <button className="raise">DISCOVER</button>
                    <img src="https://www.prada.com/content/dam/pradanux/home_page/2022/07/co_fw22/no_fw22/mosaic_v2/Card_2_DT.jpg/_jcr_content/renditions/cq5dam.web.1664.1664.webp" alt="prada2" />
                </div>
            </div>

        </>
    )
}
