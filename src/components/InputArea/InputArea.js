import React from 'react';
import { useState } from 'react';

import styles from './InputArea.module.css';
import PropTypes from 'prop-types';

function InputArea({ onSubmit }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contactSubmit = e => {
    e.preventDefault();
    const objName = {
      name,
      phone,
    };
    onSubmit(objName);

    console.log(objName);

    reset();
  };

  const writeContact = event => {
    const inputName = event.target.name;
    const value = event.target.value;
    switch (inputName) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setPhone('');
    setName('');
  };

  return (
    <form className={styles.inputForm} onSubmit={contactSubmit}>
      <label>
        {' '}
        Name
        <input
          className={styles.inputArea}
          type="text"
          name="name"
          value={name}
          onChange={writeContact}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label>
        {' '}
        phone
        <input
          className={styles.inputArea}
          type="tel"
          name="phone"
          value={phone}
          onChange={writeContact}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default InputArea;

InputArea.propTypes = {
  onSubmit: PropTypes.func,
};
