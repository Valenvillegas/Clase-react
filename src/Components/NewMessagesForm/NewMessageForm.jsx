import React, { useContext, useState } from 'react'
import { ContactContexts } from '../../Contexts/ContactContexts'
import { ContactDetailContext } from '../../Contexts/ContactDetailContext'

const NewMessageForm = () => {
    const initialState = {
        new_message: ''
    }
    const [formState, setFormState] = useState(initialState)

    function onUpdateImput(event){
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
    const {addNewMessage, contactSelected} = useContext(ContactDetailContext)
    
        function sendMessage(event) {
        event.preventDefault()
        addNewMessage(formState.new_message)
        setFormState(initialState)
    }
    return (
        <form onSubmit={sendMessage}>
            <label >Ingresa tu mensaje</label>
            <textarea name="new_message" onChange={onUpdateImput} value={formState.new_message} ></textarea>
            <button>Enviar</button>
        
        </form>
    )
}

export default NewMessageForm