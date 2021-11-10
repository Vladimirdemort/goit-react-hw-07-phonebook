
import React, { Component } from 'react'


// export default  function InputArea({name, writeContact, contactSubmit}) {
// return(
// <form onSubmit={contactSubmit}>
//     <label>
//         <input
//         type="text"
//         name="name"
//         value={name}
//         onChange={writeContact}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//         required
//         />
        
//     </label>
//     <button type='submit'>Add Contact</button>
// </form>)
// }

class InputArea extends React.Component {
    state = {
        name: '',
        number: ''
    }

    
  contactSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state)

    this.reset();
  }

  writeContact = event => {
      const {name,value} = event.target
this.setState(
  {[name]:[value]}
)
  }

  reset = () => {
      this.setState({ 
          name: '',
          number: '' })
  }


    render() { 
        return <form onSubmit={this.contactSubmit}>
        <label> Name
            <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.writeContact}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            />
            
        </label>
        <label> Number
            <input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.writeContact}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                />
            </label>
        <button type='submit'>Add Contact</button>
    </form>;
    }
}
 
export default InputArea;