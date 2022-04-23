import { render } from '@testing-library/react';

import TerminalInput from './terminal-input';

describe('TerminalInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TerminalInput />);
    expect(baseElement).toBeTruthy();
  });
});
