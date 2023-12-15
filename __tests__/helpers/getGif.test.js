import { getGif } from '../../src/helpers/getGif'
import { fetch } from 'whatwg-fetch';

/* eslint-disable no-undef */
describe('Pruebas en getGif', () => {
  test('Debe de retornar un arreglo de gif', async () => {

    const gif = await getGif('One Punch');

    console.log(gif)

    expect(gif.length).toBeGreaterThan(0)
    
    expect(gif[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    })
  })
})
