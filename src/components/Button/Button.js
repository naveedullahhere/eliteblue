import React from 'react';
import './Buttons.css';
import { Link } from 'react-router-dom';

export const Button = ({ link, text, type }) => {
    return (
        <Link class={`theme-btn btn-style-${type === "dark" ? "one" : type === "light" ? "two" : "three"}`} to={link ? link : "javascript:void(0)"}>
            <i class="btn-curve"></i>
            <span class="btn-title">{text}</span>
        </Link>
    )
}
