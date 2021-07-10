import React from 'react'
import "../styles/emailrow.css"
import Checkbox from "@material-ui/core/Checkbox"
import {IconButton} from "@material-ui/core"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined"
import {useHistory} from "react-router-dom"

/**Los parametros que recibira la función EmailRro son con respecto
    a cada correo, es decir, id, titulo, asunto, descripción y hora +
    Onclick para ejecutar la funcion onHistory y montar la pagina (correo)
    a la que se desea acceder 
*/
  function Emailrow({id, titulo, asunto, descrip, hora}){

    const history = useHistory();

    return(
        <div onClick={() => history.push("/mail")}className="emailrows">
            <div className="emailrow-op">
                <Checkbox/>
                <IconButton>
                    <StarBorderOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlinedIcon/>
                </IconButton>
            </div>
            <h3 className="emailrow-titulo">
                {titulo}
            </h3>
            <div className="emailrow-msm">
                <h4>{asunto}{" "}
                    <span className="emailrow-descript">-
                        {" "}{descrip}
                    </span>
                </h4>
            </div>
            <p className="emailrow-hora">
                {hora}
            </p>
        </div>
    )
}

export default Emailrow;