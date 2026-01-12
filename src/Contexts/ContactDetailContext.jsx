/* 
Crear el contexto:
Sera un contexto que trabajara a nivel de ruta
Trabajara sobre <Route path='/contact/:contact_id' element={<ContactDetailContext/>}>
Llamara al contact_id de la url usando useParams
Tendra una VARIABLE interna llamada contact_selected (Guardara el contacto seleccionado) 
*/
import { createContext, useContext } from "react";
import { Outlet, useParams } from "react-router";
import { ContactContexts } from "./ContactContexts";

export const ContactDetailContext = createContext(
    {
        contactSelected: null
    }
);
export default function ContactDetailContextProvider() {
    const { getContactById } = useContext(ContactContexts)
    //Esto nos permite caputrar parametros de busqueda en la URL
    const { contact_id } = useParams()
    const contactSelected = getContactById(contact_id)

    const value = {    
        contactSelected: contactSelected }
    return (
        <ContactDetailContext.Provider value={value}>
            <Outlet />
        </ContactDetailContext.Provider>)
}