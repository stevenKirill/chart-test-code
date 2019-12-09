import React, { useState } from 'react';
import { Input } from '../Input/Input'
import './Form.css';


const initialFormValues = {
    name: '',
    city: '',
    birthDate: '',
    job: ''
};

const isValid = (_key, value) => {
    if (value === '') {
        return false;
    }
    return true;
}

export function Form({ onAdd }) {
    const style = {
        width: '300px',
        marginTop: '15px',
        padding: '10px'
    };

    const [formValues, setFormsValues] = useState(initialFormValues);
    const [errors, setErrors] = useState(initialFormValues);

    const setError = (name, value) => {
        setErrors((prev) => ({...prev, [name]: value}))
    };

    const setValues = (name) => {
        return function(value) {
            setFormsValues((prev) => ({...prev, [name]: value}))
            setError(name, null);
        }
    };


    const validateForm = (key, value) => {
        setError(key, !isValid(key, value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formKeys = Object.keys(initialFormValues);
        
        formKeys.forEach(key => validateForm(key, formValues[key]));
        
        if (formKeys.every(key => isValid(key, formValues[key]))) {
            onAdd(formValues);
            setFormsValues(initialFormValues);
        }
    }

    const renderInput = (name, label, placeholder, type = 'text') => {
        return (
            <Input
                type={type}
                style={style}
                label={label}
                placeholder={placeholder}
                isError={errors[name]}
                value={formValues[name]}
                onChange={(event) => setValues(name)(event.target.value)}
            />
        );
    }

    const inputs = [
        {
            name: 'name',
            label: 'Name',
            placeholder: 'type your name',
        },
        {
            name: 'city',
            label: 'City',
            placeholder: 'type your city',
        },
        {
            name: 'birthDate',
            label: 'Birth date',
            placeholder: 'choose your birthDate',
            type: 'date',
        },
        {
            name: 'job',
            label: 'Job',
            placeholder: 'type your job',
        }
    ];

    return (
        <form className="form" onSubmit={handleSubmit}>
            {inputs.map(({ name, label, placeholder, type }) => renderInput(name, label, placeholder, type))}
            <button className="btn btn-outline-dark form__button">Add person</button>
        </form>
    )
}

