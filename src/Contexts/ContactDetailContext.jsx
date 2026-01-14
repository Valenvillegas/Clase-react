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
    const { getContactById, updateContactById} = useContext(ContactContexts)
    //Esto nos permite caputrar parametros de busqueda en la URL
    const { contact_id } = useParams()
    const contactSelected = getContactById(contact_id)
    function addNewMessage(new_message_text) {
        const new_message =
        {
            message_id: contactSelected.messages.length + 1,
            message_content: new_message_text,
            message_status: 'UNSEEN',
            message_created_at: new Date(),
            send_by_me: true
        }
        updateContactById(
            {
                messages: [...contactSelected.messages, new_message]
            },
            contact_id
        )
    }

    const value = {    
        contactSelected: contactSelected,
        addNewMessage: addNewMessage
    }
    return (
        <ContactDetailContext.Provider value={value}>
            <Outlet />
        </ContactDetailContext.Provider>)
}