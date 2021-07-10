import React from 'react'
import "../styles/sendmail.css"
import CloseIcon from "@material-ui/icons/Close"
import { Button } from "@material-ui/core"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import {closeSendMessage} from "../features/mailSlice"

/**Función para mostrar el componente para redactar un correo teniendo en cuenta de mostrar 
 * una advertencia o error si alguno el correo, asunto o mensaje no han sido escritos
 */
function SendMail(){

    const {register, handleSubmit, formState :{errors} } = useForm();
    const onSubmit = (formData) =>{
        
        console.log(formData);
        /** useDispatch funciona como la funcion Push -> un nuevo correo a la base de datos */
    };

    const dispatch = useDispatch();

    return(
        <div className="sendmail">
            <div className="sendmail-header">
                <h3>Nuevo Mensaje</h3>
                <CloseIcon 
                onClick={() => dispatch(closeSendMessage())}
                className="sendmail-close"/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name="to" 
                    placeholder="Para"
                    type="email"
                    {...register('to',{required: true})}
                />
                {errors.to && <p className="sendMail-error">Escribe un correo</p>}

                <input 
                    name="subject" 
                    placeholder="Asunto"
                    type="text" 
                    {...register ('subject',{required: true})} >
                    
                </input>
                {errors.asunto && <p className="sendMail-error">Escribe un asunto</p>}

                <input 
                    name="message" 
                    placeholder="Escribe tu texto aqui..."
                    type="text"
                    className="sendmail-mess" 
                     {...register ('message', {required: true})}> 
                </input>
                {errors.mensaje && <p className="sendMail-error">Se necesita un mensaje</p>}

                <div className="sendmail-op">
                    <Button className="sendmail-send"
                    variant="contained"
                    color="primary"
                    type="submit">
                    Enviar
                    </Button>
                </div>
            </form>
        </div>
    )
}
export default SendMail;