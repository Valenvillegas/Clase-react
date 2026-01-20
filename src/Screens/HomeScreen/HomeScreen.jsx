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
                <div className="sidebar-container">
                    <h1>WhatsApp</h1>
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
