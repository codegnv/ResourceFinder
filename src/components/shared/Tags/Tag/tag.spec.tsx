import { render, screen } from 'test-utils'
import { Tag, ITagProps } from './Tag'

const generateProps = () =>
  ({
    tag: {
      id: 1,
      name: 'name',
      preferred: false,
    },
  } as ITagProps)

describe('Tag', () => {
  it('renders', () => {
    const props = generateProps()
    render(<Tag {...props} />)

    const heading = screen.getByRole('button', {
      name: /name/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
