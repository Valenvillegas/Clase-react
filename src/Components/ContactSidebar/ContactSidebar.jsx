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
                <div>
                    <span><i className="bi bi-three-dots-vertical"></i></span>
                </div>
            </div>
            <SearchContactform />
            <ContactList />
        </div>
    )
}