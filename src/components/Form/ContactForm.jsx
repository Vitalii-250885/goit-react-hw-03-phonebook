import React, { Component } from 'react';
import css from "./ContactForm.module.css";

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleChange = event => {
        const {name, value} = event.currentTarget
        this.setState({[name]: value})
      }

    

    handleSubmit = event => {
        event.preventDefault();

        const { name, number } = this.state;

        this.props.onSubmit(name, number);

        this.reset();
    }

    reset = () => {
        this.setState({ name: '', number: '', });
    }

    render() {
        return (
            <form className={css.form} onSubmit={this.handleSubmit}>
            <label className={css.label}>Name
            <input
                value={this.state.name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
                className={css.input}
            />
            </label>
            <label className={css.label}>Number
            <input
                value={this.state.number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
                className={css.input}
            />
            </label>
            <button type="submit" className={css.button}>Add contact</button>
        </form>
        )
    }
}