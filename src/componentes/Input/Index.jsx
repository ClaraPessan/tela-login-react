import React from "react";
import styles from './Input.module.scss'

export default function Input(props) {
    return (
        <input 
            className={styles.input} 
            type={props.type} 
            value={props.value} 
            onChange={props.onChange}>
        </input>
    )   
}