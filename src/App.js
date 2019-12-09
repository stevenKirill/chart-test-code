import React, { useState, useEffect } from 'react';
import './App.css';
import { Form } from './Form/Form';
import { Table } from './Table/Table';

const generateId = () =>  Math.floor(Math.random() * (100 - 1) + 1);

function App() {
  const [data,setData] = useState(() => {
    try {
      const row = JSON.parse(localStorage.getItem('row'));
      return row || [];
    } catch {
      return [];
    }

  });

  useEffect(() => {
    localStorage.setItem('row',JSON.stringify(data));
  },[data])
  const handleAdd = (item) => {
        setData((prevData) => [...prevData, {...item, id: generateId()}])
  }

  const removeItem = (id) => {
    setData((prevData) => prevData.filter(x => x.id != id))
}

const editItem = (item) => {
    setData((prevData) => prevData.map((element) => element.id === item.id ? item : element))
}

  return (
    <div className="wrapper">
      <Table data={data} removeItem={removeItem} editItem={editItem}/>
      <Form onAdd={handleAdd}/>
    </div>
  )
}
export default App;