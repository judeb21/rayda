import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider, createTheme } from '@mui/material';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { apiSlice } from './api/apiSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: "#004CCC",
    },
    secondary: {
      main: "#D0D5DD",
    },
    error: {
      main: "#F04438",
    }
  },
  typography: {
    myVariant: {
      fontSize: "30px",
      color: "#101828",
      lineHeight: "38px",
    }
  },
  spacing: 1
})

root.render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
