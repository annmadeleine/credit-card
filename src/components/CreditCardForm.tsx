import './CreditCardForm.scss';
import React, { useState } from 'react';
import { Formik, Form, Field, FormikHelpers, ErrorMessage } from 'formik';
import CreditCard from './CreditCard';
import * as Yup from 'yup';
import valid from 'card-validator';

interface CreditCardFormProps {
  cardNumber?: string;
  cardHolder: string;
  cardExpiration?: string;
  cardCVV?: string;
}

const initialValues: CreditCardFormProps = {
  cardNumber: '',
  cardHolder: '',
  cardExpiration: '',
  cardCVV: '',
};

const CreditCardForm: React.FC = () => {
  const [onFocus, setOnFocus] = useState(false);
  const handleFocus = () => {
    setOnFocus(true);
  };
  const handleOnBlur = () => {
    setOnFocus(false);
  };

  const handleOnSubmit = (
    values: CreditCardFormProps,
    { setSubmitting }: FormikHelpers<CreditCardFormProps>
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  };

  return (
    <div>
      <div className="credit-card-form">
        <Formik
          initialValues={initialValues}
          onSubmit={handleOnSubmit}
          onBlur={handleOnBlur}
          validationSchema={Yup.object().shape({
            cardNumber: Yup.string()
              .test(
                'test-number', // this is used internally by yup
                'Invalid number', //validation message
                (value) => valid.number(value).isValid
              ) // return true false based on validation
              .required(),
            cardHolder: Yup.string()
              .test(
                'test-text', // this is used internally by yup
                'Invalid name', //validation message
                (value) => valid.cardholderName(value).isValid
              ) // return true false based on validation
              .required(),
            cardExpiration: Yup.string()
              .test(
                'test-number', // this is used internally by yup
                'Invalid number', //validation message
                (value) => valid.expirationDate(value).isValid
              ) // return true false based on validation
              .required(),
            cardCVV: Yup.string()
              .test(
                'test-number', // this is used internally by yup
                'Invalid number', //validation message
                (value) => valid.cvv(value).isValid
              ) // return true false based on validation
              .required(),
          })}
        >
          {({ values, handleSubmit, handleBlur: handleFormikBlur }) => {
            return (
              <Form className="credit-card-form__form" onSubmit={handleSubmit}>
                <CreditCard {...values} onFocus={onFocus} />
                <div className="credit-card-form__title">
                  <label
                    htmlFor="cardNumber"
                    className="credit-card-form__label"
                  >
                    Card Number
                  </label>
                  <ErrorMessage
                    name="cardNumber"
                    render={(msg) => (
                      <div className="credit-card-form__warning">{msg}</div>
                    )}
                  />
                </div>
                <Field
                  id="cardNumber"
                  name="cardNumber"
                  className="credit-card-form__input"
                  type="string"
                  value={values.cardNumber
                    .replace(/[^\dA-Z]/g, '')
                    .replace(/(.{4})/g, '$1 ')
                    .trim()}
                />
                <div className="credit-card-form__title">
                  <label
                    htmlFor="cardHolder"
                    className="credit-card-form__label"
                  >
                    Card Holder
                  </label>
                  <ErrorMessage
                    name="cardHolder"
                    render={(msg) => (
                      <div className="credit-card-form__warning">{msg}</div>
                    )}
                  />
                </div>
                <Field
                  id="cardHolder"
                  name="cardHolder"
                  className="credit-card-form__input credit-card__holder"
                  type="text"
                  value={values.cardHolder}
                />
                <div className="credit-card-form__group">
                  <div className="credit-card-form__child">
                    <div className="credit-card-form__title">
                      <label
                        htmlFor="cardExpiration"
                        className="credit-card-form__label"
                      >
                        Expiration Date
                      </label>
                      <ErrorMessage
                        name="cardExpiration"
                        render={(msg) => (
                          <div className="credit-card-form__warning">{msg}</div>
                        )}
                      />
                    </div>
                    <Field
                      id="cardExpiration"
                      name="cardExpiration"
                      className="credit-card-form__input"
                      type="text"
                      value={values.cardExpiration
                        .replace(/^(\d\d)(\d)$/g, '$1/$2')
                        .replace(/^(\d\d\/\d\d)(\d+)$/g, '$1/$2')
                        .replace(/[^\d\/]/g, '')}
                    />
                  </div>
                  <div className="credit-card-form__child">
                    <div className="credit-card-form__title">
                      <label
                        htmlFor="cardCVV"
                        className="credit-card-form__label"
                      >
                        CVC
                      </label>
                      <ErrorMessage
                        name="cardCVV"
                        render={(msg) => (
                          <div className="credit-card-form__warning">{msg}</div>
                        )}
                      />
                    </div>
                    <Field
                      id="cardCVV"
                      name="cardCVV"
                      className="credit-card-form__input"
                      type="text"
                      value={values.cardCVV}
                      onFocus={handleFocus}
                      onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                        handleFormikBlur(e);
                        handleOnBlur();
                      }}
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
