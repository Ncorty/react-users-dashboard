import React from 'react';
import ReactDOM from 'react-dom';
import App  from './app/App';

const root = document.getElementById('root');
if (!root){
    console.error('Root element not found');
    throw new Error('Root element not found');
}

ReactDOM.render(<App />, root);