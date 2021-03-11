import './CreditCardForm.scss';
import React from 'react';

const CreditCardForm: React.FC = () => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <div className="credit-card-form">
      <form className="credit-card-form__form">
        <label className="credit-card-form__label">Card Number</label>
        <input
          className="credit-card-form__input"
          type="number"
          value={cardNumber}
          name="cardNumber"
          onChange={handleInputChange}
        />
        <label className="credit-card-form__label">
          Card Name {creditCard.cardNumber}
        </label>
        <input
          className="credit-card-form__input credit-card__name"
          type="text"
        />
        <div className="credit-card-form__group">
          <div className="credit-card-form__child">
            <label className="credit-card-form__label">Expiration Date</label>
            <div className="credit-card-form__double">
              <input className="credit-card-form__input" type="number" />
              <input className="credit-card-form__input" type="number" />
            </div>
          </div>
          <div className="credit-card-form__child">
            <label className="credit-card-form__label">CVV</label>
            <input className="credit-card-form__input" type="number" />
          </div>
        </div>
        <input
          className="credit-card-form__button"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default CreditCardForm;
