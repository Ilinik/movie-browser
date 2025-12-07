import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './routing/routes.tsx';
import './assets/styles/main.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClinet = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClinet}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
