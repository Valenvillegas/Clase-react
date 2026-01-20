import './MessagesItem.css'

export default function MessagesItem(props) {
    let messages = props.messages
    const isMine = messages.send_by_me

    return (
        <div className={`message-item-container ${isMine ? 'message-mine' : 'message-theirs'}`}>
            <div className={`message-bubble ${isMine ? 'bubble-mine' : 'bubble-theirs'}`}>
                <p className="message-text">{messages.message_content}</p>
                <span className="message-time">
                    {messages.message_created_at ? new Date(messages.message_created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                </span>
            </div>
        </div>
    )
}
