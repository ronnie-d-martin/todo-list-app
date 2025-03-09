import { render } from '@testing-library/react'
import { Home } from './Home';

describe('Home', () => {
    it('should render with correct h1 header', () => {
        const { queryByText } = render(<Home />)
        expect(queryByText('Home1')).not.toBeInTheDocument()
    });
});