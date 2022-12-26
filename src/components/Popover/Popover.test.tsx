import { render } from '@testing-library/react'
import { Popover } from '.'

const onClose = jest.fn()
const cb = jest.fn()

describe('Popover Component', () => {
    test('should be rendered correctly', () => {
        expect(render(<Popover
            onCloseAction={onClose}
            content={[{title: 'First', callback: cb}]}
        />)).toMatchSnapshot()
    })
})
