import React, { useState } from 'react';
import { Header } from '../Header/Header';
import './Table.css';
import { Row } from '../Row/Row';

export function Table({ data,  removeItem, editItem}) {

    return (
        <table className="table">
            <Header/>
            {data.map((info) => <Row {...info} removeItem={removeItem} editItem={editItem}/>)}
        </table>
    )
}