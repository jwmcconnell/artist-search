import React from 'react';
import { shallow } from 'enzyme';
import ArtistList from './ArtistList';

describe('ArtistList component', () => {
  it('renders ArtistList', () => {
    const wrapper = shallow(<ArtistList artistsData={[]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
