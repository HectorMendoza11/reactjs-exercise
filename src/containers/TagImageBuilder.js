import React, { Component } from 'react';

import ListTagsImage from '../components/ListTagsImage';
import SelectNewTagImage from '../components/SelectNewTagImage';
import Image from '../components/Image/Image';

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
    //     fetch('http://tag').then((response) => {
    //         return response.json()
    //       }).then((res) => {
    //         this.setState({ tags: res })
    //       })

    //     fetch('http://image').then((response) => {
    //         return response.json()
    //       }).then((res) => {
    //         this.setState({ images: res })
    //       })
    // }

    // update(id, data) {
    //     // update entity - PUT
    //     fetch('https://mural/:id/tag/' + id, {
    //         method: 'PATCH',
    //         body: JSON.stringify({
    //          data
    //         })
    //       })
    //         .then(res => res.json())
    //         .then(res => console.log(res))
    //         .catch(err => {
    //             console.error(err)
    //         })
    // }
    // delete(id) {
    //     // delete entity - DELETE
    //     fetch('https://mural/:id/tag/' + id, {
    //             method: 'DELETE',
    //         })
    //         .then(res => res.json()) // or res.text()
    //         .then(res => console.log(res))
    //         .catch(err => {
    //             console.log(err);
    //         });
    // }

    addTagHandler = ( e ) => {
        const addTag = LIST_TAGS.find(tag => tag.id == e.target.value);
        var newArray = this.state.imgTags;
        newArray.push(addTag);
        var aux = {...this.state.image}
        aux[0].tags = newArray;
        this.setState({
            image: aux,
            imgTags: newArray 
        });
        
        //this.update(e.target.value, newArray);
    }

    removeTagHandler = (idx) => {
        let count = this.state.imgTags.length - 1;
        var newArray;
        if ( count <= 0 ) {
            newArray = [];
        } else {
            newArray = this.state.imgTags.filter(item => item.id !== idx)
        }
        var aux = {...this.state.image}
        aux[0].tags = newArray;
        this.setState({
            image: aux,
            imgTags: newArray 
        });

        //this.delete(idx);
    }

    render () { 
        return (
            <div>
                <Image source={this.state.image[0].imageUrl} titleImg={this.state.image[0].title} />
                <SelectNewTagImage listTags={LIST_TAGS} numTags={this.state.imgTags} addHandler={this.addTagHandler} />
                <ListTagsImage numTags={this.state.imgTags} removeHandler={this.removeTagHandler} />
            </div>
        );
    }
}

export default TagImageBuilder;