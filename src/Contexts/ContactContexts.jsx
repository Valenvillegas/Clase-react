import { createContext } from "react";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import { getContactsList } from "../services/contactService";


export const ContactContexts = createContext();

export default function ContactContextsProvider(){
    const [contacts, setContacts] = useState(null)
    const [loadingContacts, setLoadingContacts] = useState(true)

    function loadContacts (){
        setLoadingContacts(true)
        setTimeout(
            function (){
                const contacts_list_response = getContactsList()
                setContacts(contacts_list_response)
                setLoadingContacts(false)
            },
            2000
        )
    }

    useEffect(
        loadContacts,
        []
    )

    console.log(
        'Cargando', loadingContacts,
        'Contact list', contacts
    )

    function getContactById (contact_id){
        if (!contacts|| loadingContacts){
            return
        } 
        for(const contact of contacts){
            if(Number(contact_id) === Number(contact.contact_id)){
                return contact
            }
        }
    }

    function updateContactById (
        update_contact_object,
        contact_id_to_update
    )
    {
        setContacts(
            (currentContactsList) => {
                const updatedContactsList = currentContactsList.map(
                    (contact) => {
                        if (Number(contact.contact_id) === Number(contact_id_to_update)) {
                            return { ...contact, ...update_contact_object }
                        } else {
                            return contact
                        }
                    }
                )
                return updatedContactsList
            }
        )
    }
    console.log("estado global contactos", contacts)
 /* 
    Comunicar la lista de contactos al ConctactList component
    Renderizar la lista de contactos (No hacen falta estilos en esta etapa)
        Tener en cuenta el cargando
        Tener en cuenta si la lista esta vacias
    */
    const providerValues = {contacts, loadingContacts, loadContacts, getContactById, updateContactById}
    return(
        <ContactContexts.Provider value={providerValues}>
            <Outlet/>
        </ContactContexts.Provider>
    )
}