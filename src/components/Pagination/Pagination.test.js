import React from 'react';
import { shallow } from 'enzyme';
import { Pagination } from './Pagination';

describe('<Pagination />', () => {
    describe('when props are passed', () => {
        it('should render component', () => {
            const wrapper = shallow(<Pagination pageSize={10} count={100} />);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when no page size is not valid', () => {
        it('should not render component', () => {
            const wrapper = shallow(<Pagination pageSize={0} count={100} />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});
