import React, { use, useContext, useEffect } from 'react'
import { useParams } from 'react-router';
import MessagesList from '../../Components/MessagesList/MessagesList';
import { getContactById } from '../../services/contactService';
import { ContactDetailContext } from '../../Contexts/ContactDetailContext';
import { ContactContexts } from '../../Contexts/ContactContexts';
import NewMessageForm from '../../Components/NewMessagesForm/NewMessageForm';
/* contact_id: 1,
        contact_name: 'Laura',
        contact_avatar: 'https://www.seoptimer.com/storage/images/2014/08/no-con-la-mascota.jpg',
        last_message_created_at: new Date(),
        last_message_content: 'Hola que tal',
        last_message_status: 'NOT_RECEIVED' */
export default function ContactMesaggeScreen() {
    const objetos_paramatros_url = useParams();
    console.log(objetos_paramatros_url)
    const contact_id = objetos_paramatros_url.contact_id
    const { contactSelected } = useContext(
        ContactDetailContext
    )
    const {updateContactById} = useContext(ContactContexts)
    if (!contactSelected) return <div>El contacto no existe</div>
    return (
        <div>
            <h1>Detalle del contacto</h1>
            <h2>
                Nombre:{contactSelected.contact_name}
                
            </h2>
            
            <div>
                <MessagesList />
                <NewMessageForm />
            </div>
        </div>

    )
}
