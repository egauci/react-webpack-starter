import axios from 'axios';
import {numbersApiKey} from '../config/apikeys.js';
import {numbersApiUrl} from '../config';

export const setWinsize = payload => ({type: 'SET_WINSIZE', payload});

// getFact makes an API call to fetch a random number fact. Axios returns
// a promise, which will be intercepted by the promise middleware
// and held until it resolves.
export const getFact = () => {
  return {
    type: 'GET_FACT',
    payload: axios.get(numbersApiUrl, {
      headers: {
        'X-Mashape-Key': numbersApiKey
      }
    })
  };
};

export const clearFact = () => ({type: 'CLEAR_FACT'});
