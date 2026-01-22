const contacts_data = [
    {
        contact_id: 1,
        contact_name: 'Laura',
        contact_avatar: 'https://www.seoptimer.com/storage/images/2014/08/no-con-la-mascota.jpg',
        last_message_created_at: new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit' }).format(new Date()),
        last_message_content: 'Que tal',
        last_message_status: 'NOT_RECEIVED', /* 'SEEN' | 'UNSEEN' */
        last_time_online: '10:00 Am',
        messages: [
            {
                message_id: 1,
                message_content: 'Hola que tal',
                message_status: 'Seen', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date(),
                send_by_me: false
            },
            {
                message_id: 2,
                message_content: 'Todo bien',
                message_status: 'SEEN', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date(),
                send_by_me: true
            },
            {
                message_id: 3,
                message_content: 'Que tal',
                message_status: 'NOT_RECEIVED', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },
    {
        contact_id: 2,
        contact_name: 'Yoda',
        contact_avatar: 'https://static.wikia.nocookie.net/esstarwars/images/4/45/Yoda.jpg/revision/latest?cb=20090507210712',
        last_message_created_at: new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit' }).format(new Date()),
        last_message_content: 'Sabias palabras maestro',
        last_message_status: 'SEEN',/* 'SEEN' | 'UNSEEN' */
        last_time_online: '5:00 Pm',
        messages: [
            {
                message_id: 1,
                message_content: 'Saludar tu debes',
                message_status: 'SEEN', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date(),
                send_by_me: false
            },
            {
                message_id: 2,
                message_content: 'Lo se maestro',
                message_status: 'SEEN', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date(),
                send_by_me: true
            },
            {
                message_id: 3,
                message_content: 'El lado oscuro php es',
                message_status: 'SEEN', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date(),
                send_by_me: false
            },
            {
                message_id: 4,
                message_content: 'Sabias palabras maestro',
                message_status: 'SEEN', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date(),
                send_by_me: true
            },
        ],
    },
    {

        contact_id: 3,
        contact_name: 'C-3PO',
        contact_avatar: 'https://static.wikia.nocookie.net/starwars/images/7/7c/C-3PO.jpg/revision/latest?cb=20090507210712',
        last_message_created_at: new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit' }).format(new Date('2022-07-01T14:00:00.000Z')),
        last_message_content: 'Dale dale',
        last_message_status: 'RECEIVED',/* 'SEEN' | 'UNSEEN' */
        last_time_online: '12:00 Pm',
        messages: [
            {
                message_id: 1,
                message_content: 'Listo de compras',
                message_status: 'SEEN', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date('2022-07-01T13:00:00.000Z'),
                send_by_me: false
            },
            {
                message_id: 2,
                message_content: 'Agua fresca',
                message_status: 'SEEN', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date('2022-07-01T13:30:00.000Z'),
                send_by_me: true
            },
            {
                message_id: 3,
                message_content: 'Dale dale',
                message_status: 'RECEIVED', /* 'SEEN' | 'UNSEEN' */
                message_created_at: new Date('2022-07-01T13:45:00.000Z'),
                send_by_me: false
            }
        ]
    }
]

export default contacts_data