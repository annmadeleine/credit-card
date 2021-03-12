import React from 'react';
import { shallow } from 'enzyme';
import CreditCard from './CreditCard';

const wrapper = shallow(<CreditCard />);

expect(wrapper.find('.credit-card-form').exists()).toBeTruthy();
