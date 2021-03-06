import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';




const Inputs = ({tag: Tag, name, label, maxLength}) => {

    return(
    <div className={styles.formItem}>
        <Tag
            className={Tag === 'textarea' ? styles.textarea : styles.input}
            type="text"
            name={name}
            id={name}
            maxLength={maxLength}
            placeholder=" "
        />
        <label className={styles.label} htmlFor={name}>
            {label}
        </label>
        <div className={styles.formItemBar} />
    </div>
    );
}

Inputs.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
}

Inputs.defaultProps = {
    tag: 'input',
    maxLength: 200,
}


export default Inputs;