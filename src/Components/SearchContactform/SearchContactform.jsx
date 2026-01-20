import React from 'react'
import './SearchContactform.css'

export default function SearchContactform() {
    return (
        <div className="search-filter-container">
            <div className="search-filter-wrapper">
                <button className="search-icon-btn">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><path fill="currentColor" d="M10,18.182c-4.513,0-8.182-3.668-8.182-8.182S5.487,1.818,10,1.818c4.513,0,8.182,3.668,8.182,8.182 S14.513,18.182,10,18.182z M10,0C4.477,0,0,4.477,0,10s4.477,10,10,10c2.39,0,4.585-0.835,6.315-2.227l4.981,5.086l1.373-1.345 l-4.939-5.044C19.231,14.654,20,12.432,20,10C20,4.477,15.523,0,10,0z"></path></svg>
                </button>
                <input
                    type="text"
                    placeholder="Busca un chat o inicia uno nuevo."
                    className="search-input"
                />
            </div>
            <button className="filter-icon-btn">
                <svg viewBox="0 0 24 24" height="20" width="20" preserveAspectRatio="xMidYMid meet" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><path fill="currentColor" d="M10,18.182c-4.513,0-8.182-3.668-8.182-8.182S5.487,1.818,10,1.818c4.513,0,8.182,3.668,8.182,8.182 S14.513,18.182,10,18.182z M10,0C4.477,0,0,4.477,0,10s4.477,10,10,10c2.39,0,4.585-0.835,6.315-2.227l4.981,5.086l1.373-1.345 l-4.939-5.044C19.231,14.654,20,12.432,20,10C20,4.477,15.523,0,10,0z"></path></svg>
            </button>
        </div>
    )
}
