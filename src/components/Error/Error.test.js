import React from 'react';
import { shallow } from 'enzyme';
import { Error } from './Error';

describe('<Error />', () => {
    describe('when props are passed', () => {
        it('should render component', () => {
            const wrapper = shallow(<Error text="error text" />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});
