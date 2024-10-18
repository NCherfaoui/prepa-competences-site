import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../src/pages/NotFound';

it('should render NotFound component for unknown route', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/unknown']}>
      <Routes>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MemoryRouter>
  );
  expect(getByText('404 Not Found')).toBeInTheDocument();
});