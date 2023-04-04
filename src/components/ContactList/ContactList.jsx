import React from 'react';
import css from "./ContactList.module.css";
import { Contact } from '../Contact/Contact';

export const ContactList = ({ visibleContacts, onDeleteContact }) => {

    return(
        <div className={css.contact_list__container}>
        <ul>
          <Contact visibleContacts={visibleContacts} onDeleteContact={onDeleteContact} />
        </ul>
      </div>
    );
}

