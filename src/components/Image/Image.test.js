import React from 'react'; 
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Image from './Image';

configure({adapter: new Adapter()});

describe('<Image />', () => {
    const wrapper = shallow(<Image />);
    it('should render a <img /> element', () => {
        expect(wrapper.contains(<img />)).toEqual(true);
    });
})