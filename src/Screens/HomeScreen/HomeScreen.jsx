import React from 'react'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactDetailContext } from '../../Contexts/ContactDetailContext'
import { ContactContexts } from '../../Contexts/ContactContexts'
import { useContext } from 'react'


export default function HomeScreen(props) {
    const {updateContactById, contacts} = useContext(ContactContexts)
    return (
        <div>
            <h1>Pag de inicio</h1>
            
            <ContactSidebar />
            </div>

    )
}
