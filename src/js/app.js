'use strict';

export default class Validator {
    static validateUsername(username) {
      const usernameRegex = /^[a-zA-Z0-9_-]+$/;
      const fourDigitsRegex = /\d{4}/;
  
      const isValid = usernameRegex.test(username) && !fourDigitsRegex.test(username);
      return isValid;
    }
  }