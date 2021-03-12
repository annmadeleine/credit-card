import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import CreditCardForm from './components/CreditCardForm';

if (process.env.NODE_ENV !== 'production') {
  console.log('We are in development mode!');
}

const App = () => (
  <div className="container">
    <CreditCardForm />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
