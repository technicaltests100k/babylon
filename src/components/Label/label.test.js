import React from 'react';
import Label from './';
/**
* Test for <Label /> component.
* @test {Label}
*/
const props = {
  extendStyle: 'classToExtend',
  htmlFor: 'form1',
  form: 'form2'
};

describe('<Label />', () => {
  it('should render Label with all the correct props', () => {
    const wrapper = render(<Label {...props}>Some beaufitl text</Label>);
    expect(wrapper).toMatchSnapshot();
  });
});
