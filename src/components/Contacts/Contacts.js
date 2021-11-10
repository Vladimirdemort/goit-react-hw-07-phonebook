import React from 'react'

export default class Contacts extends React.Component {
    render() {

        const { contactData } = this.props;
        
        return (
            <ul>
                {contactData.map((contact) => (
                    <li key={contact.id}>
                        <p>{contact.name}</p><span>{contact.number}</span>
                    </li>
                ))}
            </ul>
        )
    
    }
    }


