import React from 'react'
import "../styles/EmailList.css"
import { Checkbox, IconButton } from "@material-ui/core"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import RedoIcon from "@material-ui/icons/Redo"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import SettingsIcon from "@material-ui/icons/Settings"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import Section from "../components/section"
import InboxIcon from "@material-ui/icons/Inbox"
import PeopleIcon from "@material-ui/icons/People"
import LocalOfferIcon from "@material-ui/icons/LocalOffer"
import EmailRow from "../components/Emailrow"
import data from "./database"

/*Funcion que renderiza la lista de emails existentes en la base de datos*/
function EmailList(){
    return(
        <div className="emailList">
            <div className="emailList-set">
                <div className="emailList-up">
                    <div className="emailList-izq">
                        <IconButton>
                            <Checkbox/>
                        </IconButton>
                        <IconButton>
                            <ArrowDropDownIcon/>
                        </IconButton>
                        <IconButton>
                            <RedoIcon/>
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon/>
                        </IconButton>
                    </div>
                    <div className="emailList-der">
                        <IconButton>
                            <ChevronLeftIcon/>
                            <ChevronRightIcon/>
                        </IconButton>
                        <IconButton>
                            <SettingsIcon/>
                        </IconButton>
                     </div>
                </div>
                <div className="emailList-sect">
                    <Section Icono={InboxIcon} titulo="Principal" color="red" selected/>
                    <Section Icono={PeopleIcon} titulo="Social" color="#1A73E8"/>
                    <Section Icono={LocalOfferIcon} titulo="Promociones" color="green"/>
                </div>
                {/**Mapeo del array dentro de la base de datos para mostrar cada elemento */}
                <div className="emailList-list">
                    {data.map((data) =>{
                            return(
                                <EmailRow 
                                    key={data.id}
                                    titulo = {data.titulo}
                                    asunto= {data.asunto}
                                    descrip = {data.descrip}
                                    hora = {data.hora}
                                />
                            );
                        }
                    )}
                    <EmailRow
                        titulo="Twitch"
                        asunto="Hola este es mi twitch"
                        descrip="esta es una prueba"
                        hora="10:01"
                    />
                </div>
            </div>
            
        </div>
        
    );
}

export default EmailList;