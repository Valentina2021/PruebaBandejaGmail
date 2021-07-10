import React from 'react';
import Header from './components/header';
import Sidebar from './components/Sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Mail from './components/Mail';
import EmailList from './components/EmailList';
import './App.css';
import SendMail from './components/SendMail';
import {useSelector} from "react-redux";
import {selectSendMessageIsOpen} from "./features/mailSlice"

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  return (
    <Router>
        <div className="App">
            <Header />
            <div className="body-app">
              <Sidebar/>
              {/** Permite redireccionar la ruta al momento 
               * de seleccionar un correo ej, localhost/email1
               * a localhost
              */}
              <Switch>
                {/** Si la ruta es .../mail entonces muestre el componente
                 * de correo correspondiente o si se encuentra en la 
                 * Homepage entonces muestre la lista de correos
                 */}
                <Route path="/mail">
                  <Mail/>
                </Route>
                <Route path="/">
                  <EmailList/>
                </Route>
              </Switch>
            </div>
            {sendMessageIsOpen && <SendMail/>}
        </div>
    </Router>
    
  );
}

export default App;
