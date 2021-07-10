import React from 'react'
import "../styles/sidebar.css"
import gmlogo from "../images/gmail.png"
import EntradaIcon from "@material-ui/icons/Inbox"
import SidebarOpt from "./SidebarOp"
import {Button} from"@material-ui/core"
import StarIcon from "@material-ui/icons/Star"
import PropsIcon from "@material-ui/icons/AccessTime"
import SentIcon from "@material-ui/icons/NearMe"
import DraftIcon from "@material-ui/icons/LabelImportant"
import MoreIcon from "@material-ui/icons/ExpandMore"
import { useDispatch } from "react-redux"
import { openSendMessage } from "../features/mailSlice"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"

/*  Funcion que renderiza las opciones del menu de la izquierda + el boton de redactar y que al ser
    oprimido se muestre el componente de redactar un mensaje*/
function Sidebar(){

    const dispatch = useDispatch();

    /**Para porder cambiar el estado del componente para
    redactar un email cuando se oprima el boton "redactar" */
    return (
        <div className="sidebar">
            <div className="tag">
                <img src={gmlogo} alt="logo-mail"></img>
                <ArrowDropDownIcon className="op-gmail" color="secondary"/>   
            </div>
            <Button 
                variant="contained" 
                className="btnred"
                onClick={() => dispatch(openSendMessage())}>
                Redactar
            </Button>

            <SidebarOpt Icono={EntradaIcon} titulo="Recibidos" dato={2}
            selected={true} />
            <SidebarOpt Icono={StarIcon} titulo="Destacados" dato={2}/>
            <SidebarOpt Icono={PropsIcon} titulo="Propuestos" dato={5}/>
            <SidebarOpt Icono={SentIcon} titulo="Enviados" dato={20}/>
            <SidebarOpt Icono={DraftIcon} titulo="Importantes" dato={12}/>
            <SidebarOpt Icono={MoreIcon} titulo="Mas"/>
            
        </div>
    );
    

}

export default Sidebar;