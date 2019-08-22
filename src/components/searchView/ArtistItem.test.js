import React from 'react';
import { shallow } from 'enzyme';
import ArtistItem from './ArtistItem';

describe('ArtistItem component', () => {
  it('renders ArtistItem', () => {
    const wrapper = shallow(<ArtistItem 
      artist={{ name: 'name', id: 'id' }}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
