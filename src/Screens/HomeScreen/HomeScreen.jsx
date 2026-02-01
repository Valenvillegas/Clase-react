import React from 'react'
import './HomeScreen.css'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import { ContactContexts } from '../../Contexts/ContactContexts'
import { useContext } from 'react'
import AsideMenu from '../../Components/AsideMenu/AsideMenu'


export default function HomeScreen(props) {
    const { updateContactById, contacts } = useContext(ContactContexts)
    return (
        <div className="home-screen">
            <div className="home-screen-content">
                <AsideMenu />
                <section className="sidebar-container">
                    <ContactSidebar />
                </section>
                <section className="placeholder-chat">
                    <div style={{ textAlign: 'center' }}>
                        <h1>WhatsApp Web</h1>
                        <p>Envía y recibe mensajes sin necesidad de mantener tu teléfono conectado.</p>
                        <p>Usa WhatsApp en hasta 4 dispositivos vinculados y 1 teléfono a la vez.</p>
                    </div>
                </section>
            </div>
        </div>

    )
}
