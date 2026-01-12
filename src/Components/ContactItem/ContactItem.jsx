import React from 'react'
import { Link } from 'react-router'
import './ContactItem.css'
import { useContext } from 'react'
import {ThemeContext} from '../../Contexts/ThemeContexts.jsx'
export default function ContactItem(props) {
    const {isDarkmode} = useContext(ThemeContext)
    const contact = props.contact
    console.log(isDarkmode)
    return (
        <Link to={`/contact/${contact.contact_id}`} className={isDarkmode ? 'dark-mode' : ''}>
            <div >
                <img src={contact.contact_avatar} width={200} />
                <p>{contact.contact_name}</p>
                <p>{contact.last_message_content}</p>
                <p>{contact.last_message_created_at.toString()}</p>
                <p>{contact.last_message_status}</p>
            </div>
        </Link>
    )
}
