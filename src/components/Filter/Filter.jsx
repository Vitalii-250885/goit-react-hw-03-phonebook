import React from 'react';
import css from "./Filter.module.css";
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
    return(
    <label className={css.filter_lable}> Find contacts by name
        <input type="text" name="filter" value={value} onChange={onChange} />
    </label>
    );
}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
}