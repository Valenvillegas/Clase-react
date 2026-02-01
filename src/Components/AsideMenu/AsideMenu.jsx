import React from 'react'
import './AsideMenu.css'

export default function AsideMenu() {
    return (
        <aside className='home-screen-content-menu'>
            <div className='home-screen-content-menu-icons-social'>
                <span className='span-content-icon-chat'><i class="bi bi-chat-left-text-fill"></i></span>
                <span className='span-content-icon-status'><i className="bi bi-plus-circle"></i></span>
                <span className='span-content-icon-diffusion'><i className="bi bi-chat-dots"></i></span>
                <span className='span-content-icon-comunity'><i className="bi bi-people"></i></span>
            </div>
            <div className='home-screen-content-menu-icon-settings'>
                <span className='span-content-icon-gallery'><i className="bi bi-images"></i></span>
                <span className='span-content-icon-settings'><i className="bi bi-gear"></i></span>
                <span className='span-content-icon-profile'><i className="bi bi-person"></i></span>
            </div>
        </aside>
    )
}
