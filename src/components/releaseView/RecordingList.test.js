import React from 'react';
import { shallow } from 'enzyme';
import RecordingList from './RecordingList';

describe('RecordingList component', () => {
  it('renders RecordingList', () => {
    const wrapper = shallow(<RecordingList recordingsData={[]} artist="jinsang" />);
    expect(wrapper).toMatchSnapshot();
  });
});
