import React, { use, useContext, useEffect, useState } from 'react'
import './ContactMesaggeScreen.css'
import { useParams, useNavigate } from 'react-router';
import MessagesList from '../../Components/MessagesList/MessagesList';
import { getContactById } from '../../services/contactService';
import { ContactDetailContext } from '../../Contexts/ContactDetailContext';
import { ContactContexts } from '../../Contexts/ContactContexts';
import NewMessageForm from '../../Components/NewMessagesForm/NewMessageForm';
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar';
import AsideMenu from '../../Components/AsideMenu/AsideMenu';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
/* contact_id: 1,
        contact_name: 'Laura',
        contact_avatar: 'https://www.seoptimer.com/storage/images/2014/08/no-con-la-mascota.jpg',
        last_message_created_at: new Date(),
        last_message_content: 'Hola que tal',
        last_message_status: 'NOT_RECEIVED' */
export default function ContactMesaggeScreen() {
    const objetos_paramatros_url = useParams();
    const navigate = useNavigate();
    console.log(objetos_paramatros_url)
    const contact_id = objetos_paramatros_url.contact_id
    const { contactSelected } = useContext(
        ContactDetailContext
    )
    const { updateContactById, loadingContacts } = useContext(ContactContexts)

    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 900);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    if (loadingContacts) {
        return <LoadingScreen />;
    }

    if (!contactSelected) return (
        <div className="contact-message-screen-wrapper" style={{ alignItems: 'center', justifyContent: 'center' }}>
            <h2 style={{ color: 'var(--text-secondary)' }}>El contacto no existe o no se pudo cargar.</h2>
        </div>
    );
    return (
        <div className="contact-message-screen-wrapper">
            <div className="home-screen-content">
                <AsideMenu />
                <div className="sidebar-container">

                    <ContactSidebar />
                </div>
                <div className="chat-screen">
                    <div className="chat-header">
                        {isMobile && (
                            <button className="button-back" onClick={() => navigate('/')}>
                                <i className="bi bi-arrow-left" style={{ fontSize: '24px' }}></i>
                            </button>
                        )}
                        <img src={contactSelected.contact_avatar || 'https://via.placeholder.com/40'} alt="avatar" />
                        <div className="chat-content-span-options">
                            <div className="chat-info">
                                <h3>{contactSelected.contact_name}</h3>
                                <span>últ. vez hoy a la(s) {contactSelected.last_time_online}</span>
                            </div>
                            <div className="chat-options">
                                <div className="div-span-content-call" title="Llamar">
                                    <span><i className="bi bi-camera-video font-size-i"></i></span>
                                    {!isMobile && <span className="icon-caret"><i className="bi bi-caret-down-fill"></i></span>}
                                </div>
                                {isMobile && <span className="span-content" title="Llamada"><i className="bi bi-telephone font-size-i"></i></span>}
                                {!isMobile && <span className="span-content" title="Buscar"><i className="bi bi-search font-size-i"></i></span>}
                                <span className="span-content"><i className="bi bi-three-dots-vertical font-size-i" title="Menú"></i></span>
                            </div>

                        </div>
                    </div>

                    <div className="chat-body">
                        <MessagesList />
                        <NewMessageForm />
                    </div>
                </div>
            </div >
        </div >

    )
}
