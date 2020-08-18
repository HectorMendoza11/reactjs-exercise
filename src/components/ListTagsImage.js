import React from 'react'

const listTagsImage = (props) => {
    var listImgTags = [];
    if(props.numTags.length <= 0) {
        listImgTags = [{ id: 0, label: 'No Items tagged' }].map(function(el){
            return (<li key={el.id}>{el.label}</li>);
        }, this);
    } else {
        listImgTags = props.numTags.map(function(el){
            return (<li key={el.id}>{el.label}<button onClick={() => props.removeHandler(el.id)}>X</button></li>);
        }, this);
    }
    return (<ul>{listImgTags}</ul>);
};

export default listTagsImage;