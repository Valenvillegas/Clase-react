import React from 'react'
import { Link } from 'react-router'
import './ContactItem.css'
import { useContext } from 'react'
import { ThemeContext } from '../../Contexts/ThemeContexts.jsx'
export default function ContactItem(props) {
    const { isDarkmode } = useContext(ThemeContext)
    const contact = props.contact
    console.log(isDarkmode)
    return (
        <Link to={`/contact/${contact.contact_id}`} className={isDarkmode ? 'dark-mode' : ''}>
            <div className="contact-item-container">
                <img src={contact.contact_avatar} alt={contact.contact_name} className="contact-item-avatar" />
                <div className="contact-item-details">
                    <div className="contact-item-header">
                        <h3 className="contact-item-name">{contact.contact_name}</h3>
                        <span className="contact-item-date">{contact.last_message_created_at.toString()}</span>
                    </div>
                    <div className="contact-item-subheader">
                        <span className="contact-item-status">{contact.last_message_status}</span>
                        <p className="contact-item-message">{contact.last_message_content}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
