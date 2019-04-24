const { describe, it } = require('mocha');
const { assert } = require('chai');
const logger = require('../utils/log.util');
const dateTime = require('../utils/dateTime.util');

describe('Hello World TestSuite', () => {
    it('should write "Hello World"', () => {
        logger.info('Hello World');
    });

    it('dateTime.today should return today date', () => {
        assert.equal(dateTime.today(), Date.today);
    });

    it('setYear should return date with 2010 year', () => {
        assert.equal(dateTime.setYear(new Date(), '2010'), new Date().setYear('2010'));
    });

    it('daysDifference should return correct days difference', () => {
        assert.equal(dateTime.daysDifference(new Date('October 13'), new Date('October 14')), 1);
    });
});