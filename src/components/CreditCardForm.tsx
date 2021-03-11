import './CreditCardForm.scss';
import React from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';

interface CreditCardProps {
  cardNumber: number;
  cardName: string;
  cardExpiration: number;
  cardCVV: number;
}

const initialValues: CreditCardProps = {
  cardNumber: undefined,
  cardName: '',
  cardExpiration: undefined,
  cardCVV: undefined,
};

const CreditCardForm: React.FC = () => {
  const handleOnSubmit = (
    values: CreditCardProps,
    { setSubmitting }: FormikHelpers<CreditCardProps>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  return (
    <div>
      <div className="credit-card-form">
        <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
          {({ values, handleSubmit }) => {
            return (
              <Form className="credit-card-form__form" onSubmit={handleSubmit}>
                <label htmlFor="cardNumber" className="credit-card-form__label">
                  Card Number
                </label>
                <Field
                  id="cardNumber"
                  name="cardNumber"
                  className="credit-card-form__input"
                  type="number"
                  value={values.cardNumber}
                />
                <label htmlFor="cardName" className="credit-card-form__label">
                  Card Name
                </label>
                <Field
                  id="cardName"
                  name="cardName"
                  className="credit-card-form__input credit-card__name"
                  type="text"
                  value={values.cardName}
                />
                <div className="credit-card-form__group">
                  <div className="credit-card-form__child">
                    <label
                      htmlFor="cardExpiration"
                      className="credit-card-form__label"
                    >
                      Expiration Date
                    </label>
                    <Field
                      id="cardExpiration"
                      name="cardExpiration"
                      className="credit-card-form__input"
                      type="number"
                      value={values.cardExpiration}
                    />
                  </div>
                  <div className="credit-card-form__child">
                    <label
                      htmlFor="cardCVV"
                      className="credit-card-form__label"
                    >
                      CVV
                    </label>
                    <Field
                      id="cardCVV"
                      name="cardCVV"
                      className="credit-card-form__input"
                      type="number"
                      value={values.cardCVV}
                    />
                  </div>
                </div>
                <button className="credit-card-form__button" type="submit">
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default CreditCardForm;
