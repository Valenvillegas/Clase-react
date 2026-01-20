import React, { useContext } from 'react'
import MessagesItem from '../MessagesItem/MessagesItem'
import './MessagesList.css'
import { ContactDetailContext } from '../../Contexts/ContactDetailContext'

export default function MessagesList() {
    const { contactSelected } = useContext(ContactDetailContext)
    if (contactSelected && contactSelected.messages.length === 0) {
        return <div className="messages-list-container">No hay mensajes</div>
    }
    return (
        <div className="messages-list-container">
            {contactSelected && contactSelected.messages.map((messages) => {
                return (
                    <MessagesItem key={messages.message_id} messages={messages} />
                )
            })}
        </div>
    )
}
