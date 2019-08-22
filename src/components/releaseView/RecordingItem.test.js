import React from 'react';
import { shallow } from 'enzyme';
import RecordingItem from './RecordingItem';

describe('RecordingItem component', () => {
  it('renders RecordingItem', () => {
    const wrapper = shallow(<RecordingItem recording={{}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
