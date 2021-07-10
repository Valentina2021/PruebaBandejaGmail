import React from 'react'
import "../styles/mail.css"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox"
import ErrorIcon from "@material-ui/icons/Error"
import DeleteIcon from "@material-ui/icons/Delete"
import EmailIcon from "@material-ui/icons/Email"
import WatchLaterIcon from "@material-ui/icons/WatchLater"
import CheckCircleIcon from "@material-ui/icons/CheckCircle"
import LabelImportantIcon from "@material-ui/icons/LabelImportant"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore"
import PrintIcon from "@material-ui/icons/Print"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import { IconButton } from "@material-ui/core"
import {useHistory} from "react-router-dom"

function Mail(){

    const history = useHistory();
    return(
        <div className="mail">
            <div className="mail-tools">
                <div className="opt">
                    <div className="mailt-izq">
                        <IconButton onClick={() => history.push("/")}>
                            <ArrowBackIcon />
                        </IconButton>

                        <IconButton>
                            <MoveToInboxIcon />
                        </IconButton>

                        <IconButton>
                            <ErrorIcon />
                        </IconButton>   

                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                        
                        <IconButton>
                            <EmailIcon />
                        </IconButton>
                        
                        <IconButton>
                            <WatchLaterIcon />
                        </IconButton>

                        <IconButton>
                            <CheckCircleIcon />
                        </IconButton>

                        <IconButton>
                            <LabelImportantIcon />
                        </IconButton>

                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>

                    </div>
                    <div className="mailt-der">
                        <IconButton>
                            <UnfoldMoreIcon />
                        </IconButton>

                        <IconButton>
                            <PrintIcon />
                        </IconButton>

                        <IconButton>
                            <ExitToAppIcon />
                        </IconButton>
                    </div>
                </div>
                
                <div className="mail-body">
                    <div className="mail-bheader">
                        <h2>Twitch</h2>
                        <LabelImportantIcon className="mail-impor"/>
                        <p>Hola este es mi nuevo twitch</p>
                        <p className="mail-ptime">01:00</p>
                    </div>
                   
                    <div className="mail-msm">
                        <p>Bienvenido a mi canal usuario</p>
                    </div>
                </div>
            </div>
             
        </div>
    )
}

export default Mail;