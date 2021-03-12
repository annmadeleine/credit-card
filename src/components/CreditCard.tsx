import './CreditCard.scss';
import React from 'react';

interface CreditCardProps {
  readonly cardNumber?: string | undefined;
  readonly cardHolder?: string;
  readonly cardExpiration?: string | undefined;
  readonly cardCVV?: string;
  readonly onFocus?: boolean;
}

const CreditCard = (values: CreditCardProps): JSX.Element => {
  const { cardNumber, cardHolder, cardExpiration, cardCVV, onFocus } = values;
  return (
    <div className="credit-card">
      <div className={`credit-card__inner ${onFocus ? 'active' : ''}`}>
        <div className="credit-card__front">
          <div className="credit-card__card">
            <div className="credit-card__number">
              {cardNumber ? cardNumber : '#### #### #### ####'}
            </div>
            <div className="credit-card__group">
              <div className="credit-card__holder">
                {cardHolder ? cardHolder : 'John Doe'}
              </div>
              <div className="credit-card__expire">
                {cardExpiration ? cardExpiration : '00/00'}
              </div>
            </div>
          </div>
        </div>
        <div className="credit-card__back">
          <div className="credit-card__card">
            <div className="credit-card__stripe"></div>
            <div className="credit-card__group">
              <div className="credit-card__empty">
                <span className="credit-card__cvc">
                  {cardCVV ? cardCVV : '000'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreditCard;
