import { stringReducer, GREETING } from './reducers';
import { displayText } from './actions';

describe('reducers', () => {
  
  const textGreeting = stringReducer('Hello', GREETING);

  it('initialize', () => {
    expect(textGreeting(undefined, {})).toBe('Hello');
  });
  
  
  it('update greeting', () => {
    const state = textGreeting('Hello', { type: GREETING, payload: 'Hi' });
    expect(state).toBe('Hi');
  });

});

describe('actions', () => {
  const change = displayText(GREETING);

  it('makes change', () => {
    const action = change('Hola');
    expect(action).toEqual({
      type: GREETING,
      payload: 'Hola'
    });
  });
});