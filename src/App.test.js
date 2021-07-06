import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("App component", () => {
  it("Whether the app component is running or not ->", () => {
    const { debug } = render(<App />);
    debug()
  })
})