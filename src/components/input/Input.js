import React from 'react';
import styles from './input.module.css'

const Input = ({type, placeholder, onchange}) => {
    return (
        <>
            <input id='book' onChange={onchange} className={styles.input} type={type} placeholder={placeholder}/>
        </>
    );
};

export default Input;