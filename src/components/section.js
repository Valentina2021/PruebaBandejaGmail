import React from 'react'
import "../styles/section.css"

function section({Icono, titulo, color, selected}){
    /** Dentro del div, Si el item es seleccionado aplique las propiedades
    del css correspondiete .section--selected */
    return (
        <div 
            className = {`section ${selected && "section--selected"}`}
            style = {{
                borderBottom: `3px solid ${color}`,
                color: `${selected && color}`
            }}
        >
            <Icono />
            <h4>{titulo}</h4>
        </div>
    )
}

export default section;