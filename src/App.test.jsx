import { getByAltText, render, screen } from '@testing-library/react'
import App from './App'

test('Should render the header', async () => {
  render(<App />)

  // header img
  const headerImg = screen.getByAltText('Alchemy Logo')

  // meet vonta

  screen.debug()
})
