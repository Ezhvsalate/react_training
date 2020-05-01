import React from "react";
import classes from './MenuToggle.module.css'


const MenuToggle = props => {
    const cls = [
        classes.MenuToggle,
        'fa',
        props.isOpen ? 'fa-times ' + classes.open : 'fa-bars'
    ];

    return (<i onClick={props.onToggle} className={cls.join(' ')}/>)
};

export default MenuToggle