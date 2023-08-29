import { FavoriteCardsProvider } from './components/favorite-cards-provider/FavoriteCardsProvider';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './common/queryClient';
import { ThemeProvider } from '@mui/material';
import { App } from './components/app/App';
import ReactDOM from 'react-dom/client';
import { theme } from './common/theme';
import React from 'react';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <FavoriteCardsProvider>
          <App />
        </FavoriteCardsProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);