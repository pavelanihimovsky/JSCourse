const { describe, it } = require('mocha');
const { assert } = require('chai');
const logger = require('../utils/log.util');
const Wait = require('../utils/wait.util');

describe('Wait util tests', () => {
    it('should wait for "true"', () => {
        const wait = new Wait();
        return wait.forTrue(() => true, 5, 1000, 0).then(result => { assert.isTrue(result); });
    });

    it('should wait for "false"', () => {
        const wait = new Wait();
        return wait.forTrue(() => false, 5, 1000, 0).then(result => { assert.isFalse(result); });
    });

    it('should wait for "true"', () => {
        const wait = new Wait();
        return wait.forFalse(() => true, 5, 1000, 0).then(result => { assert.isFalse(result); });
    });

    it('should wait for "false"', () => {
        const wait = new Wait();
        return wait.forFalse(() => false, 5, 1000, 0).then(result => { assert.isTrue(result); });
    });
});