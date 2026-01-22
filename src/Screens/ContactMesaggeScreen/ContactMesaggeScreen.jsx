import React, { use, useContext, useEffect } from 'react'
import './ContactMesaggeScreen.css'
import { useParams } from 'react-router';
import MessagesList from '../../Components/MessagesList/MessagesList';
import { getContactById } from '../../services/contactService';
import { ContactDetailContext } from '../../Contexts/ContactDetailContext';
import { ContactContexts } from '../../Contexts/ContactContexts';
import NewMessageForm from '../../Components/NewMessagesForm/NewMessageForm';
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar';
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
    const { updateContactById } = useContext(ContactContexts)

    if (!contactSelected) return <div>El contacto no existe</div>
    return (
        <div className="home-screen">
            <div className="home-screen-content">
                <div className="sidebar-container">

                    <ContactSidebar />
                </div>
                <div className="chat-screen">
                    <div className="chat-header">
                        <img src={contactSelected.contact_avatar || 'https://via.placeholder.com/40'} alt="avatar" />
                        <div className="chat-info">
                            <h3>{contactSelected.contact_name}</h3>
                            <span>en línea hoy a las {contactSelected.last_time_online}</span>
                        </div>
                    </div>

                    <div className="chat-body">
                        <MessagesList />
                    </div>

                    <div className="chat-footer">
                        <NewMessageForm />
                    </div>
                </div>
            </div>
        </div>

    )
}
