import React from 'react';
import { shallow } from 'enzyme';
import { Rating } from './Rating';

describe('<Rating />', () => {
    describe('when props are passed', () => {
        it('should render component', () => {
            const wrapper = shallow(<Rating className="css-class" value={3} />);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when props are not passed', () => {
        it('should use default values', () => {
            const wrapper = shallow(<Rating />);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when value is less than 0', () => {
        it('should use 0 as value', () => {
            const wrapper = shallow(<Rating value={-5} />);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when value is higher than 10', () => {
        it('should use 10 as value', () => {
            const wrapper = shallow(<Rating value={15} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});
