/* eslint-disable no-undef */
import { screen, render, fireEvent } from '@testing-library/react'
import { GifExpertApp } from '../src/GifExpertApp'
import { fetch } from 'whatwg-fetch'

describe('Pruebas en <GifExpertApp />', () => {
  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifExpertApp />)
    screen.debug()
    expect(container).toMatchSnapshot()
  })
  test('Debe funcionar el input', () => {
    // Renderiza el componente
    // const { getByPlaceholderText } = render(<GifExpertApp />)
    render(<GifExpertApp />)


    // Obtiene el input por el placeholder
    // const input = getByPlaceholderText('Buscar gif')
    const input = screen.getByRole('textbox')

    // Simula escribir en el input
    fireEvent.change(input, { target: { value: 'Texto de prueba' } })

    // Verifica que el valor del input sea el esperado
    expect(input.value).toBe('Texto de prueba')
  })
})
