import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contacts.module.css';

export default function Contacts({ contactData, onContactDelete }) {
  return (
    <ul>
      {contactData.map(contact => (
        <li className={styles.contacts__item} key={contact.id}>
          <p className={styles.contacts__name}>{contact.name}</p>
          <span className={styles.contacts__number}>{contact.number}</span>
          <button
            className={styles.contacts__btn}
            type="button"
            onClick={() => onContactDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

Contacts.propTypes = {
  contactData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ),
  onContactDelete: PropTypes.func,
};
