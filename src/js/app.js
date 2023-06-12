'use strict';

export default class Validator {
    static validateUsername(use) {
        let fal = false;
        let validate = /^[a-zA-Z]+([a-zA-Z]|[-_]|\d{0,3}?)*[a-zA-Z]+$/;

        fal = validate.test(use);
        if (fal) {
            fal = !(/\d{4}/.test(use));
        }
        return fal;
    }
}