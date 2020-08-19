import React from 'react'; 
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SelectNewTagImage from './SelectNewTagImage';

configure({adapter: new Adapter()});

describe('<SelectNewTagImage />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<SelectNewTagImage />);
        wrapper.setProps({
            listTags: [
                {"id":1,"label":"Abstract"},
                {"id":2,"label":"Typography"},
                {"id":3,"label":"Graffiti"},
                {"id":5,"label":"Realism"}
            ]
        });
    });

    it('should render a <select> element', () => {
        expect(wrapper.contains(<select></select>)).toEqual(true);
    });
})