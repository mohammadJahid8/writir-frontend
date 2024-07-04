import React from 'react'
import rantirLogo from "../../assets/rantirlogoWhite.png"
import branWeld from "../../assets/brandWeild.png"
const BrandWeldButton = () => {
    return (
        <div>
            <img alt="barnd" className='' style={{ height: "19px", width: "19px", }} src={rantirLogo} />
            <img alt="barnd" className='' style={{ width: "108px", height: "25px", objectFit:"contain"}} src={branWeld} />
        </div>
    )
}

export default BrandWeldButton