import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import Router from './Router';
import './assets/index.css';

//! Mock API
import { worker } from './mocks/browser';
worker.start();
////

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  </React.StrictMode>
);
