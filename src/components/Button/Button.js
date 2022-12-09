import React from 'react';
import './Buttons.css';

export const Button = ({ link, text, type }) => {
    return (
        <a class={`theme-btn btn-style-${type === "dark" ? "one" : type === "light" ? "two" : "three"}`} href={link ? link : "javascript:void(0)"}>
            <i class="btn-curve"></i>
            <span class="btn-title">{text}</span>
        </a>
    )
}
