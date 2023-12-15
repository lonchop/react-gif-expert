import { AddCategory } from '../../src/components'
import { fireEvent, render, screen } from '@testing-library/react'

/* eslint-disable no-undef */
describe('Pruebas en <AddCategory />', () => {
  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<AddCategory onNewCategory={() => {}} />)
    expect(container).toMatchSnapshot()
  })

  test('Debe cambiar el valor de la caja de texto', () => {
    render(<AddCategory onNewCategory={() => {}} />)
    const input = screen.getByRole('textbox')

    screen.debug()

    fireEvent.input(input, { target: { value: 'Jose' } })

    expect(input.value).toBe('Jose')
  })

  test('Debe de llamar onNewCategory si el input tiene un valor', () => {
    const inputValue = 'Jose'
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)

    const input = screen.getByRole('textbox')

    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: inputValue } })

    fireEvent.submit(form)

    expect(input.value).toBe('')

    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(inputValue)
  })

  test('No debe llamar el onNewCategory si el input esta vació', () => {
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)

    const form = screen.getByRole('form')

    fireEvent.submit(form)

    expect(onNewCategory).toHaveBeenCalledTimes(0)
    expect(onNewCategory).not.toHaveBeenCalled()
    expect(onNewCategory).not.toHaveBeenCalledWith('')

  })
})
