import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange



const Test = () => {
    const [person, setPerson] = useState({ firstName: '', email: '', age: '', city: '', program: '', group: '' });
    const [people, setPeople] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (person.firstName && person.email && person.age && person.city) {
            const newPerson = { ...person, id: new Date().getTime().toString() };
            setPeople([...people, newPerson]);
            setPerson({ firstName: '', email: '', age: '', city: '', program: '', group: '' });
        }
    };
    return (
        <>
            <article className='form'>
                <form>
                    <div className='form-control'>
                        <label htmlFor='firstName'>Name : </label>
                        <input
                            type='text'
                            id='firstName'
                            name='firstName'
                            value={person.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='email'>Email : </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={person.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='age'>Age : </label>
                        <input
                            type='number'
                            id='age'
                            name='age'
                            value={person.age}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='age'>City : </label>
                        <input
                            type='text'
                            id='city'
                            name='city'
                            value={person.city}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='age'>Program : </label>
                        <input
                            type='text'
                            id='program'
                            name='program'
                            value={person.program}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='age'>Group : </label>
                        <input
                            type='text'
                            id='group'
                            name='group'
                            value={person.group}
                            onChange={handleChange}
                        />
                    </div>
                    <button type='submit' className='btn btn-primary' onClick={handleSubmit}>
                        Add person
                    </button>
                </form>
            </article>
            <article>
                {people.map((person) => {
                    const { id, firstName, email, age, city, program, group } = person;
                    return (
                        <div key={id} className='item'>
                            <h4>{firstName}</h4>
                            <p>{email}</p>
                            <p>{age}</p>
                            <p>{city}</p>
                            <p>{program}</p>
                            <p>{group}</p>
                        </div>
                    );
                })}
            </article>
        </>
    );
};

export default Test;

