import React from 'react';
import './Input.css';
export function Input({ type, style, label, value, onChange, placeholder, isError }) {
    return (
        <div className="input">
            <label className="input__label">{label}</label>
            <input
            className="form-control"
            type={type} 
            value={value}
            style={{ ...style, border: isError ? '2px solid red' : undefined}}
            onChange={onChange}
            placeholder={placeholder}
            />
        </div>
    )
}