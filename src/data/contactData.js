const contacts_data = [
    {
        contact_id: 1,
        contact_name: 'Laura',
        contact_avatar: 'https://www.seoptimer.com/storage/images/2014/08/no-con-la-mascota.jpg',
        last_message_created_at: new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit' }).format(new Date()),
        last_message_content: 'Que tal',
        last_message_status: 'NOT_RECEIVED', /* 'SEEN' | 'UNSEEN' */
        last_time_online: '10:00 Am',
        last_message_send_by_me: false,
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
        last_message_send_by_me: true,
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
        last_message_send_by_me: false,
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
    },
  
    {
        contact_id: 4,
        contact_name: 'Martín',
        contact_avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        last_message_created_at: new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit' }).format(new Date()),
        last_message_content: 'Dale, mañana seguimos con eso sin problema',
        last_message_status: 'SEEN',
        last_time_online: '11:30 Am',
        last_message_send_by_me: true,
        messages: [
            {
                message_id: 1,
                message_content: 'Che, estuve revisando el proyecto y creo que habría que mejorar la validación del formulario.',
                message_status: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            },
            {
                message_id: 2,
                message_content: 'Sí, yo también lo noté. Sobre todo cuando el usuario envía campos vacíos.',
                message_status: 'SEEN',
                message_created_at: new Date(),
                send_by_me: true
            },
            {
                message_id: 3,
                message_content: 'Exacto, porque ahora deja pasar mensajes vacíos y rompe un poco la experiencia.',
                message_status: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            },
            {
                message_id: 4,
                message_content: 'Bueno, mañana lo vemos tranquilos y lo dejamos bien prolijo.',
                message_status: 'SEEN',
                message_created_at: new Date(),
                send_by_me: true
            }
        ]
    },

   {
    contact_id: 5,
    contact_name: 'Ana',
    contact_avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
    last_message_created_at: new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit' }).format(new Date()),
    last_message_content: 'Buenísimo, entonces mañana lo entregamos',
    last_message_status: 'SEEN',
    last_time_online: '4:10 Pm',
    last_message_send_by_me: true,
    messages: [
        {
            message_id: 1,
            message_content: 'Che, ¿ya viste la consigna del trabajo práctico?',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: false
        },
        {
            message_id: 2,
            message_content: 'Sí, la leí recién. Es bastante larga pero se entiende.',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: true
        },
        {
            message_id: 3,
            message_content: 'Básicamente tenemos que hacer una app o sistema web y documentarlo todo.',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: false
        },
        {
            message_id: 4,
            message_content: 'Claro, yo estaba pensando en usar el chat que ya tenemos avanzado.',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: true
        },
        {
            message_id: 5,
            message_content: 'Me parece re bien. Además ya tiene login, estados y manejo de usuarios.',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: false
        },
        {
            message_id: 6,
            message_content: 'Exacto. Habría que agregar una buena explicación de la arquitectura y los estados.',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: true
        },
        {
            message_id: 7,
            message_content: '¿Cómo nos dividimos las tareas entonces?',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: false
        },
        {
            message_id: 8,
            message_content: 'Yo puedo encargarme del código y vos de la documentación.',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: true
        },
        {
            message_id: 9,
            message_content: 'Dale, yo hago introducción, objetivos, usuarios y casos de uso.',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: false
        },
        {
            message_id: 10,
            message_content: 'Perfecto. Yo voy a mejorar la validación para que no se envíen mensajes vacíos.',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: true
        },
        {
            message_id: 11,
            message_content: 'Eso está bueno aclararlo como una mejora de experiencia de usuario.',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: false
        },
        {
            message_id: 12,
            message_content: 'Sí, incluso lo podemos mostrar con un ejemplo en la documentación.',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: true
        },
        {
            message_id: 13,
            message_content: '¿Para cuándo lo tenemos que entregar?',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: false
        },
        {
            message_id: 14,
            message_content: 'Mañana a última hora, así que estamos bien de tiempo.',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: true
        },
        {
            message_id: 15,
            message_content: 'Buenísimo, hoy avanzo bastante con el PDF entonces.',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: false
        },
        {
            message_id: 16,
            message_content: 'Yo termino el chat y después te paso capturas.',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: true
        },
        {
            message_id: 17,
            message_content: 'Dale, así las agrego como evidencia del funcionamiento.',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: false
        },
        {
            message_id: 18,
            message_content: 'Listo entonces, cualquier cosa nos avisamos.',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: true
        },
        {
            message_id: 19,
            message_content: 'Buenísimo, entonces mañana lo entregamos',
            message_status: 'SEEN',
            message_created_at: new Date(),
            send_by_me: true
        }
    ]
},

    {
        contact_id: 6,
        contact_name: 'Profesor López',
        contact_avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
        last_message_created_at: new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit' }).format(new Date()),
        last_message_content: 'Muy buen avance, sigan así',
        last_message_status: 'SEEN',
        last_time_online: '8:00 Am',
        last_message_send_by_me: false,
        messages: [
            {
                message_id: 1,
                message_content: 'Buen día, profe. Queríamos mostrarle el avance del proyecto del chat.',
                message_status: 'SEEN',
                message_created_at: new Date(),
                send_by_me: true
            },
            {
                message_id: 2,
                message_content: '¿Ya tienen implementado el manejo de estados?',
                message_status: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            },
            {
                message_id: 3,
                message_content: 'Sí, usamos estados para evitar mensajes vacíos y manejar vistos.',
                message_status: 'SEEN',
                message_created_at: new Date(),
                send_by_me: true
            },
            {
                message_id: 4,
                message_content: 'Muy buen avance, sigan así',
                message_status: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    },

    {
        contact_id: 7,
        contact_name: 'Soporte Técnico',
        contact_avatar: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png',
        last_message_created_at: new Intl.DateTimeFormat('es-ES', { hour: '2-digit', minute: '2-digit' }).format(new Date()),
        last_message_content: 'El problema quedó solucionado correctamente',
        last_message_status: 'SEEN',
        last_time_online: '6:40 Pm',
        last_message_send_by_me: false,
        messages: [
            {
                message_id: 1,
                message_content: 'Hola, tenemos un problema con el envío de mensajes vacíos.',
                message_status: 'SEEN',
                message_created_at: new Date(),
                send_by_me: true
            },
            {
                message_id: 2,
                message_content: 'Deben validar el contenido antes de enviar el mensaje.',
                message_status: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            },
            {
                message_id: 3,
                message_content: 'El problema quedó solucionado correctamente',
                message_status: 'SEEN',
                message_created_at: new Date(),
                send_by_me: false
            }
        ]
    }
]

    


export default contacts_data