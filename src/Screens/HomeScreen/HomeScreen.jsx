import React from 'react'
import './HomeScreen.css'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactContexts } from '../../Contexts/ContactContexts'
import { useContext } from 'react'


export default function HomeScreen(props) {
    const { updateContactById, contacts } = useContext(ContactContexts)
    return (
        <div className="home-screen">
            <div className="home-screen-content">
                <aside className='home-screen-content-menu'>
                    <div className='home-screen-content-menu-icons-social'>
                        <span className='span-content-icon-chat'><i class="bi bi-chat-left-text-fill " title="Chats" ></i></span>
                        <span className='span-content-icon-status' ><i className="bi bi-plus-circle" title="Estados"></i></span>
                        <span className='span-content-icon -diffusion'><i className="bi bi-chat-dots" title="Canales"></i></span>
                        <span className='span-content-icon-comunity'><i className="bi bi-people" title="Difusion"></i></span>
                    </div>
                    <div className='home-screen-content-menu-icon-settings'>
                        <span className='span-content-icon-gallery'><i className="bi bi-images" title="Fotos y Videos"></i></span>
                        <span className='span-content-icon-settings'><i className="bi bi-gear"></i></span>
                        <span className='span-content-icon-profile'><i className="bi bi-person"></i></span>
                    </div>
                </aside>
                <div className="sidebar-container">
                    <ContactSidebar />
                </div>
                <div className="placeholder-chat">
                    <div style={{ textAlign: 'center' }}>
                        <h1>WhatsApp Web</h1>
                        <p>Envía y recibe mensajes sin necesidad de mantener tu teléfono conectado.</p>
                        <p>Usa WhatsApp en hasta 4 dispositivos vinculados y 1 teléfono a la vez.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}
