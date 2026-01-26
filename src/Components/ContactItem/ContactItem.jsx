import React from 'react'
import { Link } from 'react-router'
import './ContactItem.css'
import { useContext } from 'react'
import { ThemeContext } from '../../Contexts/ThemeContexts.jsx'
export default function ContactItem(props) {
    const { isDarkmode } = useContext(ThemeContext)
    const contact = props.contact
    return (
        <Link to={`/contact/${contact.contact_id}`} className={`contact-item-link ${isDarkmode ? 'dark-mode' : ''}`}>
            <style>

                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"></link>
            </style>
            <div className="contact-item-container">
                <img src={contact.contact_avatar} alt={contact.contact_name} className="contact-item-avatar" />
                <div className="contact-item-details">
                    <div className="contact-item-header">
                        <h3 className="contact-item-name">{contact.contact_name}</h3>
                        <span className="contact-item-date">{contact.last_message_created_at.toString()}</span>
                    </div>
                    <div className="contact-item-subheader">
                        <span className="contact-item-status">
                            
                            {
                                contact.last_message_send_by_me === true ? contact.last_message_status === 'NOT_RECEIVED' ? <i class="bi bi-check2"></i>  : contact.last_message_status === 'SEEN' ? <i class="bi bi-check2-all" style={{ color: '#007bff' }}></i> :  <i class="bi bi-check2-all"></i>
                                : ''
                            
                            }
                        </span>
                        <p className="contact-item-message">{contact.last_message_content}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
