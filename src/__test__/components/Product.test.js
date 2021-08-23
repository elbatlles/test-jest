import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMocks from '../../__mocks__/ProviderMocks';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('Render del componente Product', () => {
    const product = shallow(
      <ProviderMocks>
        <Product />
      </ProviderMocks>
    );
    expect(product.length).toEqual(1);
  });

  test('Comprobar el boton de comprar', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMocks>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMocks>
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
/*
mount --> Cuando necesitas el DOM
shallow --> Solo necesitas algo particular del componente. No ocupas todo el DOM
*/
