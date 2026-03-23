import React from 'react'
import ContactItem from '../ContactItem/ContactItem'
import { useContext } from 'react'
import './ContactList.css'
import { ContactContexts } from '../../Contexts/ContactContexts'

export default function ContactList() {

    const { contacts, loadingContacts } = useContext(ContactContexts)
    /* 
   Comunicar la lista de contactos al ConctactList component
   Renderizar la lista de contactos (No hacen falta estilos en esta etapa)
       Tener en cuenta el cargando
       Tener en cuenta si la lista esta vacias
   */
    if (loadingContacts) {
        return <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-secondary)' }}>Cargando contactos...</div>
    }
    if (!contacts || contacts.length === 0) {
        return <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-secondary)' }}>No hay contactos</div>
    }
    return (
        <div className='contact-list-container'>
            {
                contacts.map((contact) => {
                    return (
                        <ContactItem key={contact.contact_id} contact={contact} />
                    )
                })
            }
        </div>
    )
}
