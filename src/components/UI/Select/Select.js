import React from "react";
import classes from './Select.module.css'

const Select = props => {
    const htmlFor = `${props.label}__${Math.random()}`;
    return (<div className={classes.Select}>
        <label htmlFor={htmlFor}>{props.label}</label>
        <select id={htmlFor}
                value={props.value}
                onChange={props.onChange}>
            {props.options.map((option, index) => {
                return (<option value={option.value} key={`${option.value}__${index}`}>{option.text}</option>)
            })}
        </select>
    </div>)
};

export default Select