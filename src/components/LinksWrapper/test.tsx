import { render, screen } from '@testing-library/react'
import LinksWrapper from '.'

describe('<LinksWrapper/>', () => {
  it('should render link and children', () => {
    render(<LinksWrapper href="/my-link">Anything</LinksWrapper>)
    const children = screen.getByRole('link', { name: /anything/i })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')
  })
})
