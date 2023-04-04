import React from "react";
import css from "./Contact.module.css";
import PropTypes from 'prop-types';

export const Contact = ({ visibleContacts, onDeleteContact }) => (
    <>
        {visibleContacts.map(({ id, name, number }) => (
            <>
                <li key={id} className={css.contact_item}>
                    <span>{name}: {number}</span>
                    <button className={css.contact_item__button} type="button" onClick={() => onDeleteContact(id)}>Delete</button>
                </li>
            </>
        ))}
    </>
    );

    Contact.propTypes = {
        contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }))
    }