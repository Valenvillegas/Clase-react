import './SupportScreen.css'

export default function SupportScreen() {
  return (
    <div className="support-screen">
      <div className="support-header">
        <h1>Ayuda y Soporte</h1>
      </div>
      <div className="support-content">
        <div className="support-card">
          <h2>Contactar con Soporte</h2>
          <p>
            Si tienes problemas con WhatsApp, por favor revisa nuestra <a href="#" className="support-link">Sección de Preguntas Frecuentes</a>.
          </p>
          <p>
            Para asistencia técnica directa, puedes escribirnos a <a href="mailto:support@whatsapp.com" className="support-link">support@whatsapp.com</a>.
          </p>
          <div style={{ marginTop: '30px', borderTop: '1px solid #e9edef', paddingTop: '20px' }}>
            <strong>Versióm</strong> 2.23.10
          </div>
        </div>
      </div>
    </div>
  )
}
