/* eslint-disable no-undef */
import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGif } from '../../src/hooks/useFetchGif'
import { fetch } from 'whatwg-fetch'

describe('Pruebas en useFetchGif', () => {
  test('Debe regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGif('One Punch'))

    const { images, isLoading } = result.current

    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  test('Debe retornar un arreglo de imágenes y isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGif('One Punch'))

    await waitFor(() => expect(result.current.images.length).toBeGreaterThan(0))

    const { images, isLoading } = result.current

    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})
