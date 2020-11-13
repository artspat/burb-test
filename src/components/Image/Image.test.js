import React from 'react';
import { shallow } from 'enzyme';
import { Image } from './Image';

describe('<Image />', () => {
    describe('when props are passed', () => {
        it('should render component', () => {
            const wrapper = shallow(<Image image="http://image.url" name="image name" className="css-class" />);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when props are not passed', () => {
        it('should render with default values', () => {
            const wrapper = shallow(<Image />);
            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('when no image url', () => {
        it('should render default url', () => {
            const wrapper = shallow(<Image name="image name" className="css-class" />);
            expect(wrapper).toMatchSnapshot();
        });
    });
});
