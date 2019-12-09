import React from 'react';
import './Header.css';

export function Header () {
    return (
        <tr className="header">
            <th className="header__name">Name</th>
            <th className="header__city">City</th>
            <th className="header__job">Job</th>
            <th className="header__birth">Birth place</th>
            <th className="header__birth">Editing</th>
        </tr>
    )
}