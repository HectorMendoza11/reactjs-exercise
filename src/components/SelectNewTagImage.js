import React from 'react'

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
        <select defaultValue="Select" onChange={props.addHandler}>
            <option>Select</option>
            {listOptTags}
        </select>
    );
}

export default selectNewTagImage;