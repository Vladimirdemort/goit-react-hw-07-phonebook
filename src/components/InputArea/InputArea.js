import React from 'react';
import styles from './InputArea.module.css';
import PropTypes from 'prop-types';

class InputArea extends React.Component {
  state = {
    name: '',
    number: '',
  };

  contactSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };

  writeContact = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={styles.inputForm} onSubmit={this.contactSubmit}>
        <label>
          {' '}
          Name
          <input
            className={styles.inputArea}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.writeContact}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          {' '}
          Number
          <input
            className={styles.inputArea}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.writeContact}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit">Add Contact</button>
      </form>
    );
  }
}

export default InputArea;

InputArea.propTypes = {
  onSubmit: PropTypes.func,
};
