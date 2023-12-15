import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components'

/* eslint-disable no-undef */
describe('Pruebas en <GifItem />', () => {
  const title = 'Soy un titulo'
  const url = 'http://localhost:5173/'
  test('Debe hacer match con el snapshot', () => {
    const { container } = render(
      <GifItem
        title={title}
        url={url}
      />
    )
    expect(container).toMatchSnapshot()
  })

  test('Debe mostrar la imagen con el URL y el ALT indicados', () => {
    render(
      <GifItem
        title={title}
        url={url}
      />
    )
    // screen.debug()

    // expect(screen.getByRole('img').src).toBe(url)
    // expect(screen.getByRole('img').alt).toBe(title)
    // Es igual que lo anterior, pero de manera mas corta y mejor
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('Debe de mostrar el titulo en el componente', () => {
    render(
      <GifItem
        title={title}
        url={url}
      />
    )

    expect(screen.getByText(title)).toBeTruthy()
  })
})
