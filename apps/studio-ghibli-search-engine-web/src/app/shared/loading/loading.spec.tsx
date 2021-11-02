import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import Loading from './loading';

describe('Loading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Loading />);
    expect(baseElement).toBeTruthy();
  });

  it('should not have accessibility violations', async () => {
    const { container } = render(
      <Loading />
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
