import React from 'react'

import classes from './SelectNewTagImage.css'

const selectNewTagImage = (props) => {
    const listOptTags = props.listTags.map(function(el){
        return (
            <option 
                key={el.id} 
                value={el.id} 
                disabled={props.numTags.find( tag => tag.id === el.id ) ? true : false} >{el.label}</option>
        );
    }, this);
    return (
        <select className={classes.Select} defaultValue="Select" onChange={props.addHandler}>
            <option value="0">Select</option>
            {listOptTags}
        </select>
    );
}

export default selectNewTagImage;