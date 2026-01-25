import React, { useContext, useEffect, useState } from 'react'
import ContactList from '../ContactList/ContactList'
import { getContactsList } from '../../services/contactService'
import SearchContactform from '../SearchContactform/SearchContactform'
import './ContactSidebar.css'
import { ContactContexts } from '../../Contexts/ContactContexts'

export default function ContactSidebar() {
    return (
        <div className='contact-sidebar'>
            <div className='home-screen-icon-menu'>
                <h1>WhatsApp</h1>
                <div className='home-screen-icon-menu-icons'>
                    <span><i className="bi bi-chat-left-text" title="Nuevo chat"></i></span>
                    <span><i className="bi bi-three-dots-vertical" title="Menu"></i></span>
                </div>
            </div>
            <SearchContactform />
            <ContactList />
        </div>
    )
}