
import { useContext } from 'react'
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
                    {
                        messages.send_by_me && (
                            messages.message_status === 'NOT_RECEIVED' ? <i className="bi bi-check2"></i> :
                                messages.message_status === 'SEEN' ? <i className="bi bi-check2-all" style={{ color: '#007bff' }}></i> :
                                    <i className="bi bi-check2-all"></i>
                        )
                    }
                </span>
            </div>
        </div>
    )
}
