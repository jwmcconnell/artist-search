import React from 'react';
import { shallow } from 'enzyme';
import ReleaseItem from './ReleaseItem';

describe('ReleaseItem component', () => {
  it('renders ReleaseItem', () => {
    const wrapper = shallow(<ReleaseItem release={{ 'cover-art-archive': { font: null } }}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
