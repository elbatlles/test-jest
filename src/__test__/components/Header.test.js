import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMocks from '../../__mocks__/ProviderMocks';
import Header from '../../components/Header';
import { create } from 'react-test-renderer';
describe('<Header />', () => {
  test('Render del componente', () => {
    const header = shallow(
      <ProviderMocks>
        <Header />
      </ProviderMocks>
    );
    expect(header.length).toEqual(1);
  });

  test('Render del titulo', () => {
    const header = mount(
      <ProviderMocks>
        <Header />
      </ProviderMocks>
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});
describe('Header Snapshot', () => {
  test('Comprobar el Header de snapshot', () => {
    const header = create(
      <ProviderMocks>
        <Header />
      </ProviderMocks>
    );
    expect(header.toJSON()).toMatchSnapshot();
  });
});
