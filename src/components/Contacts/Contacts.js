import React from 'react'
import styles from './Contacts.module.css'

export default class Contacts extends React.Component {
    render() {

        const { contactData, onContactDelete } = this.props;
        
        return (
            <ul>
                {contactData.map((contact) => (
                    <li className={styles.contacts__item} key={contact.id}>
                        <p className={styles.contacts__name}>{contact.name}</p><span className={styles.contacts__number}>{contact.number}</span>
                       <button className={styles.contacts__btn} type="button" onClick={ () => onContactDelete(contact.id)}>Delete</button> 
                    </li>
                ))}
            </ul>
        )
    
    }
    }


