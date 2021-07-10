import React from 'react'
import "../styles/header.css"
import {Avatar, IconButton} from "@material-ui/core"
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown"
import {Button} from "@material-ui/core"
import AppsIcon from "@material-ui/icons/Apps"
import NotificationIcon from "@material-ui/icons/Notifications"
import googleimg from "../images/google1.png"
import photo from "../images/perfil.jpeg"
//import { GlButton } from '@gitlab/ui';

function header(){
    return (
        <div className="header">
            {/* Sección izquierda del header*/}
            <div className="parte-izq">
                <img src={googleimg} alt="logo_gmail" className="icon"></img>
            </div>
            
            <div className="middle">
                <div className="finder">
                    <input type="text"></input>
                    <ArrowDropDownIcon className="buscar_input"/>   
                </div>
                <div>
                    <Button variant="contained" color="primary" className="btnfind">Buscar</Button>
                </div>
            </div>

            <div className="parte-der">
                <p>+UserName</p>
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <NotificationIcon/>
                </IconButton>
                <Avatar variant="square" src={photo}/>
            </div>
        </div>
    );
}

export default header;