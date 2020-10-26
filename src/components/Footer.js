import React from "react";
import '../css/Footer.css'

export const Footer = props => (
    <footer>
        <div className="title">Авторы приложения:</div>
        <div className="authors">
            {props.authors.map(author => (<div className="author-item">{author}</div>))}
        </div>
    </footer>
)