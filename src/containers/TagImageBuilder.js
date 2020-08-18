import React, { Component } from 'react';

const LIST_TAGS = [
    {"id":1,"label":"Abstract"},
    {"id":2,"label":"Typography"},
    {"id":3,"label":"Graffiti"},
    {"id":5,"label":"Realism"}
];

const LIST_IMGS = [
    { "tags": 
        [
            {"id": 5, "label": "Realism"}, 
            {"id": 1, "label": "Abstract"} 
        ],
      "createdAt": 1568044681586, 
      "updatedAt": 1568044681586, 
      "id": 6788, 
      "title": "mural4",
      //"imageUrl": "https://signned.url.com", 
      "imageUrl": "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg",
      "thumbnailUrl": "https://signned.url.com"
    }
]

class TagImageBuilder extends Component {
    state = {
        image: [
            { "tags": 
                [
                    {"id": 5, "label": "Realism"}, 
                    {"id": 1, "label": "Abstract"} 
                ],
              "createdAt": 1568044681586, 
              "updatedAt": 1568044681586, 
              "id": 6788, 
              "title": "mural4",
              //"imageUrl": "https://signned.url.com", 
              "imageUrl": "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg",
              "thumbnailUrl": "https://signned.url.com"
            }
        ],
        imgTags: LIST_IMGS[0].tags
    }
    
    // getting the information from the endpoint
    // componentWillMount() {
    //     fetch('http://GET /tag').then((response) => {
    //         return response.json()
    //       }).then((res) => {
    //         this.setState({ tags: res })
    //       })

    //     fetch('http://GET /image').then((response) => {
    //         return response.json()
    //       }).then((res) => {
    //         this.setState({ images: res })
    //       })
    // }

    addTagHandler = ( e ) => {
        const addTag = LIST_TAGS.find(tag => tag.id == e.target.value);
        var newArray = this.state.imgTags;
        newArray.push(addTag);
        this.setState({
            image: [...this.state.image, { "tags": newArray }],
            imgTags: newArray 
        });
    }

    removeTagHandler = (idx) => {
        let count = this.state.imgTags.length - 1;
        var newArray;
        if ( count <= 0 ) {
            newArray = [];
        } else {
            newArray = this.state.imgTags.filter(item => item.id !== idx)
        }
        this.setState({ 
            image: [...this.state.image, { "tags": newArray }], 
            imgTags: newArray 
        });
    }

    render () { 
        let numTags = this.state.imgTags;
        const listOptTags = LIST_TAGS.map(function(el){
            return (
                <option 
                    key={el.id} 
                    value={el.id} 
                    disabled={numTags.find( tag => tag.id === el.id ) ? true : false} >{el.label}</option>
            );
        }, this);

        var listImgTags = [];
        if(numTags.length <= 0) {
            listImgTags = [{ id: 0, label: 'No Items tagged' }].map(function(el){
                return (<li key={el.id}>{el.label}</li>);
            }, this);
        } else {
            listImgTags = numTags.map(function(el){
                return (<li key={el.id}>{el.label}<button onClick={() => this.removeTagHandler(el.id)}>X</button></li>);
            }, this);
        }

        return (
            <div>
                <img width="400" src={this.state.image[0].imageUrl} alt={this.state.image[0].title} />
                <select defaultValue="Select" onChange={this.addTagHandler}>
                    <option>Select</option>
                    {listOptTags}
                </select>
                <ul>{listImgTags}</ul>
            </div>
        );
    }
}

export default TagImageBuilder;