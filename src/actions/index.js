import axios from 'axios';
import {numbersApiKey} from '../config/apikeys.js';
import {numbersApiUrl} from '../config';

export const setWinsize = payload => ({type: 'SET_WINSIZE', payload});

export const scrollY = payload => ({type: 'SET_SCROLLY', payload});

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
