import React, { useContext, useEffect, useState } from 'react'
import ContactList from '../ContactList/ContactList'
import { getContactsList } from '../../services/contactService'
import SearchContactform from '../SearchContactform/SearchContactform'
import './ContactSidebar.css'
import { ContactContexts } from '../../Contexts/ContactContexts'

export default function ContactSidebar() {
    return (
        <div className='contact-sidebar'>
            <SearchContactform />
            <ContactList />
        </div>
    )
}