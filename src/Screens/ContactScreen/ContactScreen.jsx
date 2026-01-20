import './ContactScreen.css'

export default function ContactScreen() {
  return (
    <div className="contact-screen-container">
      <div className="contact-screen-header">
        <h1>
          <span className="back-btn">←</span>
          Contactos
        </h1>
      </div>
      <div className="contact-list-body">
        {/* Example separate list items since I don't have the data here */}
        {[1, 2, 3].map(i => (
          <div key={i} className="contact-item-placeholder">
            <div className="avatar-placeholder"></div>
            <div className="info-placeholder" style={{ width: '200px' }}>
              <div style={{ width: '60%' }}></div>
              <div style={{ width: '40%' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
