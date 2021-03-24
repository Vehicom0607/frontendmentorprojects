import React from 'react';
import classes from './countdown.module.css'

const Timer = (props) => {
    let value = props.value
    if (props.value < 10) {
        value = `0${props.value}`
    }

    return (
        <div className={classes.Timer}>
            <div className={classes.Box + " " + classes.BoxTop} />
            <div className={classes.Box + " " + classes.OverlayBox} />
            <div className={classes.Box + " " + classes.BoxBottom} />
            <p style={{margin: 0}}>{value}</p>
        </div>
    );
};

export default Timer;
