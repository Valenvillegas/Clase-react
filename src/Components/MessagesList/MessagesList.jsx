import React, { useContext } from 'react'
import MessagesItem from '../MessagesItem/MessagesItem'
import { ContactDetailContext } from '../../Contexts/ContactDetailContext'

export default function MessagesList() {
    const {contactSelected} = useContext(ContactDetailContext)
    if (contactSelected.messages.length === 0) {
        return <div>No hay mensajes</div>
    }
    return (
        <div>
            messages
            {contactSelected.messages.map((messages) => {
                return (
                    <MessagesItem key={messages.message_id} messages={messages} />      
                )
            })}
        </div>
    )
}
