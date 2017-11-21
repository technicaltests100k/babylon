import React from 'react';
import Label from './';
import Checkbox from '../Checkbox';
/**
* Test for <Label /> component.
* @test {Label}
*/
const props = {
  extendStyle: 'classToExtend',
  htmlFor: 'form1',
  form: 'form2',
  content: 'a super interesting text'
};

describe('<Label />', () => {
  it('should render Label with all the correct props', () => {
    const wrapper = render(<Label {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Label with the checkbox component', () => {
    const wrapper = render(
      <Label {...props}>
        <Checkbox />
      </Label>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
