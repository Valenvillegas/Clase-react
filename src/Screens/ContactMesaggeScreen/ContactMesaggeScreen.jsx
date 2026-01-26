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
                <aside className='home-screen-content-menu'>
                    <div className='home-screen-content-menu-icons-social'>
                        <span className='span-content-icon-chat'><i className="bi bi-chat-right-text-fill"></i></span>
                        <span className='span-content-icon-status'><i className="bi bi-plus-circle"></i></span>
                        <span className='span-content-icon-diffusion'><i className="bi bi-chat-dots"></i></span>
                        <span className='span-content-icon-comunity'><i className="bi bi-people"></i></span>
                    </div>
                    <div className='home-screen-content-menu-icon-settings'>
                        <span className='span-content-icon-gallery'><i className="bi bi-images"></i></span>
                        <span className='span-content-icon-settings'><i className="bi bi-gear"></i></span>
                        <span className='span-content-icon-profile'><i className="bi bi-person"></i></span>
                    </div>
                </aside>
                <div className="sidebar-container">

                    <ContactSidebar />
                </div>
                <div className="chat-screen">
                    <div className="chat-header">
                        <img src={contactSelected.contact_avatar || 'https://via.placeholder.com/40'} alt="avatar" />
                        <div className="chat-content-span-options">
                            <div className="chat-info">
                                <h3>{contactSelected.contact_name}</h3>
                                <span>en línea hoy a las {contactSelected.last_time_online}</span>
                            </div>
                            <div className="chat-options">
                                <div className="div-span-content-call" title="Llamar">
                                    <span><i class="bi bi-camera-video font-size-i"></i></span>
                                    <span><i class="bi bi-caret-down-fill"></i></span>
                                </div>
                                <span className="span-content"><i class="bi bi-search font-size-i" title="Buscar"></i></span>
                                <span className="span-content"><i className="bi bi-three-dots-vertical font-size-i" title="Menú"></i></span>
                            </div>
 
                        </div>
                    </div>

                    <div className="chat-body">
                        <MessagesList />
                        <NewMessageForm />
                    </div>
                </div>
            </div>
        </div>

    )
}
