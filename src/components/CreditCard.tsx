import './CreditCard.scss';
import React from 'react';

const CreditCard: React.FC = () => {
  return (
    <div className="credit-card">
      <div className="credit-card__inner">
        <div className="credit-card__front">
          <div className="credit-card__card">
            <div className="credit-card__number">#### #### #### ####</div>
            <div className="credit-card__group">
              <div className="credit-card__name">John Doe</div>
              <div className="credit-card__expire">09/21</div>
            </div>
          </div>
        </div>
        <div className="credit-card__back">
          <div className="credit-card__card">
            <div className="credit-card__stripe"></div>
            <div className="credit-card__group">
              <div className="credit-card__empty">
                <span className="credit-card__cvv">502</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreditCard;
