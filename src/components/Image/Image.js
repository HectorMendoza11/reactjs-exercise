import React from 'react';

import classes from './Image.css'

const Image = (props) => (
    <div className={classes.Image}>
        <img src={props.source} alt={props.titleImg} />
    </div>
);

export default Image;