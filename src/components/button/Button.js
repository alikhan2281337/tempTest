import React from 'react';
import styles from './button.module.css'

const Button = ({onclick}) => {

    return (
        <>
            <button onClick={onclick} className={styles.button}>
                Добавить
            </button>
        </>
    );
};

export default Button;