import React from 'react';
import { shallow } from 'enzyme';
import ReleaseList from './ReleaseList';

describe('ReleaseList component', () => {
  it('renders ReleaseList', () => {
    const wrapper = shallow(<ReleaseList releasesData={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
