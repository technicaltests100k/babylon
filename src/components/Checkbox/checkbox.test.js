import React from 'react';
import Checkbox from './';

/**
* Test for <Checkbox /> component.
* @test {Checkbox}
*/
const props = {
  checked: false,
  extendStyle: 'classToExtend'
};

describe('<Checkbox />', () => {
  it('should render Checkbox with all the correct props and no icon', () => {
    const wrapper = render(<Checkbox {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Checkbox and show the icon', () => {
    const wrapper = render(<Checkbox {...props} checked />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update the state when clicked multiple times', () => {
    const wrapper = shallow(<Checkbox {...props} />);

    expect(wrapper.find('svg').exists()).toEqual(false);

    wrapper.simulate('click');

    expect(wrapper.find('svg').exists()).toEqual(true);

    wrapper.simulate('click');

    expect(wrapper.find('svg').exists()).toEqual(false);
  });
});
