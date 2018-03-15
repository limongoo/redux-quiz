import { GREETING, NAME } from './reducers';

export const displayText = ACTION => payload => {
  return ({ 
    type: ACTION,
    payload 
  });
};

export const changeGreeting = displayText(GREETING);
export const changeName = displayText(NAME);