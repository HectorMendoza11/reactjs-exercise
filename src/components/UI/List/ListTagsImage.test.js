import React from 'react'; 
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ListTagsImage from './ListTagsImage';

configure({adapter: new Adapter()});

//var numTags = [0, 1];

describe('<ListTagsImage />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ListTagsImage />);
        wrapper.setProps({
            numTags: [
                {"id": 1, "label": "A"}, 
                {"id": 2, "label": "B"} 
            ]
        });
    })
    it('should render a <ul> element', () => {
        expect(wrapper.contains(<ul></ul>)).toEqual(true);
    });

    it('should render a list of <li> elements', () => {
        expect(wrapper.contains(<li></li>)).toEqual(true);
    });
})