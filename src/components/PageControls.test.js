import React from 'react';
import { shallow } from 'enzyme';
import PageControls from './PageControls';

describe('PageControls component', () => {
  it('renders PageControls', () => {
    const wrapper = shallow(<PageControls 
      currentPage={1}
      pages={10} 
      handlePageChange={() => {}} 
      disableControls={false}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
