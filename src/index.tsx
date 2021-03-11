import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';

import CreditCardForm from './components/CreditCardForm';
import CreditCard from './components/CreditCard';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const App = () => (
  <div className="container">
    <CreditCard />
    <CreditCardForm />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
