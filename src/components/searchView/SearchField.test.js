import React from 'react';
import { shallow } from 'enzyme';
import SearchField from './SearchField';

describe('SearchField component', () => {
  it('renders SearchField', () => {
    const wrapper = shallow(<SearchField 
      searchInput=""
      handleUpdate={() => {}}
      handleSubmit={() => {}}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
