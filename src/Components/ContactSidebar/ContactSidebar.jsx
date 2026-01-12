import React, { useContext, useEffect, useState } from 'react'
import ContactList from '../ContactList/ContactList'
import { getContactsList } from '../../services/contactService'
import { ContactContexts } from '../../Contexts/ContactContexts'

export default function ContactSidebar() {
    return (
        <div>
            <ContactList 
            />
        </div>
    )
}