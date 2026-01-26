import React, { useContext, useState } from 'react'
import { ContactContexts } from '../../Contexts/ContactContexts'
import { ContactDetailContext } from '../../Contexts/ContactDetailContext'
import './NewMessageForm.css'

const NewMessageForm = () => {
    const initialState = {
        new_message: ''
    }
    const [formState, setFormState] = useState(initialState)

    function onUpdateImput(event) {
        const field_name = event.target.name
        const field_value = event.target.value
        setFormState(
            (currentFormState) => {
                return {
                    ...currentFormState,
                    [field_name]: field_value
                }
            }
        )

    }

    const { addNewMessage, contactSelected } = useContext(ContactDetailContext)


    function sendMessage(event) {
        event.preventDefault()
        addNewMessage(formState.new_message)
        setFormState(initialState)
    }
    return (
        <form className="new-message-form" onSubmit={sendMessage}>
            <div className="new-message-input-container">
                <div className="new-message-container-icons">
                    <span><i class="bi bi-plus-lg"></i></span>
                    <span><i class="bi bi-emoji-grin"></i></span>
                </div>
                <label className="visually-hidden">Ingresa tu mensaje</label>
                <textarea
                    className="new-message-input"
                    name="new_message"
                    onChange={onUpdateImput}
                    value={formState.new_message}
                    placeholder="Escribe un mensaje"
                    rows={1}
                ></textarea>
                <button className="new-message-btn" type="submit">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="currentColor"><path d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg>
                </button>
            </div>
        </form>
    )
}

export default NewMessageForm