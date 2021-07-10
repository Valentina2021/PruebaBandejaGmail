import React from 'react'
import "../styles/sidebarop.css"

/*Destructuring -> en vez de utilizar props para la obtención de los datos de la base de datos*/
function SidebarOp({Icono, titulo, dato, selected}){
    return (
        <div className={`sidebars ${selected && "sidebar--active"}`}>
        <Icono/>
        <h3>{titulo}</h3>
        <p>{dato}</p>
        </div>
    );
}
export default SidebarOp;