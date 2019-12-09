import React, {useState} from 'react'
import './Row.css';
const getStyle = string => ({background: string === '' ? '#DC3545' : undefined});

export const Row = ({name, city, birthDate, job, id, removeItem, editItem}) => {

    const [view,setView] = useState(true);

    const handleCancel = () => {
        setView(true);
    }

    const handleSave = (item) => {
        editItem({...item, id})
        setView(true);
    }

    if (view) {
        return (
            <tr className="table__row">
                <th className="table__name" style={getStyle(name)}>{name}</th>
                <th className="table__city" style={getStyle(city)}>{city}</th>
                <th className="table__job" style={getStyle(job)}>{job}</th>
                <th className="table__birth" style={getStyle(birthDate)}>{birthDate}</th>
                <th className="table__buttons">
                    <button className="btn btn-danger mr-3" onClick={removeItem.bind(null,id)}>X</button>
                    <button className="btn btn-primary" onClick={() => setView(false)}>Edit</button>
                </th>
            </tr>
        )
    } 
    return (
        <RowEdit name={name} city={city} birthDate={birthDate} job={job} onCancel={handleCancel} onSave={handleSave}/>
    )
}

const RowEdit = ({name, city, birthDate, job, onSave, onCancel}) => {
    const [formValues, setFormsValues] = useState({name,city,birthDate,job});

    const setValues = (name) => {
        return function(event) {
            const {value} = event.target;
            setFormsValues((prev) => ({...prev, [name]: value}))
        }
    };

    return (
        <tr className="table__row__extra">
            <th className="table__name"><input value={formValues.name} onChange={setValues('name')} className="input-group form-control"/></th>
            <th className="table__city"><input value={formValues.city} onChange={setValues('city')} className="input-group form-control"/></th>
            <th className="table__job"><input value={formValues.job} onChange={setValues('job')} className="input-group form-control" /></th>
            <th className="table__birth"><input value={formValues.birthDate} onChange={setValues('birthDate')} className="input-group form-control"/></th>
            <th className="table__buttonsEdit">
                <button className="btn btn-danger mr-3" onClick={() => onSave(formValues)}>Save</button>
                <button className="btn btn-primary" onClick={onCancel}>Cancel</button>
            </th>
        </tr>
    )
}