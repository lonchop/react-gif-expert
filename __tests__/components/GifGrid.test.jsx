/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../src/components'
import { useFetchGif } from '../../src/hooks/useFetchGif'
jest.mock('../../src/hooks/useFetchGif')

describe('Pruebas en <GifGrid />', () => {
  const category = 'One Punch'
  test('Debe hacer match con el snapshot', () => {
    useFetchGif.mockReturnValue({
      images: [],
      isLoading: true,
    })

    const { container } = render(<GifGrid category={category} />)

    expect(container).toMatchSnapshot()
  })

  test('Debe mostrar el loading inicialmente', () => {
    useFetchGif.mockReturnValue({
      images: [],
      isLoading: true,
    })

    render(<GifGrid category={category} />)
    expect(screen.getByText('Cargando...'))
  })

  test('Debe mostrar items cuando cargan imágenes useFetchGif', () => {
    const gif = [
      {
        id: 1,
        title: 'Saitama',
        url: 'http://localhost/image1.jpg',
      },
      {
        id: 2,
        title: 'Genos',
        url: 'http://localhost/image2.jpg',
      },
    ]

    useFetchGif.mockReturnValue({
      images: gif,
      isLoading: false,
    })

    render(<GifGrid category={category} />)
    screen.debug()
    expect(screen.getAllByRole('img').length).toBe(2)
  })
})
