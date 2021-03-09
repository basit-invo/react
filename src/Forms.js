import React, { useState } from 'react';
import db from './firebase';

function signUpForm() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    var data = {
      Name: name,
      Gender: gender,
      Message: message,
    };
    db.collection('users')
      .add(data)
      .then(() => {
        alert('data added!!!');
        setName('');
        setGender('');
        setMessage('');
      });
  }

  return (
    <form className="w-1/4 m-auto" onSubmit={handleSubmit}>
      <input
        name="name"
        className="border w-full m-2 p-1"
        placeholder="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      Male
      <input
        className="m-1"
        value="male"
        name={gender}
        type="radio"
        onChange={(e) => setGender(e.target.value)}
      />
      Female
      <input
        className="m-1"
        value="femlae"
        name={gender}
        type="radio"
        onChange={(e) => setGender(e.target.value)}
      />
      <textarea
        name="message"
        className="border w-full m-2 p-1"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
      />
      <input className="border w-full m-2 p-1" type="submit" value="Submit" />
    </form>
  );
}

export default signUpForm;
