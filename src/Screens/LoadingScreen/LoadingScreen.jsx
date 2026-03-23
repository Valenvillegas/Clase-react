import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
    return (
        <div className="loading-container">
            <div className="loading-logo-wrapper">
                {/* Modern WhatsApp Logo */}
                <svg viewBox="0 0 24 24" className="whatsapp-anim-logo" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.488-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    />
                </svg>
                {/* A subtle loading progress bar typical of whatsapp web loading */}
                <div className="progress-bar-container">
                    <div className="progress-bar"></div>
                </div>
            </div>

            <div className="loading-bottom-container">
                <div className="from-text-container">
                    <span className="icon-lock">
                        <svg viewBox="0 0 12 15" width="10" height="13" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 1.455c-1.59 0-2.887 1.282-2.887 2.85V6.82h5.775V4.305c0-1.568-1.298-2.85-2.888-2.85zM1.84 6.82v-2.515C1.84 2.022 3.7 0 6 0s4.16 2.022 4.16 4.305V6.82c.905 0 1.64.726 1.64 1.62v4.94C11.8 14.27 11.065 15 10.16 15H1.84C.935 15 .2 14.274.2 13.38V8.44c0-.894.735-1.62 1.64-1.62z" fill="currentColor"/>
                        </svg>
                    </span>
                    <span className="from-text">End-to-end encrypted</span>
                </div>
                <div className="meta-container">
                    <span className="from-text-small">from</span>
                    <div className="meta-logo-wrapper">
                        <svg className="meta-icon" viewBox="0 0 35 18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 2C7.5 2 5 4.5 5 8C5 11.5 7.5 14 11 14C13.5 14 15.5 12.5 16.5 10.5C17.5 12.5 19.5 14 22 14C25.5 14 28 11.5 28 8C28 4.5 25.5 2 22 2C19.5 2 17.5 3.5 16.5 5.5C15.5 3.5 13.5 2 11 2 Z M22 11.5C20.5 11.5 19.5 10.5 19.5 9C19.5 7.5 20.5 6.5 22 6.5C23.5 6.5 24.5 7.5 24.5 9C24.5 10.5 23.5 11.5 22 11.5 Z M11 11.5C9.5 11.5 8.5 10.5 8.5 9C8.5 7.5 9.5 6.5 11 6.5C12.5 6.5 13.5 7.5 13.5 9C13.5 10.5 12.5 11.5 11 11.5 Z" fill="currentColor"/>
                        </svg>
                        <span className="meta-text">Meta</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
