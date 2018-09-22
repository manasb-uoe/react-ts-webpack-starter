import * as React from 'react';
import { App, Title } from '../src/app';
import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App />', () => {
    it('should display title', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Title).length).toBe(1);
    });
});