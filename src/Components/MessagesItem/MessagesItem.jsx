import React from 'react'

export default function MessagesItem(props) {
    let messages = props.messages
    return (
        <div>
            <p>{messages.message_content}</p>
            <p>{messages.send_by_me}</p>

        </div>
    )
}
