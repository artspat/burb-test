import React from 'react';
import { shallow } from 'enzyme';
import { InfoCard } from './InfoCard';

describe('<InfoCard />', () => {
    const info = [
        { title: '1', value: 1 },
        { title: '2', value: 2 },
    ];

    describe('when props are passed', () => {
        it('should render component', () => {
            const wrapper = shallow(<InfoCard title="Info cart" values={info} rating={2} className="css-class" />);
            expect(wrapper).toMatchSnapshot();
        });
    });
    
    describe('when no values passed', () => {
        it('should not render values', () => {
            const wrapper = shallow(<InfoCard title="Info cart" rating={2} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
    
    describe('when no rating passed', () => {
        it('should not render rating', () => {
            const wrapper = shallow(<InfoCard title="Info cart" values={info} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});
