import React from 'react';
import { mount } from 'enzyme';
import Profile from '../../components/Profile';
import testData from '../../../data.json';

describe('<Profile />', () => {
  const profile = mount(<Profile profile={testData.data.profile} />);

  test('Profile render', () => {
    expect(profile.length).toEqual(1);
  });

  test('Profile title', () => {
    expect(profile.find('.Profile-title').length).toEqual(1);
  });

  test('Profile have a description', () => {
    expect(profile.find('.Profile-desc').length).toEqual(1);
  });

});
